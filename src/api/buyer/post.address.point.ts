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
export function postAddressPoint(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.PostAddressPoint.Method {
  
  return async (params) => {

    const {
      city,
      orderId,
      removeId,
      pointData
    } = params;

    if (!city) return BAD_PARAMS;

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, city, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    if (removeId) {
      const updated = await mdb.buyers.update({
        email: userEmail
      }, {
        $unset: {
          [`points.${removeId}`]: ''
        }
      });
      return {
        success: !!updated
      };
    }

    if (!pointData?.id) {
      return {
        warning: 'Parametros invalidos'
      };
    } 

    const updated = await mdb.buyers.update({
      email: userEmail
    }, {
      $set: {
        [`points.${pointData.id}`]: pointData
      }
    });

    if (!updated) return OOPS;

    if (orderId) {
      const updated = await mdb.orders.update({
        _id: orderId
      }, {
        $set: {
          pointData
        }
      });
      if (!updated) return OOPS;
      return {
        success: true,
        redirect: `/buyer/${city}/order/${orderId}/delivery`
      }
    }

    return {
      success: true,
      redirect: `/buyer/${city}/points`
    };

  }

}

// --
