import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { checkUserAuth } from '../auth.handler.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postAccountProfile(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.PostAccountProfile.Method {
  
  return async (params) => {

    const {
      city,
      profile
    } = params;

    if (!city || !profile) {
      return {
        warning: 'Parametros invalidos'
      };
    }

    const hasAuth = await checkUserAuth(mdb, 'buyer', city, userEmail);

    if (!hasAuth) {
      return {
        warning: 'Debe iniciar sesión',
        rejected: true,
        redirect: `/buyer/${city}/login`
      };
    }

    const updated = await mdb.buyers.update({
      email: userEmail
    }, {
      $set: {
        profile
      }
    });

    return {
      success: !!updated,
      profile
    };

  }

}

// --
