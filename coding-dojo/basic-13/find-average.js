// Given an array with multiple values, write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)

var arr = [1, 2, 3, 4];

var findAverage = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

findAverage(arr);

