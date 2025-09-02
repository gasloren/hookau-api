import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import {
  toStoresPromos
} from './helpers/to.stores.promos.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getStoresPromos(
  mdb: IDatabase
): T.Api.Buyer.GetStoresPromos.Method {
  
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
      payload: toStoresPromos(stores) || []
    };

  }

}

// --
