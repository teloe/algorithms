/*
Given an array with multiple values, write a function that replaces any negative numbers within the
array with the value of 0. When the program is done the array should contain no negative values. 
(e.g. [1,5,10,-2] will become [1,5,10,0])
*/

var a = [-1, -2, -3];

function negatives(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      a[i] = 0;
    }
  }
  console.log(a);
}

negatives(a);