

export interface Zone {
  _id: string;
  city: string;
  code: string;
  name: string;
  cost: number;
  deny?: string;
}

export interface Zone_V1 {
  _id: string;
  code: string;
  name: string;
  cost: [ number, number ];
  deny?: string;
}
