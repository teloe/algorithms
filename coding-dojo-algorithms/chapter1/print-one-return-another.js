// Build a function that takes array of numbers. 
// The function should print second-to-last value in the array, and return first odd value in the array.

var printOneReturnAnother = function(a) {
  if (a.length == 0) {
    console.log('the array is empty!');
  } else if (a.length == 1) {
    console.log('there is only one element!');
  } else {
    console.log(a[a.length - 2]);
    for (var i = 0; i < a.length; i++) {
      if (a[i] % 2 !== 0) {
        return a[i];
      }
    }
  }
};

printOneReturnAnother([1,2]);

