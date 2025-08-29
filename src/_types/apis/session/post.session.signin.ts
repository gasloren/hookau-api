
// response types
import type { ApiResponse, App } from '../shared.js';

// ---

export type Endpoint = '/session-api/signin';

// ---

export type Params = {
  app: App;
  city: string;
  token: string;
}

export type Payload = {
  userId?: string;
}

export type Response = ApiResponse<Payload>;

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;




