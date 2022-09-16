// //Chaining
// //One of the most powerful features of array methods is that they can be chained. This means that you can immediately have array methods being called on the result of other array methods. Combining the array methods allows you to perform very complex operations with very little effort, the limitations typically being your own imagination.

// //Basic example
// // const values = [0, 1, 2, 3, 4];

// // const result = values
// //   .filter(/* This filter first runs */)
// //   .reduce(/* This reduce acts on the result of the filter */)
// //   .map(/* This map acts on the result of the reduce above */);

// //Practical example 1: Calculating discount for products in stock
// const DISCOUNT_PERCENTAGE = 20;
// const products = [
//   { name: "Milk", price: 5.0, inStock: true },
//   { name: "Cheese", price: 10.0, inStock: true },
//   { name: "Bread", price: 8.0, inStock: false },
//   { name: "Beans", price: 3.0, inStock: true },
//   { name: "Eggs", price: 12.0, inStock: true },
//   { name: "Rice", price: 4.0, inStock: false },
//   { name: "Meat", price: 25, inStock: true },
//   { name: "Coffee", price: 12.0, inStock: true },
//   { name: "Tea", price: 8.0, inStock: false },
//   { name: "Bottled Water", price: 4.0, inStock: false },
// ];

// const discountedProducts = products
//   .filter((product) => {
//     if (product.inStock === true && product.price >= 5) {
//       return true;
//     }
//   })
//   .map((product) => {
//     product.discountedPrice =
//       product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
//     return product;
//   });

// console.log(discountedProducts);

// //Practical example 2
// const students = [
//   { name: "Victoria", age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
//   { name: "Theo", age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
//   { name: "Markus", age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
//   { name: "Aksel", age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
//   { name: "Felix", age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
//   { name: "Benjamin", age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
//   { name: "Ulrik", age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
//   { name: "Alma", age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
//   { name: "July", age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
//   { name: "Leo", age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
// ];

// const result = students
//   // Get only the students >= 30 and that are online
//   .filter((student) => {
//     if (student.age >= 30 && student.isOnline === true) {
//       return true;
//     }
//   })
//   // Reduce all of the student's averages to a class average
//   .reduce((classAverage, student, index, studentsArray) => {
//     // Reduce all of the student's results to a single average
//     const studentsTotalMarks = student.results.reduce(
//       (studentAverage, result, index, resultsArray) => {
//         studentAverage += result / resultsArray.length;
//         return studentAverage;
//       },
//       0
//     );
//     // Add the average of the student to the class average
//     classAverage += studentsTotalMarks / studentsArray.length;
//     return classAverage;
//   }, 0);

// console.log(result);
console.log("FROM CLASS");

const products = [
  { name: "dress", price: 600 },
  { name: "cream", price: 60 },
  { name: "book", price: 200 },
  { name: "bottle", price: 50 },
  { name: "bedsheet", price: 350 },
];

const dicount = 50;

const filterProducts = products
  .filter(({ price }) => price > 100)
  .map(({ name, price }) => {
    products.price = (dicount / 100) * price;
    return `the ${name} is now on sale. You get it for ${price} NOk. Be super Happy!`;
  });

console.log(filterProducts);

const inventoryProducts = [
  { name: "Milk", price: 5.0, inStock: true },
  { name: "Cheese", price: 10.0, inStock: true },
  { name: "Bread", price: 8.0, inStock: false },
  { name: "Beans", price: 3.0, inStock: true },
  { name: "Eggs", price: 12.0, inStock: true },
  { name: "Rice", price: 4.0, inStock: false },
  { name: "Meat", price: 25, inStock: true },
  { name: "Coffee", price: 12.0, inStock: true },
  { name: "Tea", price: 8.0, inStock: false },
  { name: "Bottled Water", price: 4.0, inStock: false },
];

const theDiscount = 20;
// const foodProducts = inventoryProducts.filter((product) => {
//   if (product.inStock === true && product.price >= 5) {
//     return true;
//   }
// });
// console.log(foodProducts);

// const discountproduct = foodProducts.map((product) => {
//   product.price = (theDiscount / 100) * product.price;
//   return `${product.name} instock, less than 5 and on sale ${product.price}`;
// });
// console.log(discountproduct);

//LETS CHAIN IT:
const foodProductsOnSale = inventoryProducts
  .filter(({ price, inStock }) => inStock === true && price >= 5)
  .map((product) => {
    product.discountPrice = product.price * 0.8;
    return product;
  });
console.log(foodProductsOnSale);

// In this example, we have a list of products that
// we want to apply a discount to it for a sale, but only products where:
// 1. the price is 5 or higher (>= 5)
// 2. the products are in stock (inStock === true)
// use the map method to calculate a new property called discountedPrice
// to calculate the discount = price - (discount percentage / 100) * price
// discount percentage will be 20
// {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}

const students = [
  { name: "Victoria", age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
  { name: "Theo", age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
  { name: "Markus", age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
  { name: "Aksel", age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
  { name: "Felix", age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
  { name: "Benjamin", age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
  { name: "Ulrik", age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
  { name: "Alma", age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
  { name: "July", age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
  { name: "Leo", age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const result = students
  .filter((student) => student.age >= 30 && student.isOnline === true)
  .reduce((classAverage, student, index, studentsArray) => {
    const studentsTotalMarks = student.results.reduce(
      (studentAverage, result, index, resultsArray) => {
        studentAverage += result / resultsArray.length;
        return studentAverage;
      },
      0
    );
    classAverage += studentsTotalMarks / studentsArray.length;
    return classAverage;
  }, 0);
console.log(result);
