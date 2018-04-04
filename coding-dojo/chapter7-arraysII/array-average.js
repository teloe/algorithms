// Return the average value of an array of unsorted numbers

function arrAvg(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(sum/ a.length);
}

arrAvg([2, 1, 3]);
