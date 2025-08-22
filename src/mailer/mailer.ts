
import type { IEmailParams, TEmailAccount } from './types.js';
import { sendEmail } from './send.email.js';

// ----

export default function Mailer(
  account: TEmailAccount
) {

  return async (
    params: IEmailParams
  ): Promise<boolean> => {

    try {

      const info = await sendEmail(account, params);

      // puede que haya mas de un email separado por comas
      const firstEmail = params.to.split(',')?.[0] || '???';
      
      // verificamos el primero, si fue aceptado damos por logrado el envio
      return info?.accepted?.includes(firstEmail);

    } catch(error) {

      console.log(error?.toString());

      return false;

    }

  }

}