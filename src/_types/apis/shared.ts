
// --------

export type App =
  'admin' |
  'agent' |
  'buyer' |
  'rider' |
  'store' |
  'super';

export type UserSession = {
  app: App;
  city: string;
  email: string;
  userId: string;
}

export type Token = {
  name: string;
  value: string;
  domain?: string;
  path: string;
  httpOnly: boolean;  // restrict client access
  secure: boolean;    // over https
  sameSite: boolean | 'strict' | 'lax' | 'none';
  expires?: Date;     // date of expiration
  maxAge: number;    // life time in seconds
  priority: 'low' | 'medium' | 'high';
}

export type ApiResponse<Payload> = {
  token?: Token;
  success?: boolean;
  warning?: string;
  message?: string;
  payload?: Payload;
  redirect?: string;
  rejected?: boolean; // if rejected remove auth token cookie
};

export type Endpoint = '/app-logs' | '/user-session';
