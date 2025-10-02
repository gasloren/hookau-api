import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';
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
      city: cityId,
      storeId
    } = params;

    if (!cityId || !storeId) {
      return {
        warning: 'Parametros invalidos'
      };
    }

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, cityId, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    const city = await mdb.cities.getOne({ _id: cityId });
    if (!city?._id) return OOPS;

    const store = await mdb.stores.getOne({ city: cityId, _id: storeId });
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
      const newData = toNewOrderData(city, store, buyer, credentials);
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
