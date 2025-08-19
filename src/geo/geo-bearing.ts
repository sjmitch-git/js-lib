import { validateCoords } from "./validate";

export const geoBearing = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  validateCoords(lat1, lon1);
  validateCoords(lat2, lon2);
  if (lat1 === lat2 && lon1 === lon2) return 0;

  const radLat1 = (Math.PI * lat1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const y = Math.sin(dLon) * Math.cos(radLat2);
  const x =
    Math.cos(radLat1) * Math.sin(radLat2) - Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(dLon);
  let bearing = Math.atan2(y, x);
  bearing = (bearing * 180) / Math.PI;
  bearing = (bearing + 360) % 360;

  return Number(bearing.toFixed(2));
};
