// Additional assignments for Day 5
// import { randomNumber } from "./Functions.js";
/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) 
 and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
console.log("EXERCISE 1 \n");
// function checkArray(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       sum = sum + arr[i]`sum of bigger than 5 numbers ${sum}`;
//     } else {
//       `number is less then 5 ${arr[i]}`;
//     }
//   }
//   return sum;
// }
// let randomNumber2 = checkArray(randomNumber);
// console.log(randomNumber2, "\n");

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of 
 these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

console.log("EXERCISE 2 \n");
let shoppingCart = [
  { price: 600, name: "iPhone", id: "23456", quantity: 1 },
  { price: 500, name: "Laptop", id: "23a56", quantity: 2 },
  { price: 20, name: "Keyboard", id: "2ab56", quantity: 2 },
  { price: 100, name: "Ring", id: "hj356", quantity: 1 },
];
cost = 0;
function shoppingCartTotal(arr) {
  for (i = 0; i < arr.length; i++) {
    cost = cost + arr[i].price * arr[i].quantity;
  }
  return cost;
}
console.log(shoppingCartTotal(shoppingCart), "\n");

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these 
 objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to 
 shoppingCart and returns the total number of items in the shoppingCart.
*/

console.log("EXERCISE 3 \n");
function addToShoppingCart(arr) {
  arr.push(newObjet);
  return arr.length;
}
let newObjet = { price: 200, name: "Headphone", id: "kj356", quantity: 1 };
console.log(addToShoppingCart(shoppingCart), "\n");

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these 
 objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the 
 shoppingCart array and returns the most expensive item in it.
*/

console.log("EXERCISE 4 \n");
function maxShoppingCart(arr) {
  let expensiveItem = 0;
  let item;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].price > expensiveItem) {
      expensiveItem = arr[i].price;
      item = arr[i];
    }
  }
  return item;
}
console.log(maxShoppingCart(shoppingCart), "\n");
/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. 
 Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which 
 receives the shoppingCart array and returns the last item.
*/

console.log("EXERCISE 5 \n");
function latestShoppingCart(arr) {
  for (i = 0; i < arr.length; i++) {
    let item = arr[i];
    let indexOfItem = arr.indexOf(item);
    if (indexOfItem == arr.length - 1) {
      return item;
    }
  }
}
console.log(latestShoppingCart(shoppingCart), "\n");
/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number 
 between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

console.log("EXERCISE 1 \n");

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

console.log("EXERCISE 1 \n");

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

console.log("EXERCISE 1 \n");

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

console.log("EXERCISE 1 \n");

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log("EXERCISE 1 \n");

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
