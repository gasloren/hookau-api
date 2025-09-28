import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { getCitiesList } from './get.cities.list.js';
import { getMinifiedStores } from './get.minified.stores.js';
import { getStoreItem } from './get.store.item.js';
import { getStoresPromos } from './get.stores.promos.js';
import { getStoresStatusInfo } from './get.stores.status.info.js';
import { getStoreStatusInfo } from './get.store.status.info.js';
import { getFormattedMenue } from './get.formatted.menue.js';
import { getMenuPageData } from './get.menu.page.data.js';
import { postMenuOrderItems } from './post.menu.order.items.js';
import { getOrderPageData } from './get.order.page.data.js';
import { getPointsPageData } from './get.points.page.data.js';
import { postAddressPoint } from './post.address.point.js';

// --

export function buyerApiController(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.Controller {

  return {
    getCitiesList: getCitiesList(mdb),
    getMinifiedStores: getMinifiedStores(mdb),
    getStoresStatusInfo: getStoresStatusInfo(mdb),
    getStoreStatusInfo: getStoreStatusInfo(mdb),
    getStoresPromos: getStoresPromos(mdb),
    getStoreItem: getStoreItem(mdb),
    getFormattedMenue: getFormattedMenue(mdb),
    getMenuPageData: getMenuPageData(mdb, userEmail),
    postMenuOrderItems: postMenuOrderItems(mdb, userEmail),
    getOrderPageData: getOrderPageData(mdb, userEmail),
    getPointsPageData: getPointsPageData(mdb, userEmail),
    postAddressPoint: postAddressPoint(mdb, userEmail)
  };

}