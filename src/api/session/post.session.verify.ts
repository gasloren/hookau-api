
import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import type { IRedisDB } from '../../redis/types.js';

import { randomId } from '../../utils.js';
import { migrateClientToBuyer } from './migrate.client.to.buyer.js';

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
        warning: 'El código es incorrecto o ha caducado, puedes generar otro código de verificación.',
        rejected: true
      }
    }

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
    
    // buyer no necesita el allow
    if (!auth && app === 'buyer') {
      await mdb.auth.insert({ email, allow: {} });
      await migrateClientToBuyer(mdb, email); // if buyer not exists
    }

    // generate new token
    const token = randomId('', 32); // leave in 32

    // 90 dias
    const expSeconds = 60 * 60 * 24 * 90;

    await rdb.set(token, email, { EX: expSeconds });

    let redirectTo = `/${app}/${city}`;
    if (newEmail) {
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
