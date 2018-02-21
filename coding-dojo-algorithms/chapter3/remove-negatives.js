// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array 
// (not a copy).


var a = [-1, -2, 1, 2];

function removeNegatives(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      var temp = a[i];
      a[i] = a[a.length -1];
      a[a.length-1] = temp;
      a.pop();
    }
  }
  console.log(a);
}

removeNegatives(a);