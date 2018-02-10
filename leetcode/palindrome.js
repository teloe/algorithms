// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  var y = Math.abs(x).toString().split('').reverse().join('');
  return x == y;
};

isPalindrome();