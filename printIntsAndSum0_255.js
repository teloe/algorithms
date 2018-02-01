// Print Ints and Sum 0-255
// Print integers from 0 to 255

function printIntsAndSum0To255() {
  var arr = [];
  var sum = 0;
  for (var i = 0; i < 256; i++) {
    i += sum;
    arr.push(i + sum);
  }
  console.log(arr);
}

printIntsAndSum0To255();
