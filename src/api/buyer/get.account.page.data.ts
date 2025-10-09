import type { T } from '../../_types/index.js';
import type { HookerV1 } from '../../_types/models/user.js';
import type { IDatabase } from '../../mongo/types.js';

import { BAD_PARAMS, OOPS } from '../constants.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getAccountPageData(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.GetAccountPageData.Method {
  
  return async (params) => {

    const {
      city: cityId
    } = params;

    if (!cityId) return BAD_PARAMS;

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, cityId, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    const city = await mdb.cities.getOne({ _id: cityId });
    if (!city?._id) return OOPS;

    const rider = await mdb.users.getOne({
      email: userEmail,
      userrole: 'hooker'
    }) as HookerV1;

    return {
      success: true,
      payload: {
        buyer,
        rider
      }
    };

  }

}

// --
