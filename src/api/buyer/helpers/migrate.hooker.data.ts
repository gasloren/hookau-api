import type { T } from '../../../_types/index.js';
import type { IDatabase } from '../../../mongo/types.js';

// --

function hookerToRiderData(
  hooker: T.Model.HookerV1
): T.Model.Rider {

  return {
    _id: hooker._id,
    city: hooker.city,
    nick: hooker.profile.nick,
    face: hooker.profile.face,
    fname: hooker.profile.fname,
    lname: hooker.profile.lname,
    email: hooker.profile.email,
    phone: hooker.profile.phone,
    bornAt: hooker.profile.bornAt,
    address: hooker.profile.address,
    cuitNum: hooker.profile.cuitNum,
    ivaType: hooker.profile.ivaType,
    dominio: hooker.profile.dominio,
    vehicle: hooker.vehicle || 'auto',
    marketFee: hooker.marketFee || 10,
    jobsCount: hooker.jobsCount || 0,
    feeParams: {
      since: hooker.feeParams?.since || '',
      total: hooker.feeParams?.total || 0,
      quant: hooker.feeParams?.quant || 0
    },
    zones: hooker.zones || {},
    payment: {
      alias: hooker.profile.mpAlias,
      owner: hooker.profile.mpOwner
    },
    pricing: {
      km: 0,
      min: 3500
    },
    maxOrders: hooker.maxOrders || 2,
    notifyMe: {
      online: hooker.notifyMe?.online || 'enabled',
      offline: hooker.notifyMe?.offline || 'enabled'
    }
  };

}

// --

export async function checkHookerMigration(
  mdb: IDatabase,
  cityId: string,
  riderId?: string
): Promise<void> {

  if (!riderId) return;

  const rider = await mdb.riders.getOne({
    city: cityId,
    _id: riderId
  });
  if (rider) return;

  const hooker = await mdb.v1.users.getOne({
    _id: riderId,
    userrole: 'hooker'
  }) as T.Model.HookerV1;

  if (!hooker) return;

  await mdb.riders.insert(hookerToRiderData(hooker));

}