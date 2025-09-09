import type { T } from '../../../_types/index.js';
import type { IDatabase } from '../../../mongo/types.js';

// ----

export async function getStoreCredentials(
  mdb: IDatabase,
  storeId: string,
  testing?: boolean
): Promise<T.Model.Credential | null> {

  const credentialsFilters = { storeId };

  if (testing) {
    // esto es para pagos con tarjetas de prueba
    credentialsFilters.storeId = 'test_checkout_api';
  }

  const credentials = await mdb.credentials.getOne(credentialsFilters);

  return credentials || null;

}