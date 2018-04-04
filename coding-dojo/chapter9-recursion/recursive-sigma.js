// Write a recursive function that given a number returns sum of integers from 1 to that number. 
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

var rSigma = function(num) {
  if (num == 1) {
    return 1;
  }
  return rSigma(num -1) + num;
};

var num = 5;
console.log(rSigma(num));
