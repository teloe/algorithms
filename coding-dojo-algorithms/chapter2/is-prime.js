// Return whether a given integer is prime. 
// Prime numbers are only evenly divisible by themselves and 1.


/* jshint esversion: 6 */

let n = 37;

function isPrime(n) {
  for(var i = 2; i < n; i++) {
    if(n % i === 0) {
      return false;
    }
  }
    return n > 1;
}

console.log(isPrime(n));