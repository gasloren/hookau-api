import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getStoreItem(
  mdb: IDatabase
): T.Api.Buyer.GetStoreItem.Method {
  
  return async (params) => {

    console.log('***', params);

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
        payload: store
      }
    }

    return {
      warning: 'No se encontró el comercio'
    };

  }

}

// --
