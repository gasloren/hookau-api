
import type { T } from '../../_types/index.js';
import type { IRedisDB } from '../../redis/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postSessionSignUp(
  rdb: IRedisDB
): T.Api.Session.PostSessionSignUp {
  
  return async (params) => {

    const {
      app,
      city,
      email
    } = params;

    return {
      payload: {
        success: true
      }
    };

  }

}

// --
