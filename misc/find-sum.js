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
