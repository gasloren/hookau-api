
import type { Coords } from './shared.js';

// --

export type Geolocation = {
  lat: string;
  lng: string;
  acc?: string;
}

export interface Point_V1 {
  id: number;    // deprecated
  codigo: string;
  calle: string;
  altura: string;
  numero: string;
  calle1: string;  // deprecated
  calle2: string;  // deprecated
  barrio: string;
  ciudad: string;
  cod_ciudad: string;
  pais: string;
  cod_pais: string;
  cod_barrio: string;
  ubicacion: Geolocation;
  referencia: string;
}

export interface Profile_V1 {
  nombre: string;
  apellido: string;
  telefono: string;
}

export interface Required {
  politicsAccepted?: Date;
  conditionsAccepted?: Date;
}

export interface DriverAccount {
  id: string;
  city: string;
  status: "register" | "enabled" | "disabled";
}

export interface Client {
  _id: string;
  email: string;
  verifiedEmail: string;
  phone?: string;
  verifiedPhone?: string;
  profile?: Profile_V1;
  required?: Required;
  loggedAt?: Date;
  geolocation?: Geolocation;
  point1?: Point_V1 | null;
  point2?: Point_V1 | null;
  point3?: Point_V1 | null;
  likeds?: string;
  service?: "email" | "phone";
  customerId?: string;
  driver?: DriverAccount;
  updatedAt?: Date;
}


/**
 ** New Model Buyer
 */

export interface Point {
  id: string; // number to string
  alias: string;
  address: string;
  cityCode: string;
  cityName: string;
  apartNum: string;
  location: Coords | null;
  reference: string; // numero de puerta o referencia
}

export interface Points {
  [ id: string ]: Point;
};

export interface Profile {
  fname: string;
  lname: string;
  phone: string;
}

export interface Buyer {
  _id: string;
  email: string;
  points: Points;
  profile: Profile;
  blocked?: boolean;
  required?: Required;
  customerId?: string;
  authPending?: {
    email: string; // email replace pending for validation
    expAt: number; // pending email expiration
  };
}