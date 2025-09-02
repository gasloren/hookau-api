import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { getMinifiedStores } from './get.minified.stores.js';
import { getStoresPromos } from './get.stores.promos.js';
import { getStoresStatusInfo } from './get.stores.status.info.js';

// --

export function buyerApiController(
  mdb: IDatabase
): T.Api.Buyer.Controller {

  return {
    getMinifiedStores: getMinifiedStores(mdb),
    getStoresStatusInfo: getStoresStatusInfo(mdb),
    getStoresPromos: getStoresPromos(mdb)
  };

}