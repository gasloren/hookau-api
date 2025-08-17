
// --------

export const HeadersKey = {
  apiCommKey: 'X-Hookau-Api-Comm-Key',
  requestOrigin: 'X-Hookau-Request-Origin',
  sessionToken: 'X-Hookau-Session-Token'
}

export interface HeadersApi {
  'X-Hookau-Api-Comm-Key': string;
  'X-Hookau-Request-Origin': string;
  'X-Hookau-Session-Token'?: string;
}

export type ApiResponse<Payload> = [ string | null, Payload | null ];
