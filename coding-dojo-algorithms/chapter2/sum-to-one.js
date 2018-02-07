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


var number = 928,
    output = [],
    sNumber = number.toString();


function sumToOne(number){
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
  console.log(sum);
}


sumToOne(number);