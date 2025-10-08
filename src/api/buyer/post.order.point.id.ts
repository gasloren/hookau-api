import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS, BAD_PARAMS } from '../constants.js';
import { randomId } from '../../utils.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';

// --
/**
 * 
 * @param db
 * @returns 
 */
export function postOrderPointId(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.PostOrderPointId.Method {
  
  return async (params) => {

    const {
      city,
      orderId,
      pointId
    } = params;

    if (!city || !orderId || !pointId) return BAD_PARAMS;

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, city, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    if (!buyer.points?.[pointId]) return OOPS;

    const {
      cityCode,
      address,
      location
    } = buyer.points[pointId];

    if (cityCode !== city) {
      return {
        warning: 'La dirección no pertenece a esta ciudad'
      };
    }

    if (!address?.length) {
      return {
        warning: 'Por favor ingrese la dirección de entrega'
      };
    }

    if (!location?.lat || !location?.lng) {
      return {
        warning: 'Por favor marque la posición en el mapa'
      };
    }

    const updated = await mdb.orders.update({
      _id: orderId,
      process: 0,
      clientId: buyer._id,
      storeCity: city
    }, {
      $set: {
        pointData: buyer.points[pointId],
        statusId: randomId()
      }
    });

    if (!updated) return OOPS;

    return {
      success: true,
      redirect: `/buyer/${city}/order/${orderId}/checkout`
    };

  }

}

// --
