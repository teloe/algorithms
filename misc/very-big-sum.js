/*
 * Calculate and print the sum of the elements in an array, keeping in mind that
 * some of those integers may be quite large.
 */

var sum = function(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

var a = [1, 30890098098, 132049857519, 0193428575];
console.log(sum(a));
