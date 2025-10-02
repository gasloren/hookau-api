import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { getCitiesList } from './get.cities.list.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';

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

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, cityId, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    const {
      payload: citiesList = []
    } = await getCitiesList(mdb)();
    if (!citiesList?.length) return OOPS;

    return {
      success: true,
      payload: {
        userPoints: buyer.points,
        citiesList
      }
    };

  }

}

// --
