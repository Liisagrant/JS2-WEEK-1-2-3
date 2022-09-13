// //orginal array
// const arrayValues = [5, 7, 9, 60];

// //new array called newArray.
// //result from ".map" method
// const newArray = arrayValues.map(/*code here*/);

//callback functions
//1. Anonymous function (most used one).
//2. Seperate named function

//1. Anonymous function (most used one).
//2. Seperate named function

// const values = [100, 200, 300, 400];
// const newValues = values.map((element, index, array) => {
//   //modify and return elements
//   return index;
// });

// console.log(newValues);

const callbackfunction = (element, index, array) => {
  //mofify and return element here.
  return index;
};

const values = [100, 200, 300, 400];
const newValues = values.map(callbackfunction);
console.log(newValues);
