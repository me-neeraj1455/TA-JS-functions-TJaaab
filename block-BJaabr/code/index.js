// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}
convertToString(10);

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};
convertToString(10);

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = n => String(n);
convertToString(10);

// - Write an Arrow Function with curly brackets
let convertToString = n => {
  return String(n);
};
convertToString(10);

// - Execute the function
convertToString(10);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(10);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number) {
  return returnValue + number;
}
addOne(1);

// - Write a Function Expression

const addValue = function addOne(number) {
  return returnValue + number;
};
addValue(1);

// - Write an Arrow Function without curly brackets(if possible)

const addValue = number => returnValue + number;
addValue(1);

// - Write an Arrow Function with curly brackets
const addValue = number => {
  return returnValue + number;
};
addValue(1);

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(num) {
  return num - 1;
}
substractOne(50);

// - Write a Function Expression

const subtractNum = function subtractOne(num) {
  return num - 1;
};
subtractNum(100);
// - Write an Arrow Function without curly brackets(if possible)

const subtractNum = num => num - 1;
subtractNum(200);

// - Write an Arrow Function with curly brackets

const subtractNum = num => {
  return num - 1;
};
subtractNum(500);

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB) {
  return numA + numB;
}
sum(20, 30);

// - Write a Function Expression

const addNum = function sum(numA, numB) {
  return numA + numB;
};
addNum(10, 50);

// - Write an Arrow Function without curly brackets(if possible)

const addNum = (numA, numB) => numA + numB;
addNum(100, 200);

// - Write an Arrow Function with curly brackets

const addNum = (numA, numB) => {
  return numA + numB;
};
addNum(400, 500);

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num) {
  return num ** 2;
}
square(5);

// - Write a Function Expression

const makeSquare = function square(num) {
  return num ** 2;
};
makeSquare(8);

// - Write an Arrow Function without curly brackets(if possible)

const makeSquare = num => num ** 2;
makeSquare(9);

// - Write an Arrow Function with curly brackets
const makeSquare = num => {
  return num ** 2;
};
makeSquare(11);
// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGrater(numX, numY) {
  if (numX > numY) {
    return `True`;
  } else {
    return `False`;
  }
}
isGrater(5, 9);

// - Write a Function Expression

const grater = function isGrater(numX, numY) {
  if (numX > numY) {
    return `True`;
  } else {
    return `False`;
  }
};

// - Write an Arrow Function without curly brackets(if possible)

const grater = (numX, numY) => numX > numY;
return `true`;
numX < numY;
return `false`;
grater(100, 200);

// - Write an Arrow Function with curly brackets
const grater = (numX, numY) => {
  if (numX > numY) {
    return `True`;
  } else {
    return `false`;
  }
};
grater(22, 23);
// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  if (num % 2 === 0) {
    return `${num} is  an even number`;
  } else {
    return `${num} is a odd number`;
  }
}
oddOrEven(18);
// - Write an anonymous Function Expression

const findOddEven = function (num) {
  if (num % 2 === 0) {
    return `${num} is an even number`;
  } else {
    return `${num} is an odd number`;
  }
};
findOddEven(19);

// - Write an named Function Expression

const findOddEven = num => {
  if (num % 2 === 0) {
    return `${num}is an even number`;
  } else {
    return `${num}is an number`;
  }
};
findOddEven(36);

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const findOddEven = num =>
  num % 2 === 0 ? `${num} is an even number` : `${num}is an odd number`;
findOddEven(55);

// - Write an Arrow Function with curly brackets
const findOddEven = num => {
  if (num % 2 === 0) {
    return `${num}is an even number`;
  } else {
    return `${num} is an odd number`;
  }
};
findOddEven(44);

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
