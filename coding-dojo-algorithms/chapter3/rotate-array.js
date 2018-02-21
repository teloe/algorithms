// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr ’s values to th e right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, s o that no data is lost. 
// Operate in-place: given ([1,2,3],1) , change the array to [3,1,2]. Don’ t use built-in functions

var a = [1, 2, 3, 4, 5], val = 1;

function rotateArr(a, val) {
  var runner;
  for (var i = 0; i < a.length; i++) {
    // shift by val
    if (val === 0) {
      return a;
    } else if (val >= 1) {
      a[i] = a;
    }
  }
  console.log(a);
}

rotateArr(a, val); // output should be [5, 1, 2, 3, 4]