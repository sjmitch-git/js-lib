export const formatCurrency = (
  amount: number,
  currency: string,
  currencyDisplay: 'symbol' | 'code' | 'name' = 'symbol'
): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay,
  }).format(amount);
  // Normalize spaces to ensure consistent output
  return formatted.replace(/\s+/g, ' ').trim();
};