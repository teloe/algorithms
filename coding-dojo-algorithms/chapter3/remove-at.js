// Given array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop() . 
// Think of popFront(arr) as equivalent to removeAt(arr,0) .

var a = [1, 2, 3, 4, 5, 6];
    i = 2;

var remove = function(a, i) {
  var temp = a[i];
  a[i] = a[a.length - 1];
  a[a.length - 1] = temp;
  a.pop();
};

remove(a, i);