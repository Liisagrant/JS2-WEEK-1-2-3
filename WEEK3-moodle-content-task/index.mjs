import { calculateTax } from "/tax.mjs";
import { formatCurrency } from "/utils.mjs";
import { displayAmount } from "/display.mjs";

const price = 100;
const taxPercentage = 15;

const priceWithTax = calculateTax(price, taxPercentage);

const formattedPriceWithTax = formatCurrency(priceWithTax, "$");

displayAmount(formattedPriceWithTax);
