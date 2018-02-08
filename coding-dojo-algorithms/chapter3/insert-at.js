// Given array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

var a = [1, 2, 3]; 
    index = 0; 
    val = 7;

var insertAt = function(a, index, val){
  a.push(val);
  var temp = a[index];
  a[index] = a[a.length - 1];
  a[a.length - 1] = temp;
  console.log(a);
};

insertAt(a, index, val);