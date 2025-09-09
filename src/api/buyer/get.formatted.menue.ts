import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import { toFormattedMenue } from './helpers/to.formatted.menue.js';
import { toStoreStatusInfo } from './helpers/to.stores.status.info.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getFormattedMenue(
  mdb: IDatabase
): T.Api.Buyer.GetFormattedMenue.Method {
  
  return async (params) => {

    const {
      city,
      storeId
    } = params;

    const store = await mdb.stores.getOne({
      city,
      _id: storeId
    });

    if (store?._id) {
      return {
        success: true,
        payload: {
          storeName: store.data.brand,
          storeLogo: store.data.logourl,
          statusInfo: toStoreStatusInfo(store.status),
          formattedMenue: toFormattedMenue(store.menue)
        }
      }
    }

    return {
      warning: 'No se encontró el comercio'
    };

  }

}

// --
