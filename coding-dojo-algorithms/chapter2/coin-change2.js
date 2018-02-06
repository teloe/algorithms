// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents) . 
// Accept a number of American cents, compute and print how to represent that amount with smallest number of coins.
// Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Second: can you simplify/shorten your code?

// Example output, given (94) :

// 94 cents can be represented by:

// quarters:3

// dimes:1 

// nickels:1

// pennies:4

var total = 11;

var coinChange = function(total) {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  
  // quarters
  if (total > 25) {
    quarters = Math.floor(total / 25); // 2
    total -= quarters * 25;
  } else if (total == 25) {
    console.log(quarters + 1);
  } else {

    // dimes
    if (25 > total > 10) {
      dimes = Math.floor(total / 10);
      total -= dimes * 10;
    } else if (total == 10) {
      console.log(dimes + 1);
    } else {
          // nickels
      if (10 > total > 5) {
        nickels = Math.floor(total / 5);
        total -= nickels * 5;
      } else if (total == 5) {
        console.log(nickels + 1);
      }
    }
  }

  // pennies
  if (total < 5) {
    pennies += total;
  }
  
  console.log(quarters, dimes, nickels, pennies);
};

coinChange(total);