
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Modality,
  Receiver
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/post-order-mode-data';

// ---

export type Params = {
  city: string;
  orderId: string;
  modality: Modality;
  receiver: Receiver;
}

export type Payload = void;

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
