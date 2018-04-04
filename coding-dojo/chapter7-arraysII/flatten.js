/*
Flatten a given array, eliminating nested & empty arrays. 
Do not alter it; return a new one retaining order. 
For [1,[2,3],4,[]] return [1,2,3,4] .
*/

var arr = [1, [2,3], 4, []];

function flattenArr(arr) {
  var newArr = [];
  while(arr.length) {
    var val = arr.shift();
    if (Array.isArray(val)) {
      arr = val.concat(arr);
    } else {
      newArr.push(val);
    }
  }
  return newArr;
}

console.log(flattenArr(arr)); // [1, 2, 3, 4]
