
// response types
import type { ApiResponse } from '../shared.js';

// ---

export type Endpoint = '/buyer-api/post-order-point-id';

// ---

export type Params = {
  city: string;
  orderId: string;
  pointId: string;
}

export type Payload = {
  storeIsOffline?: boolean;
  itemsOutOfStock?: string[];
};

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
