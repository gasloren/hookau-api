

export type Coords = {
  lat: number;
  lng: number;
  id?: string; // place ID from ggole maps
}


export type SelectTable = {
  code: string;
  text: string;
}

export type StringTable = {
  [ k: string ]: string;
}

export type NumberTable = {
  [ k: string ]: number;
}

export type CustomTable<T> = {
  [ k: string ]: T;
}
