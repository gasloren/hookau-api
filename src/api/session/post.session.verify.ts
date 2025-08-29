
import type { T } from '../../_types/index.js';
import type { IRedisDB } from '../../redis/types.js';
import { randomId } from '../../utils.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postSessionVerify(
  rdb: IRedisDB
): T.Api.Session.PostSessionVerify.Method {
  
  return async (params) => {

    const {
      app,
      city,
      email,
      vcode
    } = params;

    const redisKey = `${app}:${city}:${email}`;

    const storedCode = await rdb.get(redisKey);

    if (!storedCode || vcode !== storedCode) {
      return {
        warning: 'El código es incorrecto o ha caducado, puedes generar otro código de verificación.',
        rejected: true
      }
    }

    // generate new token
    const token = randomId('', 32); // leave in 32

    // 30 dias
    const expSeconds = 60 * 60 * 24 * 30;

    await rdb.set(token, redisKey, { EX: expSeconds });
    // await rdb.set(`${email}-token`, token, { EX: expSeconds });
  
    return {
      success: true,
      token: {
        name: 'autk',
        value: token,
        path: `/${app}/${city}`,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: expSeconds,
        priority: 'high'
      },
      redirect: `/${app}/${city}`,
      payload: {
        app,
        city,
        email
      }
    };

  }

}

// --
