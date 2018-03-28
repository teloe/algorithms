// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0" , the function should return the number 1357924680

var txt = "0s1a3y5w7h9a2t4?6!8?0";
var numb = txt.match(/\d/g);
numb = numb.join("");
console.log(numb);

