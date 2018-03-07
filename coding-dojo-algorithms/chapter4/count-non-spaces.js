// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy" , return 29 (not 35 ).

var str = "Honey pie, you are driving me crazy";

function nonSpaces(str) {
  var a = str.split("")
  var count = 0;
  var space = " ";
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== space) {
      count++;
    }
  }
  return count;
}

nonSpaces(str);