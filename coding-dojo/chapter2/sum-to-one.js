// Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. 
// Return that one-digit result. Example: sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1 .


var n = 928;

var sumToOne = function(n) {
  var sum = 0;
      n = n.toString();
      n = n.split('');
  for (var i = 0; i < n.length; i++) {
    var newNum = sum += +n[i];
  }
  sum = 0;
  newNum = newNum.toString();
  newNum = newNum.split('');
  for (var j = 0; j < newNum.length; j++) {
    var newerNum = sum += +newNum[j];
  }
  sum = 0;
  newerNum = newerNum.toString();
  newerNum = newerNum.split('');
  for (var x = 0; x < newerNum.length; x++) {
    var newerNum = sum += +newerNum[x];
  }
  console.log(newerNum);
};

sumToOne(n);