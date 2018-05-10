/*
 * @param {string[]} words
 * @return {number}
 */

/* jshint esversion 6 */

var uniqueMorseRepresentations = function(words) {
      var mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
      var wtm = new Set();
  for (var v of words) {
            var m = '';
    for (var w of v) {
                  m += mos[w.charCodeAt(0) - 'a'.charCodeAt(0)];
              
    }
            wtm.add(m);
        
  }
      return wtm.size;

};

console.log(uniqueMorseRepresentations());

