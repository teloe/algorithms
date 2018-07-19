// Write a function that would print the sum of all the even numbers from 1 to 1000. 
// You may use a modulus operator for this exercise.

function getEven1000() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

getEven1000();