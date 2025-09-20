
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Order,
  StoreStatusInfo
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-order-page-data';

// ---

export type Params = {
  city: string;
  orderId: string;
}

export type Payload = {
  orderData: Order | null;
  statusInfo: StoreStatusInfo;
}

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
