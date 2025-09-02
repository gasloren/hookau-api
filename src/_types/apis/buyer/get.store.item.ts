
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Store
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-store-item';

// ---

export type Params = {
  city: string;
  storeId: string;
}

export type Payload = Store;

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
