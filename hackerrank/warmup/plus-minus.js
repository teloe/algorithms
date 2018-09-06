function plusMinus(arr) {
  var p = 0;
  var z = 0;
  var n = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // increment p
      p += 1;
    } else if (arr[i] == 0) {
      // increment z
      z += 1;
    } else {
      // increment n
      n += 1;
    }
  }
  return p/arr.length, z/arr.length, n/arr.length;
}

var arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr));

