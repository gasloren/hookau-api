
import type { T } from '../../_types/index.js';
import type { IRedisDB } from '../../redis/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postSessionSignIn(
  rdb: IRedisDB
): T.Api.Session.PostSessionSignIn {
  
  return async (params) => {

    const {
      app,
      city,
      token
    } = params;

    return {
      payload: {
        userId: ''
      }
    };

  }

}

// --
