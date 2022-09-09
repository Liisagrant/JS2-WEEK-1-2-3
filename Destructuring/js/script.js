// Destructuring Objects
//To destructure an object we use the following syntax. In the curly braces { } we add the properties we want to use from the object,
// and on the right, we add the object we want to destructure from:

//Example
// const { property1, property2 } = objectName;

//Example on how to destructure
// const person = {
//   firstName: "Lisa",
//   lastName: "Grant",
//   country: "Norway",
// };

// const greeting = `hello I am ${person.firstName} ${person.lastName} from ${person.country}.`;
// console.log(greeting);

//Let’s assign the properties to variables this time to make the code more concise.
const person = {
  firstName: "Lisa",
  lastName: "Grant",
  country: "Norway",
};

const firstName = person.firstName;
const lastName = person.lastName;
const country = person.country;

const greeting = `hello I am ${firstName} ${lastName} from ${country}.`;
console.log(greeting);

// there are 2 issues with this
// 1. if object name is changed there will be alot to fix if you have long lines of codes.
// 2. If we had many properties and wanted to create variables from them, we would end up with many extra lines of code.

// Destructuring properties

const pet = {
  firstPetName: "cat",
  lastPetName: "john",
  petCountry: "Danmark",
};

const { firstPetName, lastPetName, petCountry } = pet;

const greetPet = `hello you are ${firstPetName} ${lastPetName} from ${petCountry}`;
