/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("EXERCISE 1 \n");
function area(l1, l2) {
  let areaOfRectangle = l1 * l2;
  return areaOfRectangle;
}
let areaRectangle = area(10, 20);
console.log("area of rectangle", areaRectangle);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("EXERCISE 2 \n");
function crazySum(num1, num2) {
  if (num1 === num2) {
    let sumNumber = (num1 + num2) * 3;
    return sumNumber;
  } else {
    let sum = num1 + num2;
    return sum;
  }
}
let sumOfNumber = crazySum(5, 5);
console.log("sum of crazy numbers", sumOfNumber);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("EXERCISE 3 \n");
function crazyDiff(n1) {
  if (n1 <= 19) {
    return 19 - n1;
  } else {
    return (n1 - 19) * 3;
  }
}
let difference = crazyDiff(20);
console.log("difference of numbers ", difference);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("EXERCISE 4 \n");
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
let setBoundary = boundary(10);
console.log(setBoundary, "\n");

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("EXERCISE 5 \n");
function strivify(string) {
  if (typeof string === "string") {
    if (string.startsWith("Strive")) {
      return string;
    } else {
      return "Strive" + " " + string;
    }
  } else {
    return "check your input, please give it correctly";
  }
}
let striveString = strivify("Strive The string");
console.log(striveString, "\n");

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("EXERCISE 6 \n");
function check3and7(number) {
  if (typeof number === "number") {
    if (number % 3 === 0 || number % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "check your input may be it's not number";
  }
}
let checkNumber = check3and7(2);
console.log(checkNumber, "\n");

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("EXERCISE 7 \n");
function reverseString(str) {
  return str.split("").reverse().join("");
}
let checkString = reverseString("Hi how are you");
console.log(checkString, "\n");

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("EXERCISE 8 \n");
function upperFirst(str) {
  let words;
  words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let capitalFirstLetter = words.join(" ");
  return capitalFirstLetter;
}
let capitalizes = upperFirst("hello world how are you");
console.log(capitalizes, "\n");

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("EXERCISE 9 \n");
function cutString(str) {
  let subString = str.substring(1, str.length - 1);
  return subString;
}
let middleString = cutString("hello world how are you");
console.log(middleString, "\n");

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("EXERCISE 10 \n");
function giveMeRandom(n) {
  let numbers = [];
  for (i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  return numbers;
}

let randomNumber = giveMeRandom(5);
console.log(randomNumber, "\n");
export { randomNumber };
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
