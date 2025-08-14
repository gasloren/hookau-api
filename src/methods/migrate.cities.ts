import * as Model from '../models/index.js';
import type { IDatabase } from '../mongo/types.js';
import { migrateZones } from './migrate.zones.js';

// --
/**
 * Para migrar por unica vez las ciudades de la v1.0 a v3.0
 * @param db 
 * @returns 
 */
export async function migrateCities(db: IDatabase): Promise<void> {

  const cities_v1 = await db.v1.cities.search({
    upgraded: { $ne: true }
  }, {
    sort: {
      id: 1
    }
  });
  
  if (!cities_v1?.length) return;

  for (let i=0; i < cities_v1.length; i++) {

    console.log('')

    const city_v1 = cities_v1[i] as Model.City_V1;
    console.log(`** ${city_v1.id} **`)

    // creamos una colleccion con las zonas
    console.log('creando coleccion zonas', city_v1.id);
    await migrateZones(db, city_v1.id, city_v1.zones);

    console.log('migrando ciudad', city_v1.id);
    await insertCity(db, city_v1);

    console.log('')

  }

  const removedCities = await db.v1.cities.remove({
    upgraded: { $ne: true }
  });
  
  console.log({ removedCities })

}

// --

async function insertCity(
  db: IDatabase,
  cityV1: Model.City_V1
) {

  if (!cityV1.id) return;

  const data: Model.City = {
    _id: cityV1.id,
    name: cityV1.name,
    offset: Number(cityV1.gtm || '-3'),
    enabled: !!cityV1.enabled,
    country: cityV1.country,
    logister: cityV1.currLogister,
    startHour: cityV1.schedule?.startHour || '09:00',
    finalHour: cityV1.schedule?.finalHour || '23:00',
    batchHour: cityV1.schedule?.batchHour || '03:00',
    upgraded: true
  };

  const insertedId = await db.cities.insert(data);
  console.log({ insertedId })

}