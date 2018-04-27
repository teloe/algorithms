/*
 * Write a function that accepts as a parameter a string containing someone’s
 * name. Return a string containing the following oh-so-cool greeting: strip off
 * the first letter of the name, capitalize this new word, and add " to the
 * [first letter] !" Given "Dylan" , return "Ylan to the D!""
 */

function getJiggy(str) {
  var arr = str.split('');
  var fLetter = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }
  arr.pop();
  arr = arr.join('');
  return arr.charAt(0).toUpperCase() + arr.slice(1) + " to the " + fLetter + "!";
}

var str = "Tom";
console.log(getJiggy(str)); // "Om to the T!"
