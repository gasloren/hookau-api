
// --

export type Geolocation = {
  lat: string;
  lng: string;
  acc?: string;
}

export interface Point {
  id: number;
  codigo: string;
  calle: string;
  altura: string;
  numero: string;
  calle1: string;
  calle2: string;
  referencia: string;
  barrio: string;
  ciudad: string;
  cod_ciudad: string;
  pais: string;
  cod_pais: string;
  cod_barrio: string;
  ubicacion: Geolocation;
}

export interface Profile {
  nombre: string;
  apellido: string;
  telefono: string;
}

export interface Required {
  politicsAccepted?: Date;
  conditionsAccepted?: Date;
}

export interface Client {
  _id: string;
  email?: string;
  verifiedEmail?: string;
  phone?: string;
  verifiedPhone?: string;
  profile?: Profile;
  required?: Required;
  loggedAt?: Date;
  geolocation?: Geolocation;
  point1?: Point | null;
  point2?: Point | null;
  point3?: Point | null;
  likeds?: string;
  service?: "email" | "phone";
  updatedAt?: Date;
}

export interface Points {
  [ id: string ]: Point;
};

export interface Buyer extends Client {
  _id: string;
  email: string;
  points: Points;
}