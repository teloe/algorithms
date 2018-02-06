// Create threesFives() that adds values from 100 and 4000000 (inclusive) 
// if that value is evenly divisible by 3 or 5 but not both . Display the final sum in the console.

var threesAndFives = function(){
  var sum = 0;
  for (var i = 100; i <= 4000000; i++) {
    if ( i % 3 == 0 || i % 5 == 0) {
      console.log(sum += i);
    }
  }
};

threesAndFives();