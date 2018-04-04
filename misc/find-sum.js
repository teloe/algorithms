/*
Given an array and a total, return the indices of the values whose sum equals the total. 
Example [1, 1, 4], val = 2, return [0, 1]. 
*/

function findSum(arr, t) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length - 1; j > 0; j--) {
      if (i == j) {
        break;
      }
      if (arr[i] + arr[j] == t) {
        newArr.push(i, j);
        return newArr;
      }
    }
  }
  return;
}

var arr1 = [1, 2, 3, 4, 5], t1 = 8;
console.log(findSum(arr1, t1)); // [2, 4]

var arr2 = [1, 1, 4], t2 = 2;
console.log(findSum(arr2, t2)); // [0, 1]
