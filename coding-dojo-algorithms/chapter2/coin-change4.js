var cents = 97;

var coinGenerator = function(cents) {
  var quarters, dimes, nickels, pennies, remainder;

  if (cents >= 25 && cents / 25 !== 0) {
    quarters = Math.floor(cents / 25);
    remainder = cents - quarters * 25;
    console.log(remainder)
    // cents = cents - remainder;
  } else {
    // remainder = cents;
    // console.log(remainder)
    // quarter = 0;
  }
  if (remainder >= 10 && remainder / 10 !== 0) {
    dimes = Math.floor(remainder / 10);
    remainder = remainder - dimes * 10;
    // remainder = remainder - remainder;

    // console.log(cents)
  } else {
    dimes = 0;
  }
  if (remainder >= 5 && remainder / 5 !== 0) {
    nickels = Math.floor(remainder / 5);
    remainder = remainder % 5;
    // remainder = remainder - remainder;
  } else {
    nickels = 0;
  }
  pennies = remainder;
  console.log(quarters, dimes, nickels, pennies);
};

coinGenerator(cents);