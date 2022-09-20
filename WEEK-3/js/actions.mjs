function showmessage(message) {
  console.log("helloe " + message);
}

function ShowAge(age) {
  console.log("my age is " + age);
}

//alle funksjoner som skal exporteres må skrives som vist under. De må også være exportet for å bli importert.

export { showmessage, ShowAge };
//Her exporterer vi funksjonen inn til main.js som vi vil bruke der.
