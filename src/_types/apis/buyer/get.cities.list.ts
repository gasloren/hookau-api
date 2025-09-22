
// response types
import type { City } from '../../models/city.js';
import type { ApiResponse } from '../shared.js';


// ---

export type Endpoint = '/buyer-api/get-cities-list';

// ---

export type Params = {}

export type Payload = City[];

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
