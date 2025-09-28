
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  Point
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/post-address-point';

// ---

export type Params = {
  city: string;
  removeId?: string;
  pointData?: Point;
}

export type Payload = void;

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
