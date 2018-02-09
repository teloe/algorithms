// Given array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().


function popFront(a) {
  var temp = a[0];
  a[0] = a[a.length - 1];
  a[a.length - 1] = temp;
  a.pop();
  console.log(a);
}

popFront([1, 2, 3, 4, 5]);