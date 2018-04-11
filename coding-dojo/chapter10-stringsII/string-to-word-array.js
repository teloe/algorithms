/*
 * Given a string of words (with spaces, tabs and linefeeds), return an array
 * of words. Given "Life is not a drill!" return ["Life", "is" "not", "a",
 * "drill!"].
 */

var stringToWordArr = function(str) {
  var a = str.split(' ');
  return a;
};

var str1 = "Life is not a drill!";
console.log(stringToWordArr(str1)); // ["Life", "is", "not", "a", "drill!"];

var str2 = "Hello World!";
console.log(stringToWordArr(str2)); // ["Hello", "World!"]
