
// -- types
import type { T } from '../../../_types/index.js';
import type { IRedisDB } from '../../../redis/types.js';

// -- utils
import { randomId } from '../../../utils.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
async function generateNewToken(
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

export async function generateTokenResponse(
  rdb: IRedisDB,
  email: string,
  redirect: string
): Promise<T.Api.Session.PostSessionVerify.MethodResp> {

  // create new token and store on redis with the email as key
  const expSeconds = 60 * 60 * 24 * 90; // 90 dias
  const token = await generateNewToken(rdb, email, expSeconds);
    
  return {
    success: true,
    token: {
      name: 'autk',
      value: token,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: expSeconds,
      priority: 'high'
    },
    redirect
  };

}