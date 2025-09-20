import type { Coords } from './shared.js';

// ---

export type CityStatus = 'published' | 'processing' | 'countdown';

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

export interface City_V1 {
  _id: string;
  id: string;
  code: string;
  gtm: string;
  name: string;
  enabled: boolean;
  country: "AR";
  schedule: {
    startHour: string;
    finalHour: string;
    batchHour: string;
  },
  currLogister: string;
  zones: {
    _id: string;
    code: string;
    name: string;
    cost: [
      number,
      number
    ];
    deny: string;
  }[];
}
