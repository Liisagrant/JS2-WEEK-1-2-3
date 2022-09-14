//The find() and findIndex() array methods will search for an item and then completely stop traversing through the array once the element is found.
//When using the find() array method, the element from the array will be returned. If no element is found, then undefined is returned.

//This is an example demonstrating that find()/findIndex() will break out once the value has been found:
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values.find((currentValue, index) => {
  console.log("Current index: ", index);
  if (currentValue === 3) {
    return true;
  }
});

console.log("Found value:", foundValue);
// The console logs the following:
// Current index:  0
// Current index:  1
// Current index:  2
// Current index:  3
// Found value: 3

//Example 1: Finding a temperature above a point
const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const valueFound = temperatures.find(
  (currentTemprature) => currentTemprature >= 120
);
console.log(valueFound);

//Example 2: Find the first name available beginning with a specific letter
const users = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

// const foundUser = users.find((user) => {
//   if (user.name[0].toLowerCase() === "j") {
//     return true;
//   }
// });

//Refactored
const foundUser = users.find(({ name }) => name[0].toLocaleLowerCase() === `j`);
console.log(foundUser);

//Example 3: Find if a book is in stock
const books = [
  { title: "Building a Spaceship", inStock: false },
  { title: "Growing Orchids", inStock: false },
  { title: "River Fisher", inStock: false },
];

// const foundBook = books.find((book) => {
//   if (book.inStock === true) {
//     return true;
//   }
// });
// if (foundBook === undefined) {
//   console.log("No books for you");
// } else {
//   console.log("first book in stock", foundBook);
// }

//Refactor
const foundBook = books.find(({ inStock }) => inStock);

if (!foundBook) {
  console.log("no book");
} else {
  console.log("first book in stock", foundBook);
}
