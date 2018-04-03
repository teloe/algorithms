/*
 Given an array and a value, return the indices of the values whose sum equals the value. 
 Example [1, 1, 3], val = 2, return [0, 1]. 
 */

function findSum(arr, val) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length - 1; j > 0; j--) {
      if (i == j) {
        break;
      }
      if (arr[i] + arr[j] == val) {
        newArr.push(i, j);
        return newArr;
      }
    }
  }
  return;
}

var arr1 = [1, 2, 3, 4, 5];
var val1 = 8;
console.log(findSum(arr1, val1));
