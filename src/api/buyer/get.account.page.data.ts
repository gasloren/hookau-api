import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';
import { checkHookerMigration } from './helpers/migrate.hooker.data.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function getAccountPageData(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.GetAccountPageData.Method {
  
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

    const city = await mdb.cities.getOne({ _id: cityId });
    if (!city?._id) return OOPS;

    const riderId = buyer.rider?.id;
    await checkHookerMigration(mdb, cityId, riderId);

    const rider = await mdb.riders.getOne({ email: userEmail });

    return {
      success: true,
      payload: {
        buyer,
        rider
      }
    };

  }

}

// --
