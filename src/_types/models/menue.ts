

// --

export interface MenueCategory {
  id: string;
  name: string;
  editing?: boolean;
}

export type MenueCategories = MenueCategory[];

export interface MenueProduct {
  id: string;
  name: string;
  code: string;
  info: string;
  price: number;
  promo: number;
  image: string;
  stacc: false,
  fixed: number;
  promoTag?: string;
  editing?: boolean;
}

export interface MenueProducts {
  [ catgId: string ]: MenueProduct[];
}

export interface MenuePicker {
  id: string;
  detail: string;
  minimun: number;
  maximun: number;
  counter: boolean;
}

export interface MenuePickers {
  [ prodId: string ]: MenuePicker[];
}

export interface MenueOption {
  id: string;
  name: string;
  code: string;
  cost: number;
}

export interface MenueOptions {
  [ pickId: string ]: MenueOption[];
}

export interface Menue {
  promoted: number;
  glutenFree?: boolean;
  categories: MenueCategories;
  products: MenueProducts;
  pickers: MenuePickers;
  options: MenueOptions;
}

// -- Formatted Menue types --

export interface FormattedPicker extends MenuePicker {
  options: MenueOption[];
}

export interface FormattedProduct extends MenueProduct {
  promo: number;
  charge: number;
  pickers: FormattedPicker[];
}

export interface FormattedCategory extends MenueCategory {
  products: FormattedProduct[];
}

export type FormattedMenue = FormattedCategory[];


// --
// Frontend types
