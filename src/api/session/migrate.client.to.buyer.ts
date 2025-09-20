import type { T } from '../../_types/index.js';
import type { Point, Point_V1 } from '../../_types/models/buyer.js';
import type { IDatabase } from '../../mongo/types.js';

// ---

function pointV1ToV3(
  pointV1: Point_V1
): Point {
  return {
    id: pointV1.codigo,
    calle: pointV1.calle,
    altura: pointV1.altura,
    numero: pointV1.numero,
    barrio: pointV1.barrio,
    ciudad: pointV1.ciudad,
    cod_ciudad: pointV1.cod_ciudad,
    pais: pointV1.pais,
    cod_pais: pointV1.cod_pais,
    coords: {
      lat: Number(pointV1.ubicacion.lat),
      lng: Number(pointV1.ubicacion.lng)
    },
    referencia: pointV1.referencia
  }
}


// ---

export async function migrateClientToBuyer(
  mdb: IDatabase,
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

  if (point1?.codigo) points[point1.codigo] = pointV1ToV3(point1);
  if (point2?.codigo) points[point2.codigo] = pointV1ToV3(point2);
  if (point3?.codigo) points[point3.codigo] = pointV1ToV3(point3);

  const data: T.Model.Buyer = {
    _id,
    email,
    points,
    ...otherProps
  };

  await mdb.buyers.upsert({ email }, data);
  
}