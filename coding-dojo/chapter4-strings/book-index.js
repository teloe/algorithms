/*
 * Martin is writing his opus: a book of algorithm challenges, set as lyrics to
 * a suite of a cappella fugues. Some of ‘those fugueing challenges’ are less
 * popular than others, so he needs an index. Given a sorted array of pages
 * where a term appears, produce an index string. Consecutive pages should form
 * ranges separated by a hyphen. For [1,13,14,15,37,38,70] , return string "1,
 * 13-15, 37-38, 70" . Take care to get all the commas and spaces correct:
 * Martin is palpably particular (practically persnickety!) about patchy
 * punctuation.
 */

var bookIndex = function(arr) {
  var ind = 0;
      strArr= [];
      range = [];
  while(ind < arr.length) {
    if (arr[ind + 1] != arr[ind]) {
      if (range.length == 0) {
        strArr.push(arr[ind]);
      } else {
        strArr.push(range[0]+ "-" + range[range.length -1]);
        range = [];
      }
    } else {
      range.push(arr[ind]);
      range.push(arr[ind + 1]);
    }
    ind++;
  }
  return strArr.join(", ");
};

var arr1 = [1,13,14,15,37,38,70];
console.log(bookIndex(arr1));
