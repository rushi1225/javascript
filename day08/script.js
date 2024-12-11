//DOM
// 1)using id
const selectedH1ById = document.getElementById("my-h1");
console.log(selectedH1ById);

// 2)using class
const paraUsingClass = document.getElementsByClassName("my-para");
console.log(paraUsingClass[1]);

// 3) using tag
const selectUsingTag = document.getElementsByTagName("li");
console.log(selectUsingTag[0]);

// 4) using query selectors

// li - single query selector
const selectSingleLi = document.querySelector("li");
console.log(selectSingleLi);

// multiple query selector
const selectMultipleLi = document.querySelectorAll("li");
console.log(selectMultipleLi);
