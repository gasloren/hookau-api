
import type { T } from '../../_types/index.js';
import type { IRedisDB } from '../../redis/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postSessionVerify(
  rdb: IRedisDB
): T.Api.Session.PostSessionVerify {
  
  return async (params) => {

    const {
      email,
      vcode
    } = params;

    return {
      payload: {
        success: true
      }
    };

  }

}

// --
