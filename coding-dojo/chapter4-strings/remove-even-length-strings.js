/*
 * Build a standalone function to remove strings of even lengths from a given
 * array. For array containing ["Nope!","Its","Kris","starting","with","K!","
 * (instead","of","Chris","with","C)","."] , change that same array to
 * ["Nope!","Its","Chris","."] ."])"]
 */

var rELS = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

var arr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
console.log(rELS(arr)); // ["Nope!", "Its", "Chris", "."]
