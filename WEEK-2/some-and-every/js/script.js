//Some
//some() will check an array to see if at least one of its elements passes the given condition. If it does, it will break out of the some() method and return true. If nothing matches the condition, then it will return false.
//some() is ideal for finding if an array contains a value. This is very similar functionality to the find() array method, however, the key difference is that some() will return a boolean whereas find() will either return the element if found or undefined.

//Basic example 1: Condition matches
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const didMatchCondition = values.some((value, index) => {
  console.log({ index, value });
  if (value >= 3) {
    return true;
  }
});

console.log("Did match condition", didMatchCondition);

//Basic example 2: Condition doesn’t match
const noValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didNotMatchCondition = noValues.some((value, index) => {
  console.log({ index, value });
  if (value >= 100) {
    return true;
  }
});

console.log("Did not match condition:", didNotMatchCondition);

//Practical example 1: Course Modules
const modules = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isSomeCoursesFinished = modules.some((currentModule, index) => {
  console.log("index", index);
  return currentModule.isComplete === true;
});

console.log(isSomeCoursesFinished);

console.log("EVERY");
//Every
//every() will check if each of the values in an array matches the given condition. If all elements match the condition, it will return true. If it finds an element that does not match the condition, it will immediately break out of the every() array method and return false. In short, every() will check to ensure that every element in the array matches the given condition.
//Basic example 1: Conditions all met
const valuesForEvery = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition = valuesForEvery.every((value, index) => {
  console.log("index:", index, "value:", value);
  if (value >= 0) {
    return true;
  }
});

console.log("didAllMatchCondition:", didAllMatchCondition);

//Basic example 2: Conditions not met
const valuesForEvery1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didNotAllMatchCondition = valuesForEvery1.every((value, index) => {
  console.log("index:", index, "value:", value);
  if (value <= 3) {
    return true;
  }
});

console.log("didAllMatchCondition:", didNotAllMatchCondition);

//Practical example 1: Course modules
const modules1 = [
  { name: "Introduction to Programming", isComplete: true },
  { name: "HTML", isComplete: true },
  { name: "CSS", isComplete: false },
  { name: "JavaScript", isComplete: true },
];

const isCourseFinished = modules1.every((currentModule) => {
  return currentModule.isComplete === true;
});

console.log(isCourseFinished);
