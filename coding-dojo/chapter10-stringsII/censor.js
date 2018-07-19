/*
 * Create a function that, given string and array of ‘naughty words’, returns
 * new string with naughty words changed to “x” chars. Given ("Snap crackle pop
 * nincompoop!", ["crack", "poop"]), you should return "Snap xxxxxle pop
 * nincomxxxx!""])
 */


var str = "Snap crackle pop nincompoop!"; 
arr = ["crack", "poop"];

var newStr = [];

// if (str.indexOf(arr[0]) > -1) {
//   console.log("yes");
// }


/*
 * 1. loop through arr
 * 2. compare using indexOf
 * 3. push 'x' of arr[i].length into newStr
 */


function badWords(str, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) > -1) {
      newStr.push('x' * arr[i].length);
    }
  }
  console.log(newStr);
}

badWords(str, arr);
 













