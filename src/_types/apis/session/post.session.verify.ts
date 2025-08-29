
// response types
import type { ApiResponse, App } from '../shared.js';

// ---

export type Endpoint = '/session-api/verify';

// ---

export type Params = {
  app: App;
  city: string;
  email: string;
  vcode: string;
}

export type Payload = {
  app: App;
  city: string;
  email: string;
};

export type Method = (
  params: Params
) => Promise<ApiResponse<Payload>>;




