import type { T } from '../_types/index.js';
import type { IDatabase } from '../mongo/types.js';

// ---

export async function checkUserAuth(
  mdb: IDatabase,
  app: T.Api.Shared.App,
  city: string,
  email: string | null = '???' 
): Promise<boolean> {

  console.log({ email })

  if (!email) return false;
  if (!email.trim()) return false;

  const auth = await mdb.auth.getOne({ email });

  console.log({ auth })

  if (!auth?.email) return false;

  if (app === 'buyer') return true;

  return !!auth.allow?.[app]?.includes(city);

}