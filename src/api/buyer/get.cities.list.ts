
// -- types
import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getCitiesList(
  mdb: IDatabase
): T.Api.Buyer.GetCitiesList.Method {
  
  return async () => {

    const cities = await mdb.cities.search({}, {
      sort: {
        name: 1
      },
      projection: {
        _id: 1,
        name: 1,
        status: 1,
        coords: 1,
        country: 1
      }
    });

    return {
      success: !!cities?.length,
      payload: cities
    };

  }

}

// --
