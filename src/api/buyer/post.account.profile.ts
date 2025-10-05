import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import { BAD_PARAMS, OOPS } from '../constants.js';

import { checkBuyerRedirect } from './helpers/check.email.redirect.js';

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

    if (!city || !profile) return BAD_PARAMS;

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, city, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

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
