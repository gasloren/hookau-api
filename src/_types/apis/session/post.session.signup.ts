
// response types
import type { ApiResponse } from '../shared.js';

// models types


// ---

export type Endpoint = '/session-api/signup';

// ---

export type Params = {
  email: string;
}

export type Payload = {
  expiresAt: number;
};

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;
