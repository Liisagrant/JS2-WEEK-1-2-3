//what is map?
//The Map object holds key/value pairs like a normal object. The original insertion order into a Map object is remembered whereas a normal object’s order is unreliable. Any value, both objects and primitive values may be used as a key or a value.

//creating a Map

const myMap = new Map();

myMap.set("a", 1);
console.log(myMap);
console.log(myMap.get("a"));
//Adding a key/value pair
//We use the set method on a Map object to add a new key/value pair.

//Getting a value from a Map
//You can delete values from a Map using the delete method on a Map object.
myMap.delete("a");

//Getting the number of items in a Map.
myMap.set("a", 1);
myMap.set("b", 2);
console.log(myMap.size);

//lesson Task

const user = new Map();
user.set(12, { firstName: "Ola", lastName: "Nordmann" });
console.log(user);
console.log(user.size);
user.set(50, { firstName: "Kari", lastName: "Nordmann" });
console.log(user.size);
user.delete(12);
console.log(user.size);
