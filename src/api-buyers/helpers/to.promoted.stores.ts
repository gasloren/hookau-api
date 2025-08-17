
import type {
  Store,
  StorePromotedData
} from '../../_types/models/store.js';

import type {
  FormattedProduct
} from '../../_types/models/menue.js';

import {
  toFormattedMenue
} from './to.formatted.menue.js';

// --

export function toPromotedStores(
  stores: Store[]
): StorePromotedData[] {

  if (!stores) return []; // loading

  const promotedStores: StorePromotedData[] = [];

  stores?.forEach(({ _id: storeId, data, menue }) => {

    const formmattedMenue = toFormattedMenue(menue || []);
    const promoProducts: FormattedProduct[] = [];

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

