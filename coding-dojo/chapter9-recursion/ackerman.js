/*
The Ackermann function is among the earliest examples of a computable but not primitive-recursive function. 
It grows rapidly, and hence can overflow the JavaScript stack frame even at very low values. 
This function accepts two non-negative integer values, num1 and num2 , and follows these rules:

1) ackermann(0,num2) == num2+1 ;

2) ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);

3) ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)) . 
 */

function ackerman(num1, num2) {
  if (num1 == 0) {
    return num2 + 1;
  }
  if (num2 == 0) {
    return ackerman(num1 - 1,  1);
  }
  return ackerman(num - 1, ackerman(num1 - num2 - 1));
}


