import type { Request } from 'express';
import type { T } from '../_types/index.js';
import type { IDatabase } from '../mongo/types.js';
import type { IRedisDB } from '../redis/types.js';

import { buyerApiController } from './buyer/buyer.api.controller.js';
import { sessionApiController } from './session/session.api.controller.js';

// ---

export function ApiController(
  req: Request
): T.Api.Controller {

  const {
    mongodb,
    redisdb,
    userEmail
  } = req;

  console.log({ userEmail })

  return {
    buyer: buyerApiController(mongodb, userEmail),
    session: sessionApiController(mongodb, redisdb)
  };

}