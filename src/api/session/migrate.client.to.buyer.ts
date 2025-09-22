import type { T } from '../../_types/index.js';
import type { IDatabase } from '../../mongo/types.js';

// ---

function ubicacionV1ToV3(
  ubicacion: T.Model.Geolocation
): T.Model.Coords | null {
  if (!ubicacion?.lat) return null;
  if (!ubicacion?.lng) return null;
  return {
    lat: Number(ubicacion.lat),
    lng: Number(ubicacion.lng)
  };
}

// ---

function pointV1ToV3(
  id: number,
  pointV1: T.Model.Point_V1
): T.Model.Point {
  const {
    codigo = '',
    calle = '',
    altura = '',
    numero = '',
    ciudad = '',
    referencia = ''
  } = pointV1 || {};
  return {
    id: id.toString(),
    alias: codigo.toLowerCase(),
    address: `${calle.toLowerCase()} ${altura}`,
    apartNum: numero.toLowerCase(),
    cityName: ciudad.toLowerCase(),
    location: ubicacionV1ToV3(pointV1.ubicacion),
    reference: referencia.toLowerCase()
  };
}

// ---

export async function migrateClientToBuyer(
  mdb: IDatabase,
  city: string,
  email: string
): Promise<void> {

  const client = await mdb.v1.clients.getOne({ verifiedEmail: email });
  if (!client) return;

  const buyer = await mdb.buyers.getOne({ email });
  if (!!buyer) return;

  const {
    _id,
    point1,
    point2,
    point3,
    ...otherProps
  } = client;

  const points: T.Model.Points = {};

  if (point1?.codigo) points[1] = pointV1ToV3(1, point1);
  if (point2?.codigo) points[2] = pointV1ToV3(2, point2);
  if (point3?.codigo) points[3] = pointV1ToV3(3, point3);

  const data: T.Model.Buyer = {
    _id,
    email,
    points,
    ...otherProps
  };

  await mdb.buyers.upsert({ email }, data);
  
}