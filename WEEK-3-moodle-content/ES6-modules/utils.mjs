export function formatCurrency(amount, currencySymbol = "kr") {
  const formattedAmount = amount.toFixed(2);
  return `${formattedAmount} ${currencySymbol}`;
}
