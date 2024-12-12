// how to  create & add element using js
// 1)append --->multiple element at a time
// 2)appendchild --> one element at a time

// const parentOl = document.getElementById("my-ol");

// function addLi() {
//   const newLiAdd = document.createElement("li");
//   newLiAdd.innerHTML = prompt("type your fav game");
//   parentOl.append(newLiAdd);
// }

//
//add li using text box my-input

const parentOl = document.getElementById("my-ol");
const input = document.getElementById("my-input");

function addLi() {
  const newLiAdd = document.createElement("li");
  const sport = input.value;
  if (!sport) {
    alert("not valid name");
    return;
  }
  newLiAdd.innerHTML = sport;
  parentOl.append(newLiAdd);

  //clear input box
  input.value = "";
}
