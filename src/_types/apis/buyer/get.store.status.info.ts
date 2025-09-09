
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  StoreStatusInfo
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-store-status-info';

// ---

export type Params = {
  city: string;
  storeId: string;
}

export type Payload = StoreStatusInfo;

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
