
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  StoreStatusInfo
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-stores-status-info';

export type Params = {
  city: string;
}

export type Payload = {
  [ storeId: string ]: StoreStatusInfo;
};

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
