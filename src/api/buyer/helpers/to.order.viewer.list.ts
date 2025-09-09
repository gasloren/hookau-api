import type {
  MenueOption,
  FormattedMenue,
  FormattedPicker,
  FormattedProduct
} from '../../../_types/models/menue.js';

import type {
  ViewerList,
  OrderItem,
  Adjustments,
  OptionWithUnits,
  ProductItem,
  ProductWithItems,
  Order
} from '../../../_types/models/order.js';

// --------

interface OptionsData {
  [ optnId: string ]: MenueOption;
}

interface Picked {
  [ optnId: string ]: number;
}

// --------

function cloneObject<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// --------

function extractOptionsData(
  pickers: FormattedPicker[] = []
): OptionsData {
  const optsData: OptionsData = {};
  pickers.forEach(({ options = [] }) => {
    options?.forEach((option) => {
      optsData[option.id] = cloneObject<MenueOption>(option);
    });
  });
  return optsData;
}

// --------

function pickedToOptionsList(
  optsData: OptionsData = {},
  picked: Picked = {}
): OptionWithUnits[] {
  const list: OptionWithUnits[] = [];
  const optnsIds = Object.keys(picked);
  optnsIds.forEach((optnId) => {
    if (picked?.[optnId] && picked[optnId] > 0 && optsData[optnId]) {
      list.push({
        ...optsData[optnId],
        units: picked[optnId]
      });
    }
  });
  return list;
}

// --------

function extractProductItems(
  orderItems: OrderItem[] = [],
  productId: string = '???',
  pickers: FormattedPicker[] = []
): ProductItem[] {
  const items: ProductItem[] = [];
  const prodItems: OrderItem[] = [];
  orderItems.forEach(item => {
    if (item.prodId === productId) {
      prodItems.push(cloneObject<OrderItem>(item));
    }
  });
  let addition = 0;
  const optsData = extractOptionsData(pickers);
  prodItems.forEach(({ id: itemId, picked }) => {
    const pickList = pickedToOptionsList(optsData, picked);
    addition = 0;
    pickList.forEach(({ cost = 0, units }) => {
      addition += (units * cost);
    });
    items.push({
      id: itemId,
      pickList,
      addition
    });
  });
  return items;
}

// --------

function attachProdItems(
  orderItems: OrderItem[] = [],
  product: FormattedProduct
): ProductWithItems {
  return {
    ...product,
    items: extractProductItems(orderItems, product.id, product.pickers)
  };
}

// --------

function toProductsWithItems(
  orderItems: OrderItem[] = [],
  catgProds: FormattedProduct[] = []
): ProductWithItems[] {
  const products: ProductWithItems[] = [];
  catgProds.forEach(product => {
    const prodData = attachProdItems(orderItems, product);
    if (prodData.items.length) products.push(prodData); // solo si tiene items
  });
  return products;
}

// --------

function adjustmentsToList(
  adjustments: Adjustments = {}
): ProductWithItems[] {
  const ids = Object.keys(adjustments);
  const list: ProductWithItems[] = [];
  ids.forEach((id, index) => {
    const charge = adjustments[id]?.amount || 0;
    if (charge) {
      list.push({
        id,
        name: 'Ajuste del comercio',
        code: '',
        info: adjustments[id]?.detail || '',
        price: charge,
        promo: 0,
        image: '',
        charge,
        stacc: false,
        fixed: 0,
        pickers: [],
        items: [{
          id: `adjustments-${index + 1}`,
          pickList: [],
          addition: 0
        }]
      });
    }
  });
  return list;
}

// --------

function toOrderViewerList({
    orderMenue = [],
    orderItems = [],
    adjustments = {}
  }: {
    orderMenue: FormattedMenue;
    orderItems: OrderItem[];
    adjustments?: Adjustments;
  },
  ignoreAdjustments?: boolean
): ViewerList {
  const list: ViewerList = [];
  orderMenue.forEach(({ id, name, products = [] }) => {
    const catgProds = toProductsWithItems(orderItems, products);
    if (catgProds.length) {
      list.push({
        id,
        name,
        products: catgProds
      });
    }
  });
  const adjustList = adjustmentsToList(adjustments);
  if (!adjustList?.length || !!ignoreAdjustments) return list;
  list.push({
    id: 'adjustments',
    name: 'Ajustes realizados',
    products: adjustList
  });
  return list;
}

// --------

function toOrderViewTotals(
  order: Order,
  ignoreAdjustments?: boolean
): {
  amount: number;
  netAmount: number;
  extras: number;
  charged: number;
} {
  let amount = 0;
  let netAmount = 0;
  let extras = 0;
  let quantity = 0;
  const list = toOrderViewerList(order, ignoreAdjustments);
  list.forEach(({ products = [] }) => {
    products.forEach(({ price, charge, items = [] }) => {
      quantity = items.length;
      amount += (price * quantity);
      netAmount += (charge * quantity);
      items.forEach(({ addition }) => {
        extras += addition;
      });
    });
  });
  return {
    amount,
    netAmount,
    extras,
    charged: netAmount + extras
  };
}

// --------

function prodItemsQuantity(
  orderItems: OrderItem[] = [],
  productId: string = '???'
): number {
  let quantity = 0;
  orderItems.forEach((item) => {
    if (item.prodId === productId) quantity++;
  });
  return quantity;
}

// --------

function catgItemsQuantity(
  orderItems: OrderItem[] = [],
  categoryId: string = '???'
): number {
  let quantity = 0;
  orderItems.forEach((item) => {
    if (item.catgId === categoryId) quantity++;
  });
  return quantity;
}

// -----------------

const ordersUtils = {
  toOrderViewerList,
  toOrderViewTotals,
  catgItemsQuantity,
  prodItemsQuantity,
  attachProdItems
};

export default ordersUtils;
