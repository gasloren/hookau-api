
import type { T } from '../../../_types/index.js';

import {
  toFormattedMenue
} from './to.formatted.menue.js';

// --

export function toPromotedStores(
  stores: T.Model.Store[]
): T.Model.StorePromotedData[] {

  if (!stores) return []; // loading

  const promotedStores: T.Model.StorePromotedData[] = [];

  stores?.forEach(({ _id: storeId, data, menue }) => {

    const formmattedMenue = toFormattedMenue(menue || []);
    const promoProducts: T.Model.FormattedProduct[] = [];

    formmattedMenue?.forEach(({ products = [] }) => {
      products?.forEach((product) => {
        if (product.promo > 0 || !!product.promoTag) {
          promoProducts.push(product);
        }
      });
    });

    if (promoProducts.length) {
      promotedStores.push({
        id: storeId,
        name: data.brand,
        promos: promoProducts,
        promoted: menue.promoted || 0,
        quantity: promoProducts.length  // used for sort in page
      });
    }
  });

  return promotedStores.sort(function(a, b) {
    return b.quantity - a.quantity;
  });

}

