//convert to JSON

// const person = {
//   name: "Ola Nordmann",
//   id: 9,
//   isAdmin: true,
// };

// const personJSON = JSON.stringify(person);

// console.log(personJSON);

//Convert to JavaScript
// const personJSON = '{ "name": "Ola Nordmann", "id": 9, "isAdmin": true }';

// const person = JSON.parse(personJSON);

// console.log(person);

//FRam og tilbake

const person = {
  firstName: "lisa",
  lasName: "Grant",
  isAdmin: false,
  id: 19,
};

console.log(person);

const stringified = JSON.stringify(person);
console.log(stringified);

const parsed = JSON.parse(stringified);
console.log(parsed);

//lesson task
const myCountry = {
  country: "Norway",
  city: "Oslo",
  currency: "Krone",
};

console.log(myCountry);

const stringifiedMyCountry = JSON.stringify(myCountry);
console.log(stringifiedMyCountry);

const ParsedMyCountry = JSON.parse(stringifiedMyCountry);
console.log(ParsedMyCountry);
