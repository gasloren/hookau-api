
import type { T } from '../../../_types/index.js';
import type { IDatabase } from '../../../mongo/types.js';

// --
/**
 * Para migrar por unica vez las ciudades de la v1.0 a v3.0
 * @param db 
 * @returns 
 */
export async function saveCityZones(
  db: IDatabase,
  city: string,
  zones: T.Model.Zone_V1 [] = []
): Promise<void> {
  
  console.log(city, zones.length);

  if (!zones?.length) return;

  for (let i=0; i < zones.length; i++) {

    await insertZone(db, city, zones[i]);

  }

}

// ---

async function insertZone(
  db: IDatabase,
  city: string,
  zoneV1?: T.Model.Zone_V1
) {

  if (!zoneV1?.code) return;

  const item: T.Model.Zone = {
    _id: `${city}-${zoneV1?.code}`,
    city: city,
    code: zoneV1.code,
    name: zoneV1?.name || '???',
    cost: zoneV1?.cost?.[1] || 3500
  };

  const zoneId = await db.zones.insert(item);

  console.log(city, zoneId);

}