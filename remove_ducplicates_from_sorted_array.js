// var removeDuplicates = function(arr) {
//   var count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i+1]) {
//       arr.splice(1,1)
//       count += 1;
//     }
//   }
//   return count;
// };

// console.log(removeDuplicates([1,1,2,3]));


var removeDuplicates = function(nums) {
    var count = 0;
    
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[count]) {
            count++;
            nums[count] = nums[i];
        }
    }
    return count + 1;
};

console.log(removeDuplicates([1,1,2,2,3]));