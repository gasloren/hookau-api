
// -- types
import type { IRedisDB } from '../../../redis/types.js';

// -- utils
import { randomId } from '../../../utils.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export async function generateNewToken(
  rdb: IRedisDB,
  email: string,
  expSeconds: number
): Promise<string> {

  // generate new token
  const token = randomId('', 32); // leave in 32

  await rdb.set(token, email, { EX: expSeconds });

  return token;

}

// --
