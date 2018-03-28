function LongestWord(sen) {
    var l_word;
    sen.split(" ", sen.length);
    for ( var i = 0; i < sen.length; i++) {
        if ( sen[i.length] > sen[i.length + 1]) {
            sen[i.length] = l_word;
        } 
    }
    console.log(l_word); 
}
   
// keep this function call here 
LongestWord("I love dogs.");  