function longWord(str) {

    let words = str.split(" ");
    // console.log(words);
    let longestWord = "";
    
    for(let word of words) {
        // console.log(word);
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;

}

console.log(longWord("There is longest word"));