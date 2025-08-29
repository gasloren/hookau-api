import type {
  GetMinifiedStores,
  GetStoresStatusInfo
} from './index.js';

// --

// Interface for implements BuyerApi
export interface Controller {

  // get stores minified list 
  getMinifiedStores: GetMinifiedStores.Method;

  getStoresStatusInfo: GetStoresStatusInfo.Method;
  
}