import type {
  GetMinifiedStores,
  GetStoresStatusInfo,
  GetStoresPromos,
  GetStoreItem
} from './index.js';

// --

// Interface for implements BuyerApi
export interface Controller {

  // get stores minified list 
  getMinifiedStores: GetMinifiedStores.Method;

  getStoresStatusInfo: GetStoresStatusInfo.Method;

  getStoresPromos: GetStoresPromos.Method;

  getStoreItem: GetStoreItem.Method;
  
}