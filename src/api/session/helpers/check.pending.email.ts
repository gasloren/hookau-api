
import type { IDatabase } from '../../../mongo/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export async function checkPendingEmail(
  mdb: IDatabase,
  email: string
): Promise<void> {

  const buyer = await mdb.buyers.getOne({
    email: { $ne: email },
    ['authPending.email']: email,
    ['authPending.expAt']: { $exists: true, $gte: Date.now() }
  });

  if (!buyer) return;

  await mdb.buyers.update({
    email: buyer.email
  }, {
    $set: {
      email
    },
    $unset: {
      authPending: ''
    }
  });

}

// --
