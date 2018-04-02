// Create a function that, given an array, returns the most frequent value in the array. 

var findMode = function(arr) {
  var mode = [];
  var count = [];
  var num;
  var maxIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxIndex) {
      maxIndex = count[num];
    }
  }
  for (i in count) {
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        mode.push(Number(i));
      }
    }
  }    
 return mode;
};

var testArray = [1, 1, 2, 2, 2, 3];
console.log(findMode(testArray));
