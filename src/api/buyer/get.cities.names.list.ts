import type { T } from '../../_types/index.js';
import type { City } from '../../_types/models/city.js';
import type { IDatabase } from '../../mongo/types.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getCitiesNamesList(
  mdb: IDatabase
): T.Api.Buyer.GetCitiesNamesList.Method {
  
  return async () => {

    const filters: Partial<City> = {
      status: 'published'
    };

    const cities = await mdb.cities.search(filters, {
      sort: {
        name: 1
      }
    });

    const citiesNames: T.Model.SelectTable[] = [];

    cities?.forEach(city => {
      citiesNames.push({
        code: city._id,
        text: city.name
      });
    });

    return {
      payload: citiesNames
    };

  }

}

// --
