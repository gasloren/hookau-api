import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import { randomId } from '../../utils.js';

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
      orderId, // <-- if exists we are calling from order page
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

    // ***************
    // ** Remove Point

    if (removeId) {
      const updated = await mdb.buyers.update({
        email: userEmail
      }, {
        $unset: {
          [`points.${removeId}`]: ''
        },
        $set: {
          statusId: randomId()
        }
      });
      if (!updated) return OOPS;
      return {
        success: true,
        redirect: !orderId
          ? `/buyer/${city}/points`
          : `/buyer/${city}/order/${orderId}/delivery`
      };
    }

    // ***************
    // ** Update Point

    if (!pointData?.id) return BAD_PARAMS;

    const updated = await mdb.buyers.update({
      email: userEmail
    }, {
      $set: {
        [`points.${pointData.id}`]: pointData
      }
    });

    if (!updated) return OOPS;

    if (orderId) {
      await mdb.buyers.update({
        email: userEmail
      }, {
        $set: {
          pointData,
          statusId: randomId()
        }
      });
    }

    return {
      success: true,
      redirect: !orderId
        ? `/buyer/${city}/points`
        : `/buyer/${city}/order/${orderId}/delivery/${pointData.id}/view`
    };

  }

}

// --
