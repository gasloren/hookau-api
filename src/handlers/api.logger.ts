import type { IDatabase } from '../mongo/types.js';

// --

export async function apiLogger(
  mdb: IDatabase,
  path: string,
  error: any
) {

  console.log({ path, error });

  await mdb.apiLogs.insert({
    path,
    error,
    dated: new Date().toISOString
  });

}
