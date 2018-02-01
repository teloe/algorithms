// Create a function that takes array of numbers. 
// The function should print the lowest value in the array, and return the highest value in the array.

var printLowReturnHigh = function(a) {
  var low = a[0];
      high = a[0];
  if (a.length == 0) {
    console.log('the array is empty!');
  } else if (a.length == 1) {
    console.log('there is only one element!');
  } else {
    for (var i = 0; i < a.length; i++) {
      if (high < a[i]) {
        high = a[i];
      }
    }
  }
  console.log(low);
  return high;
};