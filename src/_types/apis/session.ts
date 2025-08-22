
// response types
import type { ApiResponse, App } from './shared.js';

// models types


// ---

export type Endpoint =
  '/session-api/signup' |
  '/session-api/verify' |
  '/session-api/signin';

// ---

export type PostSessionSignUpParams = {
  app: App;
  city: string;
  email: string;
}

export type PostSessionSignUpPayload = {
  success: boolean; // if email was accepted
}

export type PostSessionSignUpResponse = ApiResponse<PostSessionSignUpPayload>;

export type PostSessionSignUp = (
  params: PostSessionSignUpParams
) => Promise<PostSessionSignUpResponse>;

// ---

export type PostSessionVerifyParams = {
  email: string;
  vcode: string;
}

export type PostSessionVerifyPayload = {
  success: boolean; // code is valid
  token?: {
    name: string;
    value: string;
    domain: string;
    path: string;
    httpOnly: boolean;  // restrict client access
    secure: boolean;    // over https
    sameSite: boolean | 'strict' | 'lax' | 'none';
    expires: Date;     // date of expiration
    maxAge: number;    // life time in seconds
    priority: 'low' | 'medium' | 'high';
  };
  userId?: string;
}

export type PostSessionVerifyResponse = ApiResponse<PostSessionVerifyPayload>;

export type PostSessionVerify = (
  params: PostSessionVerifyParams
) => Promise<PostSessionVerifyResponse>;

// ---

export type PostSessionSignInParams = {
  app: App;
  city: string;
  token: string;
}

export type PostSessionSignInPayload = {
  userId?: string;
}

export type PostSessionSignInResponse = ApiResponse<PostSessionSignInPayload>;

export type PostSessionSignIn = (
  params: PostSessionSignInParams
) => Promise<PostSessionSignInResponse>;


// ---
// Interface for implements StoresApi
export interface Controller {

  postSessionSignUp: PostSessionSignUp;

  postSessionVerify: PostSessionVerify;

  postSessionSignIn: PostSessionSignIn;

}



