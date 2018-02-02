// Write a function factorial(num) that, given a number, returns the product (multiplication) of 
// all positive integers from 1 up to number (inclusive). 
// For example, factorial(3) = 6 (or 1 * 2 * 3 ); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5 ).

var factorial = function(n) {
  var product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  console.log(product);
};

factorial(3);