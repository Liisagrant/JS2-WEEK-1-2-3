// //convert to JSON

// // const person = {
// //   name: "Ola Nordmann",
// //   id: 9,
// //   isAdmin: true,
// // };

// // const personJSON = JSON.stringify(person);

// // console.log(personJSON);

// //Convert to JavaScript
// // const personJSON = '{ "name": "Ola Nordmann", "id": 9, "isAdmin": true }';

// // const person = JSON.parse(personJSON);

// // console.log(person);

// //FRam og tilbake

// const person = {
//   firstName: "lisa",
//   lasName: "Grant",
//   isAdmin: false,
//   id: 19,
// };

// console.log(person);

// const stringified = JSON.stringify(person);
// console.log(stringified);

// const parsed = JSON.parse(stringified);
// console.log(parsed);

// //lesson task
// const myCountry = {
//   country: "Norway",
//   city: "Oslo",
//   currency: "Krone",
// };

// console.log(myCountry);

// const stringifiedMyCountry = JSON.stringify(myCountry);
// console.log(stringifiedMyCountry);

// const ParsedMyCountry = JSON.parse(stringifiedMyCountry);
// console.log(ParsedMyCountry);

//Class

// JS to JSON
//1. Stringify

const userDetails = {
  name: "Uzo",
  id: 1234,
  isStudent: true,
  section: "Front-end Development",
};

console.log("UserDetail JS format", userDetails);

const userDetailJSON = JSON.stringify(userDetails);
console.log("userDetail JSON format", userDetailJSON);

const userDetailsBackJs = JSON.parse(userDetailJSON);
console.log("userDetail back to JS format", userDetailJSON);

const myObjectJSON = '{"name":"lisa", "id":"1223446", "isStudent": true}';
console.log(myObjectJSON);

const myObjectToJS = JSON.parse(myObjectJSON);
console.log(myObjectToJS);
