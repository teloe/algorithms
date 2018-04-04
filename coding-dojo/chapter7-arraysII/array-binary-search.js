/*
Given a sorted array and a value, return whether the array contains that value. 
Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage 
of the fact that the array is sorted . As always, only use built-in functions that you 
are prepared to recreate (write yourself) on demand!
*/

function binarySearch(arr, val) {
  var center = Math.floor(arr.length/ 2);
  if (arr.length === 1) {
    return arr[0] === val;
  }
  if (val >= arr[center]) {
    return binarySearch(arr.slice(center), val);
  }
  if (val < arr[center]) {
    return binarySearch(arr.slice(0, center), val);
  }
  return false;
}

var arr = [1, 2, 3, 4];
    val = 2;
console.log(binarySearch(arr, val));
