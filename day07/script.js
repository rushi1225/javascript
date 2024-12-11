function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5));

//write a function which will take a num array as input and will return sum of its element

const arr = [1, 4, 10, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);






