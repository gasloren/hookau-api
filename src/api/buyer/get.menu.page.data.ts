import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkUserAuth } from '../auth.handler.js';
import { toNewOrderData } from './helpers/to.new.order.data.js';
import { toStoreStatusInfo } from './helpers/to.stores.status.info.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getMenuPageData(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.GetMenuPageData.Method {
  
  return async (params) => {

    const {
      city,
      storeId
    } = params;

    if (!city || !storeId) {
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

    const store = await mdb.stores.getOne({ city, _id: storeId });
    if (!store) return OOPS;

    const order = await mdb.orders.getOne({
      storeId,
      process: 0,
      clientId: buyer._id
    });

    // Create a new order
    if (!order) {
      const credentials = await mdb.credentials.getOne({ storeId });
      if (!credentials) return OOPS;
      const newData = toNewOrderData(store, buyer, credentials);
      const newId = await mdb.orders.insert(newData);
      const newOrder = await mdb.orders.getOne({ _id: newId, storeId, process: 0 });
      return {
        success: !!newOrder?._id,
        payload: {
          orderData: newOrder || null,
          statusInfo: toStoreStatusInfo(store.status)
        }
      };
    }

    return {
      success: !!order?._id,
      payload: {
        orderData: order || null,
        statusInfo: toStoreStatusInfo(store.status)
      }
    };

  }

}

// --
