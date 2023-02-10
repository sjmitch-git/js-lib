export const formatCurrency = (
  num: number,
  currency: string,
  currencyDisplay: string
) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency,
    currencyDisplay: currencyDisplay,
  });
  return formatter.format(num);
};
