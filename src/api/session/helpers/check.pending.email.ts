
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

  const auth = await mdb.auth.getOne({
    pending: email,
    expires: {
      $exists: true,
      $gte: Date.now()
    }
  });

  if (!auth) return;

  await mdb.buyers.update({
    email: auth.email
  }, {
    $set: {
      email
    }
  });

  await mdb.auth.remove({
    email: auth.email
  });

}

// --
