// Given an array with multiple values, write a function that replaces each value in the array 
// with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

var a = [1, 2, 3, 4];

var squares = function(a) {
  for (var i = 0; i < a.length; i++) {
    a[i] *= a[i];
  }
  return a;
};

squares(a);