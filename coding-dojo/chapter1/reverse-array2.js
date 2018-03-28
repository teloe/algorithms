// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]

var arr = [1, 2, 3, 4, 5];


function reverse(arr) {
  for ( var i = 0; i < arr.length - 1 - i; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

reverse(arr);