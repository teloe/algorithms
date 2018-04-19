var bubbleSort = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

var arr1 = [4, 2, 5, 1];
console.log(bubbleSort(arr1)); // [1, 2, 4, 5]
