
import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import type { IRedisDB } from '../../redis/types.js';

import { checkPendingEmail } from './helpers/check.pending.email.js';
import { generateNewToken } from './helpers/generate.new.token.js';
import { migrateClientToBuyer } from './helpers/migrate.client.to.buyer.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postSessionVerify(
  mdb: IDatabase,
  rdb: IRedisDB
): T.Api.Session.PostSessionVerify.Method {
  
  return async (params) => {

    const {
      app,
      city,
      email,
      vcode,
      newEmail
    } = params;

    const storedCode = await rdb.get(email);

    if (!storedCode || vcode !== storedCode) {
      return {
        warning: 'El pin es incorrecto o ha caducado, generara otro nuevamente',
        rejected: true
      }
    }

    // ** verification code is valid

    const auth = await mdb.auth.getOne({
      email
    });

    const hasAuth = app === 'buyer' ||
      !!auth?.allow?.[app]?.includes(city);

    if (!hasAuth) {
      return {
        redirect: `/${app}/${city}/rejected`,
      }; 
    }

    // ** user is authorized
    
    // buyer "allow" is not required
    if (app === 'buyer') {
      if (!auth) {
        await mdb.auth.insert({ email, allow: {} });
        await checkPendingEmail(mdb, email); // replace buyer email
        await migrateClientToBuyer(mdb, email); // if buyer not exists
      } else if (newEmail && newEmail !== email) {
        // trying to replace buyer auth email
        // 1st check if buyer with newEmail exists
        const buyer = await mdb.buyers.getOne({ email: newEmail });
        if (buyer) {
          return {
            warning: `"${newEmail}" ya está en uso por otra cuenta`
          };
        }
        // 2nd store newEmail as pending for validation
        await mdb.auth.update({ email }, {
          $set: {
            pending: newEmail,
            expires: Date.now() + (1000 * 60 * 10)
          }
        });
      }
    }

    // create new token and store on redis with the email as key
    const expSeconds = 60 * 60 * 24 * 90; // 90 dias
    const token = await generateNewToken(rdb, email, expSeconds);

    let redirectTo = `/${app}/${city}`;
    if (newEmail && app === 'buyer') {
      redirectTo = `/${app}/${city}/login?email=${newEmail}`;
    }
  
    return {
      success: true,
      token: {
        name: 'autk',
        value: token,
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: expSeconds,
        priority: 'high'
      },
      redirect: redirectTo,
      payload: {
        app,
        city,
        email
      }
    };

  }

}

// --
