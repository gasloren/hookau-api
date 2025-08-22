import type { T } from '../_types/index.js';
import type { IDatabase } from '../mongo/types.js';
import type { IRedisDB } from '../redis/types.js';

import { adminApiController } from './admin/admin.api.controller.js';
import { buyerApiController } from './buyer/buyer.api.controller.js';
import { sessionApiController } from './session/session.api.controller.js';

// ---

export function ApiController(
  mdb: IDatabase,
  rdb: IRedisDB
): T.Api.Controller {

  return {
    admin: adminApiController(mdb),
    buyer: buyerApiController(mdb),
    session: sessionApiController(rdb)
  };

}