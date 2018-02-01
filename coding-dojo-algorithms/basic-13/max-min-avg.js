// Given an array with multiple values, write a function that returns a new array that only 
// contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

var a = [1, 2, 3, 24];

var maxMinAvg = function(a) {
  var newArr = [];
      max = a[0];
      min = a[0];
      sum = 0;
  for (var i = 0; i < a.length; i++) {
    if (max < a[i]) {
      max = a[i];
    }
    if (min > a[i]) {
      min = a[i];
    }
    sum += a[i];
  }
  var avg = sum / a.length;
  newArr.push(max, min, avg);
  return newArr;
};

maxMinAvg(a);