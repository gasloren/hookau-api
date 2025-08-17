
import type {
  Menue,
  MenueOptions,
  MenuePicker,
  MenuePickers,
  MenueProduct,
  FormattedPicker,
  FormattedProduct,
  FormattedMenue
} from '../../_types/models/index.js';

// -------------------------------------------

function pickersToList(
  pickers: MenuePicker[] = [],
  options: MenueOptions = {}
): FormattedPicker[] {
  const picksList: FormattedPicker[] = [];
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
  products: MenueProduct[] = [],
  pickers: MenuePickers = {},
  options: MenueOptions = {},
  promoted = 0
): FormattedProduct[] {
  if (!products?.length) return [];
  const prodsList: FormattedProduct[] = [];
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
  storeMenu: Menue
): FormattedMenue {
  const {
    promoted = 0,
    categories = [],
    products = {},
    pickers = {},
    options = {}
  } = storeMenu;
  const menue: FormattedMenue = [];
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
