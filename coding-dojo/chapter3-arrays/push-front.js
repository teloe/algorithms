// Given array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.

var a = [1, 2, 3];
var n = 7;

var pushFront = function(a, n) {
  a.push(n);
  var temp  = a[0];
  a[0] = a[a.length - 1];
  a[a.length - 1] = temp;
  console.log(a);
};

pushFront(a, n);