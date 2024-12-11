// loops

// 1)for loop

for (let i = 1; i <= 20; i++) {
  console.log("print 20 times");
}

// print sorry 10 times
for (let a = 1; a <= 10; a++) {
  console.log("sorry");
}

// print num from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// print even no from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// OR
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

//
//
// print all num from 1 to 10 expect 5  (means 5 nhi ala pahije)
// using (continue)

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//
//print no 1 to 100 but finf num which is divisiable by 19 then stop
for (let i = 1; i <= 100; i++) {
  if (i % 19 === 0) {
    break;
  }
  console.log(i);
}

//
//print 1 to 100 which no divide by 11 then skip it
for (let i = 1; i <= 100; i++) {
  if (i % 11 === 0) {
    continue;
  }
  console.log(i);
}

//infinite loops
//this is run automatically

// for (;;) {
//   console.log("hello");
// }






