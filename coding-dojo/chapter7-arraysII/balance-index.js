/*
Here, a balance point is on an index, not between indices.
Return the balance index where sums are equal on either side (exclude its own value).
Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1. 
*/

function balIndex(a) {
  var sum = a[0];
  for (var i = 1; i < a.length; i++) {
    sum += a[i];
  }
  var sumLeft = 0;
  for (var j = 0; j < a.length; j++) {
    sum -= a[j];
    if (sumLeft == sum) {
      return j;
    }
    sumLeft += a[j];
  }
  return -1;
}

console.log(balIndex([-2, 5, 7, 0, 3]));

