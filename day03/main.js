// oprators
// oprator will perform some opration

// = (assignment oprator )

const userNmae = "Rushikesh";

// Arithmatic oprator
// +, -, *, /, %

// const sum = 10 + 20;.

const num1 = 10;
const num2 = 40;

const sum = num1 + num2;

const substraction = num1 - num2;

const multiplication = num1 * num2;

const division = num1 / num2;

const module = num1 % num2;

const exponential = 2 ** 53;

console.log(sum);
console.log(substraction);
console.log(multiplication);
console.log(division);
console.log(module);
console.log(exponential);

// comparision oprator
// its return a boolean value true or false

// 1)grether than(>)
console.log(10 > 20);
console.log(100 > 20);

// 2) less than (<)

console.log(10 < 100);
console.log(100 < 20);

// 3) grether than equal to (>=)

console.log(10 >= 100);
console.log(100 >= 10);

// 4) less than equal to (<=)

console.log(10 <= 100);
console.log(100 <= 10);

// Logical oprator

// 1) && AND Oprator

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// 2) || OR Oprator

console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false
console.log(false || true); //true

// 3) ! NOT

console.log(!true); //false
console.log(!false); //true

// 4) & , | , ~
console.log(true & false);
console.log(false & true);

// Equality oprator
// 1) double equal to oprator (==)

console.log(10 == 10); //true
console.log(11 == 10); //false

// 2) Not equal to  (!=)

console.log(10 != 10); //false
console.log(11 != 10); //true

// 3) tripple equal to oprator ===
// strict equality oprator will check data as well as datatype of given oprands

console.log(10 === "10"); //false
console.log(10 !== "11"); //true

// increment(++) and decrement(--) oprator

let num = 10;

// console.log(num++); //10    ++kelyvr next num la value print hohi
console.log(num); //11

console.log(++num); //11  pre la 1 add hoto

console.log(num--);
console.log(--num);

// Ternary oprator

10 > 10
  ? console.log("yes....10 is grether")
  : console.log("No.... 10 is not grether");

10 > 9
  ? console.log("yes....10 is grether")
  : console.log("No.... 10 is not grether");

// compound assignment oprator
let number1 = 30;
number1 += 10;
console.log(number1);



