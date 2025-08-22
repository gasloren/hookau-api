import type { T } from '../../../_types/index.js';

// -------------------------------------------

function pickersToList(
  pickers: T.Model.MenuePicker[] = [],
  options: T.Model.MenueOptions = {}
): T.Model.FormattedPicker[] {
  const picksList: T.Model.FormattedPicker[] = [];
  if (!pickers?.length) return [];
  pickers?.forEach((pick) => {
    picksList.push({
      ...pick,
      options: options[pick.id] || []
    });
  });
  return picksList;
}

function productsToList(
  products: T.Model.MenueProduct[] = [],
  pickers: T.Model.MenuePickers = {},
  options: T.Model.MenueOptions = {},
  promoted = 0
): T.Model.FormattedProduct[] {
  if (!products?.length) return [];
  const prodsList: T.Model.FormattedProduct[] = [];
  let promo = 0;
  products?.forEach((prod) => {
    if (!prod.editing) {
      promo = promoted || prod.promo; // mandatory promoted
      if (prod.fixed) {
        promo = ((prod.price - prod.fixed) * 100) / prod.price; // ignore promoted
      }
      prodsList.push({
        ...prod,
        promo,
        charge: promo > 0 ? (prod.price - (prod.price * promo / 100)) : prod.price,
        pickers: pickersToList(pickers[prod.id], options)
      });
    }
  });
  return prodsList;
}

export function toFormattedMenue(
  storeMenu: T.Model.Menue
): T.Model.FormattedMenue {
  const {
    promoted = 0,
    categories = [],
    products = {},
    pickers = {},
    options = {}
  } = storeMenu;
  const menue: T.Model.FormattedMenue = [];
  if (!categories?.length) return menue;
  categories?.forEach(catg => {
    if (!catg.editing) {
      menue.push({
        ...catg,
        products: productsToList(products[catg.id], pickers, options, promoted)
      });
    }
  });
  return menue;
}
