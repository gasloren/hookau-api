import type {
  GetCitiesList,
  GetMinifiedStores,
  GetStoresStatusInfo,
  GetStoreStatusInfo,
  GetStoresPromos,
  GetStoreItem,
  GetFormattedMenue,
  GetMenuPageData,
  PostMenuOrderItems,
  GetOrderPageData,
  GetPointsPageData,
  PostAddressPoint
} from './index.js';

// --

// Interface for implements BuyerApi
export interface Controller {
  getCitiesList: GetCitiesList.Method;
  getMinifiedStores: GetMinifiedStores.Method;
  getStoresStatusInfo: GetStoresStatusInfo.Method;
  getStoreStatusInfo: GetStoreStatusInfo.Method;
  getStoresPromos: GetStoresPromos.Method;
  getStoreItem: GetStoreItem.Method;
  getFormattedMenue: GetFormattedMenue.Method;
  getMenuPageData: GetMenuPageData.Method;
  postMenuOrderItems: PostMenuOrderItems.Method;
  getOrderPageData: GetOrderPageData.Method;
  getPointsPageData: GetPointsPageData.Method;
  postAddressPoint: PostAddressPoint.Method;
}