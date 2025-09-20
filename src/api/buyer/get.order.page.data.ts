import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkUserAuth } from '../auth.handler.js';
import { toStoreStatusInfo } from './helpers/to.stores.status.info.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getOrderPageData(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.GetOrderPageData.Method {
  
  return async (params) => {

    const {
      city: cityId,
      orderId
    } = params;

    if (!cityId || !orderId) {
      return {
        warning: 'Parametros invalidos'
      };
    }

    const hasAuth = await checkUserAuth(mdb, 'buyer', cityId, userEmail);

    if (!hasAuth) {
      return {
        warning: 'Debe iniciar sesión',
        rejected: true,
        redirect: `/buyer/${cityId}/login`
      };
    }

    const buyer = await mdb.buyers.getOne({ email: userEmail });
    if (!buyer?._id) return OOPS;

    const order = await mdb.orders.getOne({
      _id: orderId,
      process: 0,
      clientId: buyer._id
    });
    if (!order?._id) return OOPS;

    const store = await mdb.stores.getOne({
      _id: order.storeId,
      city: cityId
    });
    if (!store) return OOPS;

    const city = await mdb.cities.getOne({
      _id: cityId
    });
    if (!city) return OOPS;

    return {
      success: !!order?._id,
      payload: {
        orderData: order || null,
        statusInfo: toStoreStatusInfo(store.status),
        cityCoords: city.coords,
        storeCoords: store.coords
      }
    };

  }

}

// --
