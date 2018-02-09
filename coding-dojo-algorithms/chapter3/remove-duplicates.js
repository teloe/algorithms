// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.

var arr = [1, 1, 2, 3];

var removeDuplicates = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      
    }
  }
  console.log(arr);
};

removeDuplicates(arr); // returns [1, 2, 3]
