
// -- types
import type { IRedisDB } from '../../redis/types.js';
import type { T } from '../../_types/index.js';

// -- methods
import { postSessionSignUp } from './post.session.signup.js';
import { postSessionVerify } from './post.session.verify.js';
import { postSessionSignIn } from './post.session.signin.js';

// --

export function sessionApiController(
  rdb: IRedisDB
): T.Api.Session.Controller {

  return {
    postSessionSignUp: postSessionSignUp(rdb),
    postSessionVerify: postSessionVerify(rdb),
    postSessionSignIn: postSessionSignIn(rdb)
  };

}