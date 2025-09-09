
import type { T } from '../../_types/index.js';
import type { IRedisDB } from '../../redis/types.js';

import Mailer from '../../mailer/mailer.js';

// --
/**
 * 
 * @param app
 * @param city
 * @param email 
 * @returns 
 */
export function postSessionSignUp(
  rdb: IRedisDB
): T.Api.Session.PostSessionSignUp.Method {
  
  return async (params) => {

    const {
      app,
      city,
      email
    } = params;

    const timestamp = Date.now().toString();
    const l = timestamp.length;
    const vcode = timestamp.slice(l - 6);

    const expirationInSeconds = 180; // Key will expire in 180 seconds

    const redisResp = await rdb.set(email, vcode, {
      EX: expirationInSeconds
    });

    if (redisResp !== 'OK') {
      console.log('* REDIS ERROR storing new vcode');
      return {
        warning: 'Oops, algo salió mal'
      };
    }

    const mailer = Mailer('session');
    const mailSuccess = await mailer({
      to: email,
      subject: 'Código de verificación',
      text: `Usa este pin para iniciar sesión: ${vcode}`,
      html: `
        <div>
          <h3>Usa este pin para iniciar sesión:</h3>
          <h1>${vcode}</h1>
        </div>
      `
    });

    if (!mailSuccess) {
      return {
        warning: 'No pudimos enviar el código, is el email ingresado es correcto verifcá que tu buzón de correo tenga espacio disponible'
      };
    }

    return {
      success: true,
      message: 'Ingresá el código que hemos enviado a tu casilla de email, si no lo encuentras revisa también la carpeta de spam.',
      payload: {
        expiresAt: Date.now() + (expirationInSeconds * 1000)
      }
    };

  }

}

// --
