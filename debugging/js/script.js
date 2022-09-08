// //1

// console.log("hello");

// const name = "lisa";
// console.log(name);

// const responseDataOne = [
//   {
//     name: "lisa",
//     age: "32",
//   },
//   {
//     name: "Mia",
//     age: "40",
//   },
// ];

// const responseDataTwo = [
//   {
//     name: "lisa",
//     age: "32",
//   },
//   {
//     name: "Mia",
//     age: "40",
//   },
// ];

// console.log("nr One:", responseDataOne);
// console.log("nr Two:", responseDataTwo);

// console.log(1 + 2);
// const sum = 1 + 2;
// console.log("hei " + "på " + sum + " deg");
// console.log(`hei på deg ${sum}`);

// // 2
// // console.clear();

// // 3
// console.table(responseDataOne);
// console.log(responseDataOne);
// //så kan man sammenligne

// 4
// console.time(); //starts timer
// console.end(); //end timer

// function counter() {
//   for (let i = 0; i <= 1000; i++) {
//     console.log(i);
//   }
// }

// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");

// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");

// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");

// function sum(num1, num2) {
//   return num1 + num2;
// }

// let number1 = 10;
// console.log(number1);

// let number2 = 20;
// console.log(number2);

// let total = sum(number1, number2);
// console.log("total:", total);

// function getAverage(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }

// let myAverege = getAverage(2, 5, 5);
// console.log("myAverege", myAverege);

// const myArray = [1, 3, 4, 5];

// function getArrAverege(arr) {
//   var total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   console.log("total", total);
//   const numberOfItemsInArr = arr.length;
//   console.log("numberOfItemsInArr", numberOfItemsInArr);
//   let average = total / numberOfItemsInArr;
//   return average;
// }

// const resultOfAverege = getArrAverege(myArray);
// console.log("resultOfAverege", resultOfAverege);

// async function getCattyFacts() {
//   const response = await fetch("https://catfact.ninja/facts");
//   console.log(response);
//   const catFacts = await response.json();
//   console.log(catFacts);
//   console.log(catFacts.data);
//   return catFacts;
// }

// getCattyFacts();
