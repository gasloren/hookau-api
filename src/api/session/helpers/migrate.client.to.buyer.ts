import type { T } from '../../../_types/index.js';
import type { IDatabase } from '../../../mongo/types.js';
import { randomId } from '../../../utils.js';

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
    id: randomId(),
    alias: codigo.toLowerCase(),
    address: `${calle} ${altura}, ${ciudad}`,
    apartNum: numero.toLowerCase(),
    cityCode: ciudad === 'Zapala' ? 'AR8340' : 'AR8370',
    cityName: ciudad || 'San Martín de los Andes',
    location: ubicacionV1ToV3(pointV1.ubicacion),
    reference: referencia.toLowerCase()
  };
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
    driver,
    profile,
    required = {},
    customerId = ''
  } = client;

  const points: T.Model.Points = {};

  if (point1?.codigo) {
    const d1 = pointV1ToV3(point1);
    points[d1.id] = { ...d1 };
  }
   if (point2?.codigo) {
    const d2 = pointV1ToV3(point2);
    points[d2.id] = { ...d2 };
  }
   if (point3?.codigo) {
    const d3 = pointV1ToV3(point3);
    points[d3.id] = { ...d3 };
  }

  const data: T.Model.Buyer = {
    _id,
    email,
    rider: driver,
    points,
    profile: {
      nombre: profile?.nombre || '',
      apellido: profile?.apellido || '',
      telefono: profile?.telefono || ''
    },
    required,
    customerId
  };

  await mdb.buyers.upsert({ email }, data);
  
}