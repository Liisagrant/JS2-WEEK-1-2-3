import { calculateTax } from "./ES6-modules/tax.mjs";
import { formatCurrency } from "./ES6-modules/utils.mjs";
import { displayAmount } from "./display.mjs";

const price = 100;
const taxPercentage = 15;

const priceWithTax = calculateTax(price, taxPercentage);

const formattedPriceWithTax = formatCurrency(priceWithTax, "kr");

displayAmount(formattedPriceWithTax);
