// Given array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop() . 
// Think of popFront(arr) as equivalent to removeAt(arr,0) .

var a = [1, 2, 3, 4, 5, 6];
var i = a[1];
var j = a[a.length - 1];

var remove = function(a, i) {
  // console.log(j);
  if (i !== j) {
    var temp = i;
    i = j;
    console.log(a);
  }
  console.log(a);
};

remove(a, i);