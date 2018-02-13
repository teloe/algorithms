// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. 
// Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

/* jshint esversion: 6 */

let a = [2, 3, 1, 4, 5, 6]; // need to return [1, 2, 3, 4, 5, 6]

let minToFront = (a) => {
  let min = a[0];
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (min > a[i]) {
      min = a[i];
    } 
  }
  newArr.push(min);
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== min) {
      newArr.push(a[j]);
    }
  }
  return newArr;
};

console.log(minToFront(a));