/*
 * Given a sorted array and a value, recursively determine whether value is
 * found within array. rBinarySearch([1,3,5,6],4) = false;
 * rBinarySearch([4,5,6,8,12],5) = true.
 */

function rBinarySearch(arr, val) {
  var mid = Math.floor(arr.length / 2);
  if (val == arr[mid]) {
    return true;
  } else if (arr[mid] > val) {
    return rBinarySearch(arr.slice(0, mid), val);
  } else if (arr[mid] < val) {
    return rBinarySearch(arr.slice(mid, arr.length), val);
  } else {
    return false;
  }
}

var arr1 = [1, 3, 5, 6], val1 = 4;
console.log(rBinarySearch(arr1, val1));

var arr2 = [4, 5, 6, 8, 12], val2 = 5;
console.log(rBinarySearch(arr2, val2));
