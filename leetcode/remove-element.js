// Given an array and a value, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
  var i = 0;
  var j = nums.length-1;
  while(i <= j){
    if(nums[i] === val){
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
  } else {
      i++;
    }
  }
  return i;
};

removeElement([3, 2, 2, 3], 3); // returns length 2