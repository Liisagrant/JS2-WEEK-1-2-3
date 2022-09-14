// //The filter method
// //it loops through the array and filters out items which are then returned as a new array.
// //const values = [100, 200, 300, 400, 500];

// //const newArray = values.filter((element, index, array) => {
// // Return true if you want to keep the item in the array being returned
// // Return false if you don't want the item to be included in the array being returned
// //});

// //Returning a conditional check
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter((number) => {
//   if (number >= 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filteredNumbers);

// const moreNumbers = [3, 6, 8, 9, 33, 55, 6, 9, 0, 12, 45];
// // const filterMoreNumbers = moreNumbers.filter((numbers) =>{
// //     if(numbers <= 9) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // });
// //det er faktisk ikke behov for en else med return false her.

// //lets make it simpler
// const moreFilterNumbers = moreNumbers.filter((numbers) => numbers <= 9);
// console.log(moreFilterNumbers);

// //Example 1: Filter numbers above 100
// //In this example, we have a list of numbers. If a number is equal to or above 100 then we keep it in our new array that gets returned.
// const numbers1 = [0, 25, 50, 75, 100, 125, 150, 175, 200];
// // const filterNumbers1 = numbers1.filter((e) => {
// //   if (e >= 100) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // });
// //LETS MAKE IT BETTER AND SHORTER
// const filterNumbers1 = numbers1.filter((e) => e >= 100);
// console.log(filterNumbers1);

// //Example 2: Filter ages >= 18
// //In this example we filter through a list of people and only select adults over the age of 18. Our array is a list of people objects that all contain a name and age property, so we will need to check these nested properties
// const people = [
//   { name: "Kari", age: 28 },
//   { name: "Astrid", age: 32 },
//   { name: "Hans", age: 22 },
//   { name: "Inger", age: 19 },
//   { name: "Liv", age: 42 },
//   { name: "Kristoffer", age: 12 },
//   { name: "Anne", age: 12 },
//   { name: "Martin", age: 17 },
//   { name: "Joakim", age: 45 },
//   { name: "Ellen", age: 7 },
// ];

// // const adults = people.filter((person) => {
// //   if (person.age >= 18) {
// //     return true;
// //   }
// // });
// // console.log(adults);

// //lets make it better
// const adults = people.filter(({ age }) => age >= 18);
// console.log(adults);

// //Example 3
// //In this example we have a list of games. We want to filter the games that have multiplayer and a rating of 8 or higher.
// const games = [
//   { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
//   { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
//   { title: "Ghost Story", isMultiplayer: false, rating: 8 },
//   { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
//   { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
// ];

// // const filterGames = games.filter((game) => {
// //   if (game.isMultiplayer === true && game.rating >= 8) {
// //     return true;
// //   }
// // });
// // console.log(filterGames);
// //lets make it better
// const filteredGames = games.filter(
//   ({ isMultiplayer, rating }) => isMultiplayer && rating >= 8
// );
// console.log(filteredGames);

//FROM CLASS
console.log("FROM CLASS");
const myNumbers = [4, 7, 8, 90, 5, 4, 67];

// const filterMyNumbers = myNumbers.filter((number) => {
//   if (number >= 4) {
//     return true;
//   }
// });
const filterMyNumbers = myNumbers.filter((number) => number >= 4);
console.log("Numbers that are higher or equal to 4", filterMyNumbers);

const myValue = [0, 23, 55, 66, 777, 100, 500, 250];

// const filterMyValue = myValue.filter((number) => {
//   if (number >= 100) return true;
// });

//cleaner
// const filterMyValue = myValue.filter((number) => number >= 100);
// console.log(filterMyValue);

//write function that use filter metod to find

const myPeople = [
  { name: "Kari", age: 28 },
  { name: "Astrid", age: 32 },
  { name: "Hans", age: 22 },
  { name: "Inger", age: 19 },
  { name: "Liv", age: 42 },
  { name: "Kristoffer", age: 12 },
  { name: "Anne", age: 12 },
  { name: "Martin", age: 17 },
  { name: "Joakim", age: 45 },
  { name: "Ellen", age: 7 },
];

const filterMyPeople = myPeople.filter(({ age }) => age >= 22);
console.log("People with age higher than 22", filterMyPeople);

//In this example wwe have a list of games
//We want to filter the games that have multiplayer and the rating is greater than 8

const myGames = [
  { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
  { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
  { title: "Ghost Story", isMultiplayer: false, rating: 8 },
  { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
  { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
];

const filterMyGames = myGames.filter(
  ({ isMultiplayer, rating }) => isMultiplayer === true && rating >= 8
);
console.log(
  "Games that has multiplayer and a rating higher or equl to 8",
  filterMyGames
);
