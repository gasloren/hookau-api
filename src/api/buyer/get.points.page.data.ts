import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkUserAuth } from '../auth.handler.js';
import { migrateUserPoints } from './helpers/migrate.user.points.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getPointsPageData(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.GetPointsPageData.Method {
  
  return async (params) => {

    const {
      city: cityId
    } = params;

    if (!cityId) {
      return {
        warning: 'Parametros invalidos'
      };
    }

    const hasAuth = await checkUserAuth(mdb, 'buyer', cityId, userEmail);

    if (!hasAuth) {
      return {
        warning: 'Debe iniciar sesión',
        rejected: true,
        redirect: `/buyer/${cityId}/login`
      };
    }

    const buyer = await mdb.buyers.getOne({ email: userEmail });
    if (!buyer?._id) return OOPS;

    const city = await mdb.cities.getOne({
      _id: cityId
    });
    if (!city) return OOPS;

    // handle migration points from v1
    if (!buyer.points) {
      const points = migrateUserPoints(buyer);
      const updated = await mdb.buyers.update({
        email: userEmail
      }, {
        points
      });
      return {
        success: !!updated,
        payload: {
          cityName: city.name,
          cityCoords: city.coords,
          userPoints: points
        }
      };
    }

    return {
      success: true,
      payload: {
        cityName: city.name,
        cityCoords: city.coords,
        userPoints: buyer.points
      }
    };

  }

}

// --
