
// response types
import type { ApiResponse } from './shared.js';

// models types
import type {
  StoreMinified,
  StoreStatusInfo
} from '../models/index.js';

// ---

export type Endpoint =
  '/buyer-api/get-minified-stores' |
  '/buyer-api/get-stores-status-info';

// ---

export type GetMinifiedStoresParams = {
  city: string;
}

export type GetMinifiedStoresPayload = StoreMinified[];

export type GetMinifiedStoresResponse = ApiResponse<GetMinifiedStoresPayload>;

export type GetMinifiedStores = (
  params: GetMinifiedStoresParams
) => Promise<GetMinifiedStoresResponse>;

// ---

export type GetStoresStatusInfoParams = {
  city: string;
}

export type GetStoresStatusInfoPayload = {
  [ storeId: string ]: StoreStatusInfo;
};

export type GetStoresStatusInfoResponse = ApiResponse<GetStoresStatusInfoPayload>;

export type GetStoresStatusInfo = (
  params: GetStoresStatusInfoParams
) => Promise<GetStoresStatusInfoResponse>;

// ---
// Interface for implements StoresApi
export interface Controller {

  // get stores minified list 
  getMinifiedStores: GetMinifiedStores;

  getStoresStatusInfo: GetStoresStatusInfo;
  
}
