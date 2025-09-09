import {
  PostSessionSignUp,
  PostSessionVerify
} from './index.js';

// ---
// Interface for implements SessionApi
export interface Controller {

  postSessionSignUp: PostSessionSignUp.Method;

  postSessionVerify: PostSessionVerify.Method;

}



