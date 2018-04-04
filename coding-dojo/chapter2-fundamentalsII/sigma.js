// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). 
// Ex.: sigma(3) = 6 (or 1 + 2 + 3 ); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5 ).

var sigma = function(n) {
  var sum = 0;
  while (n > 0) {
    sum += n;
    n--;    
  }
  return sum;
};

sigma();