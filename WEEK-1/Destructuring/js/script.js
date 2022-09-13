// // Destructuring Objects
// //To destructure an object we use the following syntax. In the curly braces { } we add the properties we want to use from the object,
// // and on the right, we add the object we want to destructure from:

// //Example
// // const { property1, property2 } = objectName;

// //Example on how to destructure
// // const person = {
// //   firstName: "Lisa",
// //   lastName: "Grant",
// //   country: "Norway",
// // };

// // const greeting = `hello I am ${person.firstName} ${person.lastName} from ${person.country}.`;
// // console.log(greeting);

// //Let’s assign the properties to variables this time to make the code more concise.
// const person = {
//   firstName: "Lisa",
//   lastName: "Grant",
//   country: "Norway",
// };

// const firstName = person.firstName;
// const lastName = person.lastName;
// const country = person.country;

// const greeting = `hello I am ${firstName} ${lastName} from ${country}.`;
// console.log(greeting);

// // there are 2 issues with this
// // 1. if object name is changed there will be alot to fix if you have long lines of codes.
// // 2. If we had many properties and wanted to create variables from them, we would end up with many extra lines of code.

// // Destructuring properties

// const pet = {
//   firstPetName: "cat",
//   lastPetName: "john",
//   petCountry: "Danmark",
// };

// const { firstPetName, lastPetName, petCountry } = pet;

// const greetPet = `hello you are ${firstPetName} ${lastPetName} from ${petCountry}`;

// //Destructuring Parameters
// //You can destructure parameters which is a very common technique in JavaScript, Array methods and React.

// // function greetPerson(peopleObject) {
// //   const { firstNavn, lastNavn } = peopleObject;
// //   console.log(`Hello ${firstNavn} ${lastNavn}.`);
// // }

// //It can also be done like this.
// function greetPerson({ firstNavn, lastNavn }) {
//   console.log(`Hello ${firstNavn} ${lastNavn}`);
// }

// const people = {
//   firstNavn: "Robin",
//   lastNavn: "Grant",
// };

// greetPerson(people);

// //Destructured in an Array method
// const happpyPeople = [
//   {
//     firstName: "Mia",
//     lastNavn: "Woods",
//     score: 9,
//   },
//   {
//     firstName: "Lisa",
//     lastNavn: "Grant",
//     score: 8,
//   },
//   {
//     firstName: "Daniel",
//     lastNavn: "Woods",
//     score: 3,
//   },
// ];

// const winners = happpyPeople.filter(({ score }) => {
//   if (score >= 5) {
//     return true;
//   }
// });

// console.log(winners);

// //Destructuring Arrays
// const coords = [12, 30, 5, 9, 100, 53];

// // 'x' is index 0 in the array
// // 'y' is index 1 in the array
// const [x, y] = coords;

// console.log(x, y);
// // Logs:
// // 12 30

// //Array Destructuring Example 2
// //Let’s have a look at another example. We have an array of names (names) and then destructure index 0 and index 1 to the variable names name0 and name1.
// const names = ["Ola", "Kari", "Joakim", "Ole"];

// // 'name0' is index 0 in the array
// // 'name1' is index 1 in the array
// const [name0, name1] = names;

// console.log(name0, name1);
// // Logs:
// // Ola Kari

// //From class
// //example 1
// //destruct from objects

// // const {} = objectName;

// // example 2
// //dot notation
// const partyPeople = {
//   firstName1: "Nick",
//   lastName1: "Anderson",
//   country1: "Danmark",
// };

// // const greetPartyPeople = `Hello I am ${partyPeople.firstName} ${partyPeople.lastName} and I live in ${partyPeople.country}`;
// // console.log(greetPartyPeople);
// //Her use destructing

// const { firstName1, lastName1, country1 } = partyPeople;
// const greetPartyPeople = `Hello I am ${firstName1} ${lastName1} and I live in ${country1}`;
// console.log(greetPartyPeople);

// function helloUser(userObject) {
//   const { firstName, country } = userObject;
//   console.log(`Hello ${firstName} from ${country}, Welcom!`);
// }

//Write it better:
function helloUser({ firstName, country }) {
  console.log(`Hello ${firstName} from ${country}, Welcom!`);
}

//Log Hello Lisa from Norway, welcom!

const user = {
  firstName: "Lisa",
  country: "Norway",
};
helloUser(user);

//Destruction in Arrays

const people = [
  {
    name: "Peppa",
    age: "3",
    score: 9,
  },
  {
    name: "Mumi",
    age: "3",
    score: 10,
  },
  {
    name: "Pelle",
    age: "3",
    score: 4,
  },
  {
    name: "Pippi",
    age: "3",
    score: 5,
  },
  {
    name: "Store-hu",
    age: "3",
    score: 7,
  },
];

//condiction score >=5
//Old way
// const winner = people.filter((currentItem) => {
//   if (currentItem.score >= 5) {
//     return true;
//   }
// });

// console.log(winner);

//New way
const winner = people.filter(({ score }) => {
  if (score >= 5) {
    return true;
  }
});

console.log(winner);

// //destructing from Array
// // const [] = arrayName

// const [val1, val2] = arrayName

//example destructing array

const streetNumbers = [12, 30, 0, 50, 1, 54];
const [x, y] = streetNumbers;
console.log(x, y);

const names = ["hesh", "linda", "Alex", "Fariad", "Bob", "Mia", "daniel"];
const [name1, name2, name3, ...others] = names;
console.log(name1, name2, name3);
console.log(others);

//how to skip.
const values = [4, 6, 7, 8, 10];
const [value0, , value2, , value4] = values;
console.log(value0, value2, value4);

//how to change key name alising
const myCat = {
  name: "kitty",
  age: "10",
  typerr: "House cat",
};

const { name, age, typerr: breed } = myCat;
console.log(
  `My cat name is ${name} and is ${age} years old. The breed is ${breed}`
);
