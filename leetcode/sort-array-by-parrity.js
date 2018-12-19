'use strict';

/**
 * LeetCode - Sort Array By Parity
 * https://leetcode.com/problems/sort-array-by-parity/
 * 
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, 
 * followed by all the odd elements of A.
 */

var sortArrayByParity = function(a) {
  let newArr = [], i;
  for (i of a) {
    i % 2 === 0 ? newArr.unshift(i) : newArr.push(i);
  }
  return newArr;
}

console.log(sortArrayByParity([3, 1, 2, 4])); // [4, 2, 3, 1]