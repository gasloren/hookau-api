
// -- types
import type { T } from '../../../_types/index.js';
import type { IDatabase } from '../../../mongo/types.js';

// ---

export async function checkBuyerRedirect(
  mdb: IDatabase,
  city: string,
  email?: string | null
): Promise<{
  redirect?: string;
  buyer?: T.Model.Buyer | null;
}> {

  if (!email) return { redirect: `/buyer/${city}` };
  if (!email.includes('@')) return { redirect: `/buyer/${city}` };

  const buyer = await mdb.buyers.getOne({ email });

  if (!buyer?._id) return { redirect: `/buyer/${city}` };
  if (buyer.blocked) return { redirect: '/buyer/blocked' };

  return { buyer };

}