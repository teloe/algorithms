/*
 Assume that you have a text field that is exactly 75 characters long. 
 You want to fill it with spaces and asterisks ( '*' ), sometimes called stars. 
 You should print the given number of asterisks consecutively. 
 Depending on which function is called, those stars should be left-justified 
 (first star would be very first char in the text field), or right-justified 
 (last star would be very last char in the text field, with potentially some number of 
 spaces at beginning of text field before the block of stars start), 
 or centered in the 75-character text field (with same number of spaces on either side of the block of stars, 
 plus/minus one).

** Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

** Write a function drawRightStars(num) that prints 75 characters total. 
Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.

** Write function drawCenteredStars(num) that prints 75 characters total. 
The stars should be centered in the 75. 
The middle num characters should be asterisks; the rest of the 75 spaces.
*/


var drawLeftStars = function(n) {
  var str = "";
  var star = '*';
  var spaces = '_';
  if (n == 0) {
    console.log('there are no stars!');
  } else {
    str += star.repeat(n);
    str += spaces.repeat(75 - n);
  }
  console.log(str);
};

drawLeftStars(5);


var drawRightStars = function(n) {
  var str = "";
      star = '*';
      space = '_';
  str += space.repeat(75 - n);
  str += star.repeat(n);
  console.log(str);
};

drawRightStars(2);


var drawCenteredStars = function(n) {
  var str = '';
      star = '*';
      space = '_';
  if (n == 0) {
    console.log('there are no stars!');
  } else if (n == 1){
    str += space.repeat(37); 
    str += star.repeat(n);
    str += space.repeat(37);
    console.log(str);
  } else {
    // more than one star scenario
    // console.log(str);
  }
};

drawCenteredStars(1);
