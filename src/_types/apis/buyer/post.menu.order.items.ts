
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  OrderItem
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/post-menu-order-items';

// ---

export type Params = {
  city: string;
  storeId: string;
  orderItems: OrderItem[];
}

export type Payload = void;

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
