// changing content

const myH1 = document.getElementById("my-h1");
console.log(myH1);

// 1 st way using innerHTML
myH1.innerHTML = "dom with deepak";

// 2 way using innerText
myH1.innerText = "deepak kalal";

// 3 wat using textContent
myH1.textContent = "hindustani bhau";

//using onclick text change
function changecontent() {
  myH1.innerHTML = "Rushikesh B";
}
//

//add new para in empty paragraph
const para = document.getElementById("para");
console.log(para);

function changepara() {
  para.innerHTML = "hello this is new para";
}

//
//add text using prompt
function addsomeText() {
  const textToadd = prompt("Type a some text");
  myPara2.innerHTML = textToadd;
}




