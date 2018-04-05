/*
 * Given an array and a value, return the indices of the values whose sum total
 * is equal to the value.
 */

function fSum(arr, val) {
  var low = 0;
      next = 1;
      high = arr.length -1;
      newArr = [];
  while (low < high) {
    if (arr[low] + arr[next] == val) {
      newArr.push(low, next);
      return newArr;
    } else {
      low++;
      next++;
    }
  }
  return;
}

var arr1 = [1, 1, 6], val1 = 2;
console.log(fSum(arr1, val1)); // [0, 1]

var arr2 = [1, 2, 3, 4], val2 = 5;
console.log(fSum(arr2, val2)); // [1, 2]

var arr3 = [2, 3, 1, 6, 9, 4], val3 = 13;
console.log(fSum(arr3, val3)); // [4, 5]
