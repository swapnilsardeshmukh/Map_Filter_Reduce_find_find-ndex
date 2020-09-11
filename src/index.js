import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

/* function double(x){

  return x*2;
} */

/* const newNumbers = numbers.map(double);
console.log(newNumbers); */

const amap = numbers.map(function (x) {
  return x * 2;
});
console.log(amap);

//Filter - Create a new array by keeping the items that return true.

var numbers1 = [6, 112, 4, 96, 10];

const fmap = numbers1.filter(function (x) {
  return x > 21;
});
console.log(fmap);

//Reduce - Accumulate a value by doing something to each item in an array.
var numbers2 = [6, 112, 4, 96, 10];

const rmap = numbers2.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(rmap);

//Find - find the first item that matches from an array.

const fimap = numbers2.find(function (num) {
  return num > 10;
});

console.log(fimap);
//FindIndex - find the index of the first item that matches.

const findexmap = numbers2.findIndex(function (num) {
  return num > 10;
});

console.log(findexmap);

/////////////////////////////////////////////

const array1 = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});
console.log(array1);
