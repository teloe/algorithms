// Given array, write a function to reverse values, in-place. 
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]

function reverseArray(a) {
  var i = 0;
  var j = a.length -1;
  while (i < j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;
  }
  return a;
}

reverseArray([]);


function reverse (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp; 
  }
  return arr;
}
console.log(reverse([1,2,3,4,5,6]));

