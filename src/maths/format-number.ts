export const formatNumber = (num: number, locale?: string) => {
  const formatter = new Intl.NumberFormat(locale);
  return formatter.format(num);
};

export const formatDecimals = (n: number, places: number = 2) => {
  return n.toFixed(places);
};
