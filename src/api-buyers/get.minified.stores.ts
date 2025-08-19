import type { IDatabase } from '../mongo/types.js';

import type {
  StoreMinified
} from '../_types/models/store.js';

import type {
  GetModifiedStores
} from '../_types/request/buyers.api.js';

import {
  toMinifiedStores
} from './helpers/to.minified.stores.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getMinifiedStores(
  mdb: IDatabase
): GetModifiedStores {
  
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
      payload: toMinifiedStores(stores) || []
    };

  }

}

// --
