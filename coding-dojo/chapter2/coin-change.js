// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. 
// Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Example output, given (94):

// 94 cents can be represented by:
// quarters:3
// dimes:1
// nickels:1
// pennies:4 


var cents = 90;

var coinChange = function(cents) {
  var quarters = 0,
      dimes = 0,
      nickels = 0,
      pennies = 0,
      remainder;
  
  // quarters
  if (cents >= 25) {
    quarters = Math.floor(cents / 25); // 3
    remainder = cents - quarters * 25;
  } else if (cents == 25) {
    console.log(quarters + 1);
  }
  // dimes
  if (remainder >= 10) {
    dimes = Math.floor(remainder / 10); // 1
    remainder = remainder - dimes * 10; //5
  } else if (cents == 10) {
    console.log(dimes + 1);
  }
  // nickels
  if (remainder >= 5) {
    nickels = Math.floor(remainder / 5);
    remainder = remainder - nickels * 5;
  } else if (cents == 5) {
    console.log(nickels + 1);
  }
  // pennies
  if (remainder < 5) {
    pennies += remainder;
  }
  console.log(quarters, dimes, nickels, pennies);
};

coinChange(cents);