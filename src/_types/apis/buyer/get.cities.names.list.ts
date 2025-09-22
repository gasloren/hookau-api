
// response types
import type { SelectTable } from '../../models/shared.js';
import type { ApiResponse } from '../shared.js';


// ---

export type Endpoint = '/buyer-api/get-cities-names-list';

// ---

export type Params = {}

export type Payload = SelectTable[];

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
