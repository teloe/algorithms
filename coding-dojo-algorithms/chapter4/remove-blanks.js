// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c " , return "PlayThatFunkyMusic".

function removeBlanks(str) {
  var arr = str.split('');
  var empty = ' ';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === empty) {
      arr.splice(i, 1);
    }
  }
  var newString = arr.join('');
  console.log(newString);
}

removeBlanks("B l a h Bl a h");