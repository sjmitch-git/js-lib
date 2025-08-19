import { geoDistance } from "./geo-distance";

// Check if a coordinate is within a specified radius of another
export const isWithinRadius = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radius: number,
  unit: "miles" | "km" | "nautical" = "miles"
): boolean => {
  const distance = geoDistance(lat1, lon1, lat2, lon2, unit);
  return distance <= radius;
};
