// //1. Dot Notation
// const person = {
//   firstName: "Ola",
//   lastName: "Nordmann",
//   module: "JavaScript",
// };
// const name = person["firstName"];

// console.log(name);

// // 2.Bracket Notation
// const lastName = person["lastName"];
// console.log(lastName);

// //In this example, we have multiple keys that are the same except for a number at the end. We create our key by combining the string ingredient_ with a number e.g. "ingredient_" + 1.
// const recipe = {
//   ingredient_0: "Egg",
//   ingredient_1: "Milk",
//   ingredient_2: "Flour",
// };

// const ingredient0 = recipe["ingredient_" + 0];
// const ingredient1 = recipe["ingredient_" + 1];
// const ingredient2 = recipe["ingredient_" + 2];

// console.log(ingredient0);
// console.log(ingredient1);
// console.log(ingredient2);

console.log("FROM CLASS");
//Dot notation
const myPerson = {
  name: "lisa",
  lastName: "Grant",
  age: 32,
};
console.log(myPerson.name);

//braket notation
console.log(myPerson["age"]);

const myRecipe = {
  ingredient_0: "Egg",
  ingredient_1: "Milk",
  ingredient_2: "Flour",
};

// for (let i = 0; i <= 2; i++) {
//   const ingredient = myRecipe["ingredient_" + i];
//   console.log(ingredient);
// }

//for in loop
const myUserPerson = {
  name: "lisa",
  lastName: "Grant",
  age: 32,
};

for (const person in myUserPerson) {
  console.log("For In LOOP", myUserPerson[person]);
}

const carProfile = {
  make: "bmw",
  year: 2015,
  vinNumber: 82989383,
};

for (const info in carProfile) {
  console.log("the " + info + " is " + carProfile[info]);
}

//The first Object method OBJECT.keys()
//The syntax:
const userPro = {
  name: "lisa",
  age: 4,
};

const userProKeys = Object.keys(userPro);
console.log(userProKeys);

//Object.values()
console.log(Object.values(userPro));

//Object.entries()

const userProfileEntriesArr = Object.entries(userPro);
console.log(userProfileEntriesArr);
