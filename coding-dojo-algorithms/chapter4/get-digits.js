// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0" , the function should return the number 1357924680

function getDigits(str) {
  var arr = [], x = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      arr.push(arr[i]);
    }
  }
  console.log(arr);
}

getDigits("a1b2c3");