export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const formatDecimals = (n: number, places: number = 2) => {
  return n.toFixed(places);
};
