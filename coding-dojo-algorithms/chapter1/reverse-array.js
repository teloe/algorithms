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

