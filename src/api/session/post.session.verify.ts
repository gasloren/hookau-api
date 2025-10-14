
// -- types
import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import type { IRedisDB } from '../../redis/types.js';

// -- helpers
import { generateTokenResponse } from './helpers/gen.token.response.js';
import { handleBuyerVerified } from './helpers/handle.buyer.verified.js';
import allowedEmails from '../../allowed.emails.js';

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

    if (!allowedEmails.includes(email)) {
      return {
        rejected: true,
        redirect: '/rejected'
      }
    }

    const storedCode = await rdb.get(email);

    if (!storedCode || vcode !== storedCode) {
      return {
        warning: 'El pin es incorrecto o ha caducado, generara otro nuevamente',
        rejected: true
      }
    }

    // ** verification code is valid

    // buyer has different logic
    if (app === 'buyer') {
      return await handleBuyerVerified(mdb, rdb, city, email, newEmail);
    }

    // ** from here is not buyer, is an operative user

    // TODO
    // check if exists user by app
    
    const hasAuth = false;

    if (!hasAuth) {
      return {
        redirect: `/${app}/${city}/rejected`,
      }; 
    }

    // ** user is authorized

    return await generateTokenResponse(rdb, email, `/${app}/${city}`);

  }

}

// --
