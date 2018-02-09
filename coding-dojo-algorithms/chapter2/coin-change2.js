var total = 90;

var coinChange = function(total) {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  var remainder;
  
  // quarters
  if (total >= 25) {
    quarters = Math.floor(total / 25); // 3
    remainder = total - quarters * 25;
  } else if (total == 25) {
    console.log(quarters + 1);
  }

  // dimes
  if (remainder >= 10) {
    dimes = Math.floor(remainder / 10); // 1
    remainder = remainder - dimes * 10; //5
  } else if (total == 10) {
    console.log(dimes + 1);
  }
  
  // nickels
  if (remainder >= 5) {
    nickels = Math.floor(remainder / 5);
    remainder = remainder - nickels * 5;
  } else if (total == 5) {
    console.log(nickels + 1);
  }

  // pennies
  if (remainder < 5) {
    pennies += remainder;
  }
  
  console.log(quarters, dimes, nickels, pennies);
};

coinChange(total);