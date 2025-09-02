
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  StorePromos
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-stores-promos';

// ---

export type Params = {
  city: string;
}

export type Payload = StorePromos[];

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
