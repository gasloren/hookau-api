
// -- types
import type { T } from '../../../_types/index.js';

// -- uitls
import Formatter from '../../../utils/formatter.js';

// ---
/**
 * Checks items hidden by store
 * @param viewerList 
 * @param outOfStock 
 * @returns warnings list
 */
export function checkItemsOutOfStock(
  viewerList: T.Model.ViewerList,
  outOfStock: string[] = []
): string[] {

  if (!outOfStock?.length) return [];

  const warnings: string[] = [];

  let cn = '';  // category name
  let pn = '';  // product name
  let on = '';  // option name

  viewerList.forEach(({ id: catgId, name: catgName, products = [] }) => {

    products.forEach(({ id: prodId, name: prodName, code: prodCode = '????', items = [] }) => {

      cn = Formatter.capitalizeTitle(catgName);
      pn = Formatter.capitalizeTitle(prodName);

      if (outOfStock.includes(catgId) || outOfStock.includes(prodId) || outOfStock.includes(prodCode)) {

        if (items.length > 0) warnings.push(`${cn}:${pn}`);

      } else {

        items.forEach(({ pickList }) => {

          pickList.forEach(({ id: optnId, name: optnName, code: optnCode = '????', units = 0 }) => {

            if (outOfStock.includes(optnId) || outOfStock.includes(optnCode)) {

              on = Formatter.capitalizeTitle(optnName);

              if (units > 0) warnings.push(`${cn}:${pn}:${on}`);

            }

          });

        });

      }

    });


  });

  return warnings;

}
