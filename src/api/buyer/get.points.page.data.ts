import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkUserAuth } from '../auth.handler.js';
import { getCitiesNamesList } from './get.cities.names.list.js';

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

    const {
      payload: citiesNames
    } = await getCitiesNamesList(mdb)({});
    if (!citiesNames?.length) return OOPS;

    return {
      success: true,
      payload: {
        userPoints: buyer.points,
        citiesNames
      }
    };

  }

}

// --
