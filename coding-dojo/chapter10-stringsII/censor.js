/*
 * Create a function that, given string and array of ‘naughty words’, returns
 * new string with naughty words changed to “x” chars. Given ("Snap crackle pop
 * nincompoop!", ["crack", "poop"]), you should return "Snap xxxxxle pop
 * nincomxxxx!""])
 */

function censor(str, arr) {
  var newStr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    var substr = arr[i]; 
    if (str.indexOf(substr)) {
      console.log(newStr);
      newStr.push('x');
    } 
  }
  return newStr;
}

var str = "Snap crackle pop nincompoop!", arr = ["crack", "poop"];
console.log(censor(str, arr)); // "Snap xxxxxle pop nincomxxxx!"
