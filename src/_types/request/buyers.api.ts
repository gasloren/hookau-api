
// response types
import type { ApiResponse } from './common.js';

// models types
import type {
  StoreMinified
} from '../models/index.js';

// ---

export type TBuyersEndpoint =
  '/buyers-api/get-minified-stores';

// ---

export type GetMinifiedStoresParams = {
  city: string;
}

export type GetMinifiedStoresResponse = ApiResponse<{
  stores?: StoreMinified[];
}>;

export type GetModifiedStores = (
  params: GetMinifiedStoresParams
) => Promise<GetMinifiedStoresResponse>;

// ---
// Interface for implements StoresApi
export interface IBuyersApi {

  // get stores minified list 
  getMinifiedStores: GetModifiedStores;
  

}



