// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.

var a = [1, 1, 1, 1, 1, 2, 2, 3];

var removeDuplicates = function(a) {
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) {
      newArray.push(a[i]);
    }
  }
  console.log(newArray);
};

removeDuplicates(a); // returns [1, 2, 3]
