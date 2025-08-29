import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import {
  toStoresStatusInfo
} from './helpers/to.stores.status.info.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getStoresStatusInfo(
  mdb: IDatabase
): T.Api.Buyer.GetStoresStatusInfo.Method {
  
  return async (params) => {

    const {
      city
    } = params;

    const stores = await mdb.stores.search({
      city,
      published: 'SHOW',
      menue: { $exists: true }
    }, {
      sort: {
        ['data.index']: 1
      }
    });

    return {
      payload: toStoresStatusInfo(stores) || []
    };

  }

}

// --
