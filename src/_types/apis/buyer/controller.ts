import type {
  GetMinifiedStores,
  GetStoresStatusInfo,
  GetStoreStatusInfo,
  GetStoresPromos,
  GetStoreItem,
  GetFormattedMenue,
  GetMenuPageData,
  PostMenuOrderItems,
  GetOrderPageData
} from './index.js';

// --

// Interface for implements BuyerApi
export interface Controller {
  getMinifiedStores: GetMinifiedStores.Method;
  getStoresStatusInfo: GetStoresStatusInfo.Method;
  getStoreStatusInfo: GetStoreStatusInfo.Method;
  getStoresPromos: GetStoresPromos.Method;
  getStoreItem: GetStoreItem.Method;
  getFormattedMenue: GetFormattedMenue.Method;
  getMenuPageData: GetMenuPageData.Method;
  postMenuOrderItems: PostMenuOrderItems.Method;
  getOrderPageData: GetOrderPageData.Method;
}