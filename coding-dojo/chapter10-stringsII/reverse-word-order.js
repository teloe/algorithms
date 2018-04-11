/*
 * Create a function that, given a string of words (with spaces), returns new
 * string with words in reverse sequence. Given "This is a test" , return "test
 * a is This".
 */

var rWord = function(str) {
  var arr = str.split(' ');
      i = 0;
      j = arr.length - 1;
  while (i < j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  var newStr = arr.join();
  return newStr;
};

var str = "This is a test";
console.log(rWord(str)); // "test a is This"
