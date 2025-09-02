import type {
  GetMinifiedStores,
  GetStoresStatusInfo,
  GetStoresPromos
} from './index.js';

// --

// Interface for implements BuyerApi
export interface Controller {

  // get stores minified list 
  getMinifiedStores: GetMinifiedStores.Method;

  getStoresStatusInfo: GetStoresStatusInfo.Method;

  getStoresPromos: GetStoresPromos.Method;
  
}