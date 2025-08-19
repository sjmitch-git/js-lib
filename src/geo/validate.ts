export const validateCoords = (lat: number, lon: number) => {
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    throw new Error("Invalid coordinates: latitude must be -90 to 90, longitude -180 to 180");
  }
};
