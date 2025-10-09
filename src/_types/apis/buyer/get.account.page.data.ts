
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Buyer,
  HookerV1
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-account-page-data';

// ---

export type Params = {
  city: string;
}

export type Payload = {
  buyer: Buyer;
  rider: HookerV1 | null;
}

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
