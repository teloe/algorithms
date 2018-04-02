/*
Remove array duplicates. Do not alter original. 
Return new array with results ‘stable’ (original order). 
For [1,2,1,3,4,2] return [1,2,3,4] .
*/ 

function removeDuplicates(arr) {
  var newArr = [];
      duplicate = false;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == newArr[j]) {
        duplicate = true;
        break;
      }
    }
    if (duplicate == false) {
      newArr.push(arr[i]);
    }
    duplicate = false;
  }
  return newArr;
}

var array1 = [1, 2, 1, 3, 4, 2];
console.log(removeDuplicates(array1)); // [1, 2, 3, 4]




