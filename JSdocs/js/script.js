/** en funksjon som returnerer "hello world!" **/

const greetings = () => {
  return "hello world";
};

console.log(greetings());

/**
 * Adds two numbers together
 * @ {number} a First Value
 * @ {number} b Second Value
 * @ {number} Sum of params
 * @example
 * ```js
 * // Add two numbers together
 * const a = 1;
 * const b = 2;
 * const sum = addNumbers (a, b);
 * // expect sum to be 3
 * ```
 */

function addNumbers(a, b) {
  return a + b;
}

/**
 *This will greet user by using their user name and id.
 * @param {string} userName this is the users name.
 * @param {number} id this is the users id
 * @returns {string} the greeting message is returned
 * @example
 * ´´´JS
 * // use this function to gree user on page
 * const result = greetUser("Lisa", 10);
 * //Returns a greeting
 * //Hello Lisa, you are 10.
 *
 * ```
 */

function greetUser(userName, id) {
  return `Hello ${userName}, you are ${id}.`;
}

const result = greetUser("Lisa", 10);
console.log(result);

//Lesson task

/**
 * Adds two numbers together
 * @ {number} a First Value
 * @ {number} b Second Value
 * @returns {number} result of params
 * @example
 * ```js
 * // Add two numbers together
 * const a = 1;
 * const b = 2;
 * const result = a + b;
 * returns result
 * // expect sum to be 3
 * ```
 */

function addNumbers(a, b) {
  const result = a + b;
  return result;
}
