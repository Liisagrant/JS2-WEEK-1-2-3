// //storing data
// localStorage.setItem("firstName", "Lisa");

// //retriv data
// const firstName = localStorage.getItem("firstName");

// //removing data
// localStorage.removeItem("firstName");

// //clearing the whole local storage
// //localStorage.clear();

// // sessionStorage is exactly the same as localStorage except its data is cleared immediately when the page is closed.

// //Lesson task
// // add a key names "lesson" with value "local storage"
// localStorage.setItem("lesson", "local storage");

// //remove it
// localStorage.removeItem("lesson");

// //Task 2 Add the following object with the key of pet. Don’t forget to stringify it first:

// const pet = {
//   type: "Dog",
//   name: "Lilje",
// };

// const jsonPet = JSON.stringify(pet);

// localStorage.setItem("pet", jsonPet);

// const petRetrived = localStorage.getItem("pet");
// const petJSON = JSON.parse(petRetrived);
// console.log(petJSON);

//From class
//how to set a localstorage variable
localStorage.setItem("name", "Lisa");

//how to get local storage data
//retriv
const firstName = localStorage.getItem("name");
console.log(firstName);

//remove local storage items

localStorage.removeItem("name");

//to clear local storage
localStorage.clear();
