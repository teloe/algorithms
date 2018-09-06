function plusMinus(arr) {
  var p = 0, z = 0, n = 0, num = arr.length;
  for (var i = 0; i < num; i++) {
    if (arr[i] > 0) {
      // increment p
      p++;
    } else if (arr[i] == 0) {
      // increment z
      z++;
    } else {
      // increment n
      n++;
    }
  }
  return [p/num, n/num, z/num];
}

var arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr)); // [ 0.5, 0.3333333333333333, 0.16666666666666666 ] 
