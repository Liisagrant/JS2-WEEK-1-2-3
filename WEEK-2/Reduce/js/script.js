// // The .reduce() array method works a bit differently to the other array methods. It is a bit more complex than the other methods, however with some imagination it allows one to perform very complex operations with very little code.
// //Usually the array methods return a new array, however in the reduce array method there is only a single variable that is returned.
// //Let’s have a look at a basic example before diving in a bit deeper:
// const values = [2, 3, 5, 10, 20];
// const sum = values.reduce((total, value) => {
//   total += value;
//   return total;
// }, 0);
// console.log(sum);
// //NOTE: The reduce array method does not modify the original array. It returns a single value, however this value can be an array or an object.

// const values1 = [100, 200, 300, 400, 500];

// const endResult = values1.reduce(
//   (previousValue, currentElement, index, array) => {
//     return previousValue;
//   }
// );
// console.log(endResult);

// //Practical Example 1: Add all of the numbers
// const values2 = [5, 5, 5, 10];
// // const sumOfValues = values2.reduce((total, value) => {
// //   total += value;
// //   return total;
// // });

// //Make it better:
// const sumOfValues = values2.reduce((total, value) => (total += value));
// console.log(sumOfValues);

// //Practical Example 2: Get the total cost of all products
// const products = [
//   { title: "Cheese", price: 15.0 },
//   { title: "Milk", price: 8.99 },
//   { title: "Bread", price: 22.0 },
//   { title: "Egg", price: 5 },
// ];

// const totalPrice = products.reduce(
//   (total, currentProduct) => (total += currentProduct.price),
//   0
// );
// console.log(totalPrice);

// //Practical Example 3: Get the total cost of in-stock products
// const productsFood = [
//   { title: "Cheese", inStock: false, quantity: 2, price: 15.0 },
//   { title: "Milk", inStock: true, quantity: 5, price: 8.99 },
//   { title: "Bread", inStock: true, quantity: 3, price: 22.0 },
//   { title: "Egg", inStock: true, quantity: 12, price: 5 },
// ];

// const totalCost = productsFood.reduce((total, currentProduct) => {
//   if (currentProduct.inStock === true) {
//     total += currentProduct.price * currentProduct.quantity;
//   }
//   return total;
// }, 0);

// console.log(totalCost);
console.log("FROM CLASS");
const myValues = [2, 3, 5, 10, 20];

//We want to calculate the sum of items in the array.
const mySum = myValues.reduce((total, item) => {
  total += item;
  return total;
}, 0);
console.log("The sum", mySum);

//Calculate the total number of cars in all the garages
//use the reduse method
//please have in mind that I have 50 cars away in maintanance
const garages = [
  { make: "bmw", cars: 10 },
  { make: "Tesla", cars: 20 },
  { make: "Opel", cars: 40 },
  { make: "Nissan", cars: 1 },
];

const findAllCars = garages.reduce((total, { cars }) => {
  total += cars;
  return total;
}, 50);
console.log("Sum of all cars", findAllCars);

//Get the total cost of instock products
//to calculate the total cost you need to multiply
//price * quantity
//please use reduce
const myProducts = [
  {
    title: "pudding",
    isInStock: true,
    quantity: 10,
    price: 20,
    currency: "NOK",
  },
  {
    title: "cheese",
    isInStock: false,
    quantity: 0,
    price: 200,
    currency: "NOK",
  },
  {
    title: "milk",
    isInStock: true,
    quantity: 20,
    price: 100,
    currency: "NOK",
  },
  {
    title: "eggs",
    isInStock: true,
    quantity: 1000,
    price: 10,
    currency: "NOK",
  },
];

const priceMyProducts = myProducts.reduce((total, item) => {
  item.isInStock === true ? (total += item.price * item.quantity) : null;
  return total;
}, 0);

console.log("Sum of all products in stock", priceMyProducts);

// const priceMyProducts = myProducts.reduce((total, item) => {
//   if (item.isInStock === true) {
//     total += item.price * item.quantity;
//   }
//   return total;
// }, 0);
// console.log("Sum of all products in stock", priceMyProducts);
