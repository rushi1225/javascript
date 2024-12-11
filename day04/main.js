//ternary oprator
//if else condition

if (10 > 8) {
  console.log("its true");
} else {
  console.log("its false");
}

// if else if

// check if person is allow marry or not
// male age=21
// female age=18

gender = "male";
age = 20;

if (gender === "male" && age >= 21) {
  console.log("this person can marry");
} else if (gender === "female" && age >= 18) {
  console.log("this female can marry");
} else {
  console.log("you cannot marry");
}

// day -1 monday
// day2 = "tuesday";
// day3 = "wednesday";
// day4 = "";
// day5 = "";
// day6 = "";
// day7 = "";
// if else if

const day = 8;

if (day === 1) {
  console.log("monday");
} else if (day === 2) {
  console.log("tuesday");
} else if (day === 3) {
  console.log("wednesday");
} else if (day === 4) {
  console.log("thrusday");
} else if (day === 5) {
  console.log("friday");
} else if (day === 6) {
  console.log("saturday");
} else if (day === 7) {
  console.log("sunday");
} else {
  console.log("only 1-7 days ");
}

// switch case-------------
//
//

const days = 1;

switch (days) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("thuesday");
    break;
  case 3:
    console.log("wenesday");
    break;
  case 4:
    console.log("thrusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid value");
}

// admin student and hacker

const role = "admin"; //student hacker

switch (role) {
  case "admin":
    console.log("you can upload video ");
    break;
  case "student":
    console.log("you can  see video");
    break;
  default:
    console.log("sorry you cannot access");
}

// varcha example if else madhe
const roles = "admin";
if (roles === "admin") {
  console.log("you can upload");
} else if (roles === "student") {
  console.log("you see video");
} else {
  console.log("you are block");
}
