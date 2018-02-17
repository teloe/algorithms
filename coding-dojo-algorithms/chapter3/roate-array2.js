// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr ’s values to th e right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, s o that no data is lost. 
// Operate in-place: given ([1,2,3],1) , change the array to [3,1,2].

var array = [1, 2, 3, 4, 5];
var times = 3;

function rotate( array , times ) {
  while( times-- ){
    var temp = array.shift();
    array.push( temp )
  }
  console.log(array);
}

rotate(array, times);