// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

var a = [-2, -3, 1, 5];

var numToString = function(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      a[i] = 'Dojo';
    }
  }
  return a;
};

numToString(a); // returns [ 'Dojo', 'Dojo', 1, 5 ]