// Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature" , return "erutaerc" . Tempting as it seems, do not use the built-in reverse()!

var str = "string";

function stringReverse(str) {
  var a = str.split('');
  var i = 0;
  var j = a.length - 1;
  while (i < j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;  
  }
  var newStr = a.join();
  console.log(newStr);
}

stringReverse(str);

