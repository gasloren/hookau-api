import type { City, City_V1 } from '../_types/models/index.js';
import type { IMigrateCities } from '../_types/request/admins.api.js';
import type { IDatabase } from '../mongo/types.js';

import { saveCityZones } from './helpers/save.city.zones.js';

// --
/**
 * Para migrar por unica vez las ciudades de la v1.0 a v3.0
 * @param db 
 * @returns 
 */
export function migrateCities(
  mdb: IDatabase
): IMigrateCities {

  return async () => {

    const cities_v1 = await mdb.v1.cities.search({
      upgraded: { $ne: true }
    }, {
      sort: {
        id: 1
      }
    });

    let count = 0;
  
    for (let i=0; i < cities_v1.length; i++) {
  
      console.log('')
  
      const city_v1 = cities_v1[i] as City_V1;
      console.log(`** ${city_v1.id} **`)
  
      // creamos una colleccion con las zonas
      console.log('creando coleccion zonas', city_v1.id);
      await saveCityZones(mdb, city_v1.id, city_v1.zones);
  
      console.log('migrando ciudad', city_v1.id);
      await insertCity(mdb, city_v1);
  
      console.log('')

      count++;
  
    }
  
    const removedCities = await mdb.v1.cities.remove({
      upgraded: { $ne: true }
    });
    
    console.log({ removedCities })

    
    return [
      null,
      await mdb.cities.search({})
    ];
    
  }

}

// --

async function insertCity(
  db: IDatabase,
  cityV1: City_V1
) {

  if (!cityV1.id) return;

  const data: City = {
    _id: cityV1.id,
    name: cityV1.name,
    offset: Number(cityV1.gtm || '-3'),
    status: !cityV1.enabled ? 'processing' : 'published',
    logister: cityV1.currLogister,
    startHour: cityV1.schedule?.startHour || '09:00',
    finalHour: cityV1.schedule?.finalHour || '23:00',
    batchHour: cityV1.schedule?.batchHour || '03:00',
    upgraded: true
  };

  const insertedId = await db.cities.insert(data);
  console.log({ insertedId })

}