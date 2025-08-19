import type { IDatabase } from '../mongo/types.js';

import type {
  GetStoresStatusInfo
} from '../_types/request/buyers.api.js';

import {
  toStoresStatusInfo
} from './helpers/to.stores.status.info.js'

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getStoresStatusInfo(
  mdb: IDatabase
): GetStoresStatusInfo {
  
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
