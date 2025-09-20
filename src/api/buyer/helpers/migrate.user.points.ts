import type { T } from '../../../_types/index.js';

// --

export function migrateUserPoints(
  buyer: T.Model.Buyer
) {
  const points: T.Model.Points = {};
  if (buyer.point1?.id) {
    points[buyer.point1.id] = { ...buyer.point1 };
  }
  if (buyer.point2?.id) {
    points[buyer.point2.id] = { ...buyer.point2 };
  }
  if (buyer.point3?.id) {
    points[buyer.point3.id] = { ...buyer.point3 };
  }
  return points;
}