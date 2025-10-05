import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

import { OOPS, BAD_PARAMS } from '../constants.js';
import { randomId } from '../../utils.js';
import { checkBuyerRedirect } from './helpers/check.email.redirect.js';
import ordersUtils from './helpers/to.order.viewer.list.js';

// --
/**
 * 
 * @param db 
 * @returns 
 */
export function postMenuOrderItems(
  mdb: IDatabase,
  userEmail: string | null
): T.Api.Buyer.PostMenuOrderItems.Method {
  
  return async (params) => {

    const {
      city,
      storeId,
      orderItems = []
    } = params;

    if (!city || !storeId) return BAD_PARAMS;

    if (!orderItems?.length) {
      return {
        warning: 'Por favor cargue el carrito'
      };
    }

    const {
      redirect,
      buyer
    } = await checkBuyerRedirect(mdb, city, userEmail);

    if (redirect) return { redirect };
    if (!buyer?._id) return OOPS;

    const store = await mdb.stores.getOne({ city, _id: storeId });
    if (!store) return OOPS;

    const order = await mdb.orders.getOne({
      storeId,
      process: 0,
      clientId: buyer._id
    });
    if (!order) return OOPS;

    const orderView = ordersUtils.toOrderViewerList({ ...order, orderItems });
    // recalculamos los totales de la orden
    const {
      amount,
      netAmount,
      extras,
      charged // <-- netAmount + extras
    } = ordersUtils.toOrderViewTotals(order.orderMenue, orderItems);

    const accredited = order.accredited || 0;

    const updated = await mdb.orders.update({
      _id: order._id,
      storeId
    }, {
      $set: {
        orderView,
        orderItems,
        orderTotal: charged,
        discounted: amount - netAmount,
        accredited,
        balanceDue: charged - accredited,
        driverNoFee: charged >= 40000,
        statusId: randomId()
      }
    });

    if (!updated) return OOPS;

    return {
      success: true,
      redirect: `/buyer/${city}/order/${order._id}`
    };

  }

}

// --
