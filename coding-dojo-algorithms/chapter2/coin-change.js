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

// •

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

// var totalCents = 20;

// var coinChange = function(totalCents) {
//   var quarterCount = 0;
//   var dimeCount = 0;
//   var nickelCount = 0;
//   var pennyCount = 0;
//   var remainder = 0;
//   if (totalCents < 25) {
//     console.log(quarterCount);
//   } else {
//     quarterCount = Math.floor(totalCents / 25);
//     remainder = totalCents / 25 - quarterCount;
//   }
//   if (totalCents < 10) {
//     console.log(dimeCount);
//   } else {
//     dimeCount = Math.floor(totalCents / 10);
//     remainder = totalCents / 10 - dimeCount;
//   }
//   if (totalCents < 5) {
//     console.log(dimeCount);
//   } else {
//     nickelCount = Math.floor(totalCents / 5);
//     remainder = totalCents / 5 - nickelCount;
//   }
//   if (totalCents == 1) {
//     console.log(pennyCount);
//   } else {
//     pennyCount = Math.floor(totalCents / 1);
//     remainder = totalCents / 1 - pennyCount;
//   }
//   console.log(quarterCount, dimeCount, nickelCount, pennyCount);
// };

// coinChange(totalCents);


var total = 80;

var coinChange = function(total) {
  console.log("The fewest amount of coins needed to make " + total + " cents is: (quarters, dimes, nickels, pennies)");
  var quarters = 0;
      dimes = 0;
      nickels = 0;
      pennies = 0;
  
  if (total > 25) {
    quarters = Math.floor(total / 25); // 3
    total = total - quarters * 25;
    if (total < 10) {
    console.log(dimes);
  } else if (total == 10) {
    return dimes + 1;
  } else {
    dimes = Math.floor(total / 10);
    total = total - dimes * 10;
  }
  } else if (total == 25) {
    return quarters + 1;
  } else {
    console.log(quarters);
  }
  
  
  
  if (total < 5) {
    console.log(nickels + " nickels and");
  } else if (total == 5) {
    return nickels + 1;
  } else {
    nickels = Math.floor(total / 5);
    total = total - nickels * 5;
  }
  pennies = pennies + total;
  return quarters, dimes, nickels, pennies;
};

coinChange(total);