console.log();
// 2.
console.clear();

console.warn();
console.error();
console.table();

// 1

console.log("Hello i am here");

const name = "Hesh";

console.log(name);

const responseDataOne = [
  {
    name: "hesham",
    age: "30",
  },
  {
    name: "Emil",
    age: "29",
  },
];

const responseDataTwo = [
  {
    name: "hesham",
    age: "30",
  },
  {
    name: "Emil",
    age: "29",
  },
];

console.log("responseDataOne: ", responseDataOne);
console.log("responseDataTwo: ", responseDataTwo);

console.log(1 + 2);

const totalSum = 1 + 2;

console.log("my " + "name " + "is " + totalSum + " Hesham");

console.log(`my name is Hesham ${totalSum}`);

// console.clear();
// console.table();

console.log(responseDataOne);
console.table(responseDataOne);

//
// let city = "Cairo";
//
// console.log("City: ", city);
//
// city = "Oslo";
// console.log("City: ", city);
//

console.time(); // This starts the timer
console.timeEnd(); // This ends the timer

function counter() {
  for (let i = 1; i <= 3; i++) {
    console.log(i);
  }
}

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");

// to the average of these number

let average = (2 + 4 + 7) / 3;
console.log(average);

// 1.

function sum(num1, num2) {
  return num1 + num2;
}

let number1 = 10;
console.log(number1);
let number2 = 20;
console.log(number2);

let total = sum(number1, number2);

console.log("total: ", total);

// Hey could you create a function which calculate the average of
// given 3 numbers (params)
// please name this function getAverage()

function getAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let myAverage = getAverage(2, 4, 5);
console.log("myAverage: ", myAverage);

const myArray = [1, 3, 4, 5];
//
// create a function which gets the average of the numbers in this array

function getArrAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const numberOfItemInArr = arr.length;
  return total / numberOfItemInArr;
}

const resultAverage = getArrAverage(myArray);

console.log("resultAverage: ", resultAverage);

// when you make an API call
//
// https://catfact.ninja/fact

function getCatFacts() {
  fetch("https://catfact.ninja/facts")
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      console.log(jsonResponse.data);
      console.log(jsonResponse.links);
    })
    .catch((error) => {
      //TODO handle error
    });
}

getCatFacts();

async function getCatyFacts() {
  const response = await fetch("https://catfact.ninja/facts");
  console.log("response: ", response);
  const catFacts = await response.json();
  console.log(catFacts);
  console.log(catFacts.data);
  return catFacts;
}

getCatyFacts().then((r) => {});

function counterTwo() {
  for (let i = 1; i <= 3; i++) {
    console.log(i === 2);
  }
}

counterTwo();
