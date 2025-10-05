import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS, BAD_PARAMS } from '../constants.js';
import { randomId } from '../../utils.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postOrderModeData(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.ProstOrderModeData.Method {
  
  return async (params) => {

    const {
      city,
      orderId,
      modality,
      receiver
    } = params;

    if (!city || !orderId) return BAD_PARAMS;

    if (modality !== 'delivery' && modality !== 'takeaway') {
      return BAD_PARAMS;
    }

    if (!receiver?.fname || !receiver?.phone) {
      return BAD_PARAMS;
    }

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, city, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    const updated = await mdb.orders.update({
      _id: orderId,
      process: 0,
      clientId: buyer._id,
      storeCity: city
    }, {
      $set: {
        modality,
        receiver,
        statusId: randomId()
      }
    });

    if (!updated) return OOPS;

    return {
      success: true,
      redirect: `/buyer/${city}/order/${orderId}/${modality}/address`
    };

  }

}

// --
