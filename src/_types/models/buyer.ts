
import type { Coords } from './shared.js';

// --

export type Geolocation = {
  lat: string;
  lng: string;
  acc?: string;
}

export interface Point_V1 {
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
  point1?: Point_V1 | null;
  point2?: Point_V1 | null;
  point3?: Point_V1 | null;
  likeds?: string;
  service?: "email" | "phone";
  updatedAt?: Date;
}

export interface Point {
  id: string;
  calle: string;
  altura: string;
  numero: string;
  barrio: string;
  ciudad: string;
  cod_ciudad: string;
  pais: string;
  cod_pais: string;
  coords: Coords;
  referencia: string;
}

export interface Points {
  [ id: string ]: Point;
};

export interface Buyer extends Client {
  _id: string;
  email: string;
  points: Points;
}