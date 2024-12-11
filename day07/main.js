// function add7(number) {
//   number = number + 7;
//   console.log(number);
// }

// add7(10);
//
//perimeter of reactangle
function calculatePerimeterOfReactangle(length, breadth) {
  const perimeter = 2 * (length + breadth);
  console.log(perimeter);
}
//
//given two num ,return true if the sum of both num is less than 100 otherwise return false

function isLessThan100(num1, num2) {
  return num1 + num2 <= 100;
}
console.log(isLessThan100(50, 51));

//
//
//
const userName = [];

const names = ["deepak", "punit", "bhau", "salman"];
for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}


console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// adding element
names[4] = "donald";

console.log(names);

// adding in last element
names.push("Rushi");
console.log(names);

//
//delete element
names.pop();
console.log(names);

// to delete first element
names.shift();

//to insert first element
names.unshift();

// find size of element
// names.length();


