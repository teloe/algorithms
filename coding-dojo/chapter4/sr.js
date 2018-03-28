// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature" , return "erutaerc" .

var str = "hello";

function stringReverse(str) {
  var arr = str.split('');
  var reverseArr = arr.reverse();
  var join = reverseArr.join();
  console.log(join);
}

stringReverse(str);
