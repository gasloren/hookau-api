import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

// ---

export async function migrateClientToBuyer(
  mdb: IDatabase,
  email: string
): Promise<void> {

  const client = await mdb.v1.clients.getOne({ verifiedEmail: email });
  if (!client) return;

  const buyer = await mdb.buyers.getOne({ email });
  if (!!buyer) return;

  const {
    _id,
    point1,
    point2,
    point3,
    ...otherProps
  } = client;

  const points: T.Model.Points = {};

  if (point1?.id) points[point1.id] = point1;
  if (point2?.id) points[point2.id] = point2;
  if (point3?.id) points[point3.id] = point3;

  const data: T.Model.Buyer = {
    _id,
    email,
    points,
    ...otherProps
  };

  await mdb.buyers.upsert({ email }, data);
  
}