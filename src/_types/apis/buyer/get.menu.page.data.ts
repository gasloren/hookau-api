
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Order,
  StoreStatusInfo
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-menu-page-data';

// ---

export type Params = {
  city: string;
  storeId: string;
}

export type Payload = {
  orderItem: Order | null;
  storeName: string;
  storeLogo: string;
  statusInfo: StoreStatusInfo;
}

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
