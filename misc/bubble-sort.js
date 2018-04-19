function bubbleSort(arr) {
  for (var i = arr.length -1; i >= 0; i--) {
    for (var j = arr.length - i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

var arr1 = [7, 5, 2, 4, 3, 9];
console.log(bubbleSort(arr1));
