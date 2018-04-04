/*
Write a function that returns whether the given array has a 
balance point between indices, where one side’s sum is equal to the other’s. 
Example: [1,2,3,4,10] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .
*/

function balPoint(a) {
  var sum = a[0];
  for (var i = 1; i < a.length; i++) {
    sum += a[i];
  }
  var leftSum = 0;
  for (var j = 0; j < a.length; j++) {
    sum -= a[j];
    leftSum += a[j];
    if (leftSum == sum) {
      return true;
    }
  }
  return false;
}

console.log(balPoint([1, 2, 3, 4, 10]));
