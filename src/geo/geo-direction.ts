import { geoBearing } from "./geo-bearing";

export const geoDirection = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW" => {
  const bearing = geoBearing(lat1, lon1, lat2, lon2);
  if (bearing >= 337.5 || bearing < 22.5) return "N";
  if (bearing >= 22.5 && bearing < 67.5) return "NE";
  if (bearing >= 67.5 && bearing < 112.5) return "E";
  if (bearing >= 112.5 && bearing < 157.5) return "SE";
  if (bearing >= 157.5 && bearing < 202.5) return "S";
  if (bearing >= 202.5 && bearing < 247.5) return "SW";
  if (bearing >= 247.5 && bearing < 292.5) return "W";
  return "NW";
};
