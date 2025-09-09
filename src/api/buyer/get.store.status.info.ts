import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';
import { toStoreStatusInfo } from './helpers/to.stores.status.info.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getStoreStatusInfo(
  mdb: IDatabase
): T.Api.Buyer.GetStoreStatusInfo.Method {
  
  return async (params) => {

    const {
      city,
      storeId
    } = params;

    const store = await mdb.stores.getOne({
      city,
      _id: storeId
    });

    if (store?.status) {
      return {
        success: true,
        payload: toStoreStatusInfo(store.status)
      }
    }

    return {
      warning: 'No se encontró el comercio'
    };

  }

}

// --
