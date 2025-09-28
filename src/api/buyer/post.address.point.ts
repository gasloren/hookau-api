import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkUserAuth } from '../auth.handler.js';

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
      removeId,
      pointData
    } = params;

    if (!city) {
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

    const buyer = await mdb.buyers.getOne({ email: userEmail });
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

    return {
      success: !!updated
    };

  }

}

// --
