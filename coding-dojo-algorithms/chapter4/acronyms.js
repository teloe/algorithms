// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!" , return "LFNYISN".

var str = "Live from New York, its Saturday Night!";

function acronym(str) {
  var a = str.split(" ");
  var newA = [];
  for (var i = 0; i < a.length; i++) {
    var word = a[i];
    var firstChar = word.substr(0, 1);
    newA.push(firstChar);
  }
  
  var letters = newA.join();
  return letters; 
}

acronym(str);