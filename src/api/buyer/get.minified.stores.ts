import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

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
): T.Api.Buyer.GetMinifiedStores.Method {
  
  return async (params) => {

    const {
      city,
      genre = 'all'
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
      payload: toMinifiedStores(stores, genre) || []
    };

  }

}

// --
