
// -- types
import type { IRedisDB } from '../../redis/types.js';
import type { T } from '../../_types/index.js';

// -- methods
import { postSessionSignUp } from './post.session.signup.js';
import { postSessionVerify } from './post.session.verify.js';
import { postSessionSignIn } from './post.session.signin.js';
import type { IDatabase } from '../../mongo/types.js';

// --

export function sessionApiController(
  mdb: IDatabase,
  rdb: IRedisDB
): T.Api.Session.Controller {

  return {
    postSessionSignUp: postSessionSignUp(mdb, rdb),
    postSessionVerify: postSessionVerify(rdb),
    postSessionSignIn: postSessionSignIn(rdb)
  };

}