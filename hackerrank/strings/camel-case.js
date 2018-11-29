'use strict';

/**
 * Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:
 * It is a concatenation of one or more words consisting of English letters.
 * All letters in the first word are lowercase.
 * For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
 * Given , print the number of words in  on a new line.
 */

function camelcase(s) {
  // In case of empty string
  if (s.length === 0) {
    return 0;
  }
  // All other cases
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}

console.log(camelcase('saveChangesInTheEditor')); // 5