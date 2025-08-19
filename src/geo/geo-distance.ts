import { validateCoords } from "./validate";

export const geoDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: "miles" | "km" | "nautical" = "miles"
): number => {
  validateCoords(lat1, lon1);
  validateCoords(lat2, lon2);
  if (lat1 === lat2 && lon1 === lon2) return 0;

  const R = unit === "km" ? 6371 : unit === "nautical" ? 3439.593 : 3958.761; // Precise radii
  const radLat1 = (Math.PI * lat1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const dLat = (Math.PI * (lat2 - lat1)) / 180;
  const dLon = (Math.PI * (lon2 - lon1)) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Number((R * c).toFixed(2)); // Round to 2 decimal places
};
