
// response types
import type { City } from '../../models/city.js';
import type { ApiResponse } from '../shared.js';


// ---

export type Endpoint = '/buyer-api/get-cities-list';

// ---

export type Params = void;

export type Payload = City[];

export type Method = () => Promise<ApiResponse<Payload>>;
