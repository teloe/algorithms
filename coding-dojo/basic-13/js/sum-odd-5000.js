// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

var sumOddTo5000 = function() {
  var i = 1;
      sum = 0;
  while (i <= 5000) {
    if (i % 2 !== 0) {
      sum += i;
    }
    i++;
  }
  return sum;
};

sumOddTo5000();