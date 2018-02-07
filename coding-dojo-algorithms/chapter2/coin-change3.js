var amount = 75;

function getChange (amount) {
    if (amount > 25) {
      var numQuarters = Math.floor(amount / 25);
      amount = amount - (numQuarters * 25);
    }
    if (amount > 10) {
      var numDimes = Math.floor(amount / 10);
      amount = amount - (numDimes * 10);
    }
    if (amount > 5) {
    var numNickels = Math.floor(amount / 5);
    amount = amount - (numNickels * 5);
    }
    if (amount > 1) {
    var numPennies = Math.floor(amount / 1);
    amount -= numPennies;
    }
    return (numQuarters, numDimes, numNickels, numPennies);
  } 

  console.log(getChange(amount));