//storing data
localStorage.setItem("firstName", "Lisa");

//retriv data
const firstName = localStorage.getItem("firstName");

//removing data
localStorage.removeItem("firstName");

//clearing the whole local storage
//localStorage.clear();

// sessionStorage is exactly the same as localStorage except its data is cleared immediately when the page is closed.

//Lesson task
// add a key names "lesson" with value "local storage"
localStorage.setItem("lesson", "local storage");

//remove it
localStorage.removeItem("lesson");

const pet = {
  type: "Dog",
  name: "Lilje",
};

const jsonPet = JSON.stringify(pet);

localStorage.setItem("pet", jsonPet);

const petRetrived = localStorage.getItem("pet");
const petJSON = JSON.parse(petRetrived);
console.log(petJSON);
