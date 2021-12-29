// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(humanAge, conversionRate) {
  return humanAge * conversionRate;
}
let dogAge = calculateDogAge(2, 7);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/
let maxAge = 100;
let pastAge = 30;

function calculateMoviesToWatch(age, numberOfMovies) {
  let restAge = maxAge - pastAge;
  pastOfTheLifeMovies = numberOfMovies * 4 * 12 * pastAge;
  restOfTheLifeMovies = numberOfMovies * 4 * 12 * restAge;
  let totalMovies = pastOfTheLifeMovies + restOfTheLifeMovies;
  return `past life movies are ${pastOfTheLifeMovies},
  rest of the life movies are ${restOfTheLifeMovies},
  total movies for all life are ${totalMovies}`;
}
calculateMoviesToWatch(30, 1);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsiusTemp) {
  let convertedTemp = (celsiusTemp * 9) / 5 + 32;
  return `${convertedTemp}F is ${celsiusTemp}C`;
}
celsiusToFahrenheit(1);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  let convertedTemp = ((fahrenheit - 32) * 5) / 9;
  return `${convertedTemp}c is ${fahrenheit}f`;
}
fahrenheitToCelsius(33.8);

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(x, n) {
  if (n < 0) {
    return `The number below 1 is not allowed`;
  } else {
    return x ** n;
  }
}
pow(3, 2);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n=0,m=4) {
  if "sum"=
}

sumOrProductOfN(4, "sum"); // 10
sumOrProductOfN(4, "product"); // 24
sumOrProductOfN(4, "hello"); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

let sum = 0;
function sumOfN(n) {
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
sumOfN(5);

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
let i = 1;
let total = 0;
function sum(n) {
  while (i <= n) {
    if (i % 5 === 0 || i % 7 === 0) {
      total = total + i;
    }
    i = i + 1;
  }
  return total;
}
sum(20);

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a, b) {
  if (a > b) {
    return `minimum is ${b}`;
  } else {
    return `minimum is ${a}`;
  }
}
min(5, 7);

// min(0, 10);
// min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(parameter) {
  return typeof parameter;
}
typeCheck("Neeraj");
