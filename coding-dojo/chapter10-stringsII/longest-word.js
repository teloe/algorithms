/*
 * Create a function that, given a string of words, returns the longest word.
 * Example: "Snap crackle pop makes the world go round!", return "crackle".
 */

var longestWord = function(str) {
  var a = str.split(' ');
  var longWord = a[0];
  for (var i = 0; i < a.length; i++) {
    if (a[i].length > longWord.length) {
      longWord = a[i];
    }
  }
  return longWord;
};

var str = "Snap crackle pop makes the world go round!";
console.log(longestWord(str)); // "crackle"
