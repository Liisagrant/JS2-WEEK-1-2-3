export function calculateTax(amount, taxPercentage = 15) {
  return amount + amount * (taxPercentage / 100);
}
