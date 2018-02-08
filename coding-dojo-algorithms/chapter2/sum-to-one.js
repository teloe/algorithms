// Kaitlin sees beauty in numbers, but also believes that less is more.
// Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. 
// Return that one-digit result. Example: sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1 .

/* jshint esversion: 6 */

// let n =  928;
// let arr = n.split('');
// let sum = 0;

// let sumToOne = (n) => {
//   for (var i in arr) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumToOne(n));

// console.log(arr);


// var n = 928,
//     output = [],
//     sum = 0;


// function sumToOne(n){
//   for (var i = 0; i < arr.length; i++) {
//     output.push(+arr.charAt(i));
//   }
//   for (var j = 0; j < output.length; sum += output[j++]);
//   console.log(sum);
//  }

// sumToOne(n);



function sumToOne(n) {
  var arr = [];
  var sum = 0;
  for ( var i = 0; i < n.length; i++) {
    arr.push(n.charAt(i));
  }
  for (var j=0; j < arr.length; j ++) {
    
    var newNum = parseint();
    sum += arr[j];
  }
  console.log(sum);
  // var num = n.split('');

}

sumToOne('928');