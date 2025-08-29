import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

// ---

export async function isEmailRegistered(
  mdb: IDatabase,
  app: T.Api.Shared.App,
  city: string,
  email: string
): Promise<boolean> {

  const user = await mdb.users.getOne({
    email
  });

  // check app access
  return !!user?.apps?.[app] && !!user?.cities?.[city];

}