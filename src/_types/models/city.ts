import type { Coords } from './shared.js';

// ---

/*
export type CityStatus =
  'published' |
  'processing' |
  'countdown' |
  'maintenance' |
  'holiday';

export interface City {
  _id: string;
  name: string;
  offset: number;    // -3 (AR)
  status: CityStatus;
  coords: Coords;
  initDate?: Date;    // for countdown timing
  logister: string;
  startHour: string;  // "09:00"
  finalHour: string;  // "23:00"  (max value 24:00)
  batchHour: string;  // "03:00"
  upgraded?: boolean;
}
*/

export interface Zone {
  _id: string;
  code: string;
  name: string;
  cost: [
    number,
    number
  ];
  deny: string;
}

export interface City {
  _id: string;  // <- city code: "AR8371"
  id: string;   // deprecate
  code: string; // deprecate
  gtm: string;  // deprecate
  name: string;
  enabled: boolean;
  country: "AR";
  schedule: {
    startHour: string;
    finalHour: string;
    batchHour: string;
  },
  currLogister: string;
  zones: Zone[]; // deprecate

  /**
   * new properties
   */
  gtmOffset: number;
  centerLat: number;
  centerLng: number;
}

