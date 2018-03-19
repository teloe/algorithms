// You're given strings J representing the types of stones that are jewels, 
// and S representing the stones you have.  Each character in S is a type of 
// stone you have. You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are 
// letters. Letters are case sensitive, so "a" is considered a different type of
// stone from "A".

var numJewelsInStones = function(j, s) {
  var map = {};
  for (var i = 0; i < j.length; i++) {
    map[j[i]] = 1;
  }
  var count = 0;
  for (var x = 0; x < s.length; x++) {
    if (map[s[x]]) {
      count++;
    }  
  }
  console.log(count);
};

numJewelsInStones("aA", "aAAbbbb");

