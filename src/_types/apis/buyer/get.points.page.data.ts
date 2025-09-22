
// response types
import type { ApiResponse } from '../shared.js';

// models types
import type {
  City,
  Points
} from '../../models/index.js';

// ---

export type Endpoint = '/buyer-api/get-points-page-data';

// ---

export type Params = {
  city: string;
}

export type Payload = {
  userPoints: Points;
  citiesList: City[];
}

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
