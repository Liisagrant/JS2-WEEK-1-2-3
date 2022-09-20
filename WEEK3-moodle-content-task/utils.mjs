export function formatCurrency(amount, currencySymbol = "$") {
  const formattedAmount = amount.toFixed(2);
  return `${formattedAmount} ${currencySymbol}`;
}
