
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
  token: string;
  email: string;
  userId: string;
}

export type ApiResponse<Payload> = {
  warning?: string;
  message?: string;
  payload?: Payload;
  redirect?: string;
  rejected?: boolean; // if rejected remove auth token cookie
};

export type Endpoint = '/app-logs' | '/user-session';
