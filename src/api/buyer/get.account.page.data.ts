import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS } from '../../routes/constants.js';
import { checkUserAuth } from '../auth.handler.js';
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

    const hasAuth = await checkUserAuth(mdb, 'buyer', cityId, userEmail);

    if (!hasAuth) {
      return {
        warning: 'Debe iniciar sesión',
        rejected: true,
        redirect: `/buyer/${cityId}/login`
      };
    }

    const city = await mdb.cities.getOne({ _id: cityId });
    if (!city?._id) return OOPS;

    const buyer = await mdb.buyers.getOne({ email: userEmail });
    if (!buyer?._id) return OOPS;

    const riderId = buyer.rider?.id;

    const rider = await checkHookerMigration(mdb, cityId, riderId);

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
