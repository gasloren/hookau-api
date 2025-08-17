import type { IBuyersApi } from '../_types/request/buyers.api.js';
import type { IDatabase } from '../mongo/types.js';

import { getMinifiedStores } from './get.minified.stores.js';

// --

export function buyersApi(
  mdb: IDatabase
): IBuyersApi {

  return {
    getMinifiedStores: getMinifiedStores(mdb)
  };

}