/*
 * This function borrows ideas from the Fibonacci series, but the calculated
 * results appear to zig and zag, hence the name. A so-called ‘Zibonacci’ series
 * would be defined by the following rules:
 *
 * 1) Zib(0) == 1 ;
 *
 * 2) Zib(1) == 1 ;
 *
 * 3) Zib(2) == 2 ; 4) Zib(2n+1) == Zib(n)+Zib(n-1)+1 , if n > 0 (i.e. odd
 * values 3 and higher) ; 5) Zib(2n) == Zib(n)+Zib(n+1)+1 , if n > 1 (i.e. even
 * values 4 and higher) .
 *
 * Create the Zibonacci(num) function. What is Zibonacci(10) ? Zibonacci(100) ?
 */

var Zib = function(num) {
  if (num == 0) {
    return 1;
  }
  if (num == 1) {
    return 1;
  }
  if (num == 2) {
    return 2;
  }
  if (num % 2 !== 0) {
    var n = (num - 1) / 2;
    return Zib(n) + Zib(n - 1) + 1;
  }
  if (num % 2 == 0) {
    var x = num / 2;
    return Zib(x) + Zib(x + 1) + 1;
  }
};

var num1 = 2;
console.log(Zib(num1)); // 2

var num2 = 10;
console.log(Zib(num2)); // 15 

var num3 = 100;
console.log(Zib(num3)); // 128
