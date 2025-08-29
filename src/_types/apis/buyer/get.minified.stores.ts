
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  StoreMinified
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-minified-stores';

// ---

export type Params = {
  city: string;
  genre?: string;
}

export type Payload = StoreMinified[];

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
