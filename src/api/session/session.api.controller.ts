
// -- types
import type { IDatabase } from '../../mongo/types.js';
import type { IRedisDB } from '../../redis/types.js';
import type { T } from '../../_types/index.js';

// -- methods
import { postSessionSignUp } from './post.session.signup.js';
import { postSessionVerify } from './post.session.verify.js';

// --

export function sessionApiController(
  mdb: IDatabase,
  rdb: IRedisDB
): T.Api.Session.Controller {

  return {
    postSessionSignUp: postSessionSignUp(rdb),
    postSessionVerify: postSessionVerify(mdb, rdb)
  };

}