import { validateCoords } from "./validate";

export const geoMidpoint = (
  coords: { lat: number; lon: number; weight?: number }[]
): { lat: number; lon: number } | null => {
  if (coords.length === 0) return null;
  if (coords.length === 1) {
    validateCoords(coords[0].lat, coords[0].lon);
    return { lat: coords[0].lat, lon: coords[0].lon };
  }

  coords.forEach(({ lat, lon, weight = 1 }) => {
    validateCoords(lat, lon);
    if (weight <= 0) throw new Error("Weight must be positive");
  });

  const totalWeight = coords.reduce((sum, { weight = 1 }) => sum + weight, 0);
  const cartesian = coords.map(({ lat, lon, weight = 1 }) => {
    const radLat = (Math.PI * lat) / 180;
    const radLon = (Math.PI * lon) / 180;
    return {
      x: Math.cos(radLat) * Math.cos(radLon) * weight,
      y: Math.cos(radLat) * Math.sin(radLon) * weight,
      z: Math.sin(radLat) * weight,
    };
  });

  const avg = cartesian.reduce(
    (acc, { x, y, z }) => ({
      x: acc.x + x,
      y: acc.y + y,
      z: acc.z + z,
    }),
    { x: 0, y: 0, z: 0 }
  );

  avg.x /= totalWeight;
  avg.y /= totalWeight;
  avg.z /= totalWeight;

  const magnitude = Math.sqrt(avg.x * avg.x + avg.y * avg.y + avg.z * avg.z);
  if (magnitude === 0) return null;

  const lon = Math.atan2(avg.y, avg.x);
  const hyp = Math.sqrt(avg.x * avg.x + avg.y * avg.y);
  const lat = Math.atan2(avg.z, hyp);

  return {
    lat: (lat * 180) / Math.PI,
    lon: (lon * 180) / Math.PI,
  };
};
