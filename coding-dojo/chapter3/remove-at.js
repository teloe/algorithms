// Given array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop() . 
// Think of popFront(arr) as equivalent to removeAt(arr,0) .

var a = [1, 2, 3, 4, 5, 6];
    i = 3;
    j = a.length - 1;

var remove = function(a, i) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  a.pop();
  console.log(a);
};

remove(a, i);