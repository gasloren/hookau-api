
import type { T } from '../../../_types/index.js';

import {
  toFormattedMenue
} from './to.formatted.menue.js';

// --

function storeToPromos(
  store: T.Model.Store
): T.Model.StorePromos {

  const {
    _id: storeId,
    data,
    menue
  } = store;

  const withDiscount: T.Model.FormattedProduct[] = [];
  const withPromoTag: T.Model.FormattedProduct[] = [];

  const formmattedMenue = toFormattedMenue(menue || []);

  formmattedMenue?.forEach(({ products = [] }) => {
    products?.forEach((product) => {
      if (product.promo > 0) {
        withDiscount.push(product);
      } else if (!!product.promoTag) {
        withPromoTag.push(product);
      }
    });
  });

  // sort by promos quantities
  const withDiscountSorted = withDiscount.sort(function(a, b) {
    return b.promo - a.promo;
  });

  const payload: T.Model.StorePromos = {
    id: storeId,
    name: data.brand.toLowerCase(),
    logo: data.logourl,
    promos: [ ...withPromoTag, ...withDiscountSorted ]
  };

  return payload;

}

// --

export function toStoresPromos(
  stores: T.Model.Store[]
): T.Model.StorePromos[] {

  console.log('***')

  if (!stores?.length) return []; // loading

  const payload: T.Model.StorePromos[] = [];

  stores.forEach((store) => {

    if (!store.menue.promoted) {
      const storeData = storeToPromos(store);
      if (storeData.promos?.length) payload.push(storeData);
    }
  
  });

  return payload;

}

