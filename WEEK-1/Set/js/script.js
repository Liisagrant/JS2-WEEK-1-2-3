// //A Set object stores unique values of any type. A value can only ever occur once in a Set and is therefore unique in a Set. You can also iterate through a Set in the order in which items were successfully added.
// //create a new set object
// const mySet = new Set();

// //Adding a value to a set
// mySet.add("a");
// // mySet is now ['a']

// mySet.add("1");
// // mySet is now ['a', 1]

// //Check if a value exists
// mySet.has("a");
// // Returns true because 'a' is in the set

// mySet.has("b");
// // Returns false because 'b' is not in the set

// console.log(mySet);
// // //delet
// mySet.delete("a");
// console.log(mySet);

// //Getting the number of items in a set
// console.log(mySet.size);

//Lesson Task

const value = new Set();
value.add(1);
value.add(2);
value.add(3);
value.add(4);
value.add(5);
console.log(value.size);
value.has("a");
value.has(1);
