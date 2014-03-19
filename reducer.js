function countWords(words) {
    var wordSet = {};
    words.reduce(function (previousWord, currentWord) {
        if (wordSet[currentWord])
            wordSet[currentWord] = wordSet[currentWord] + 1;
        else
            wordSet[currentWord] = 1;
    }, null);
    return wordSet;
}


//var inputWords = ['Cat', 'Banana', 'Cat', 'Sponge', 'Durian', 'Durian', 'Durian']
//
//console.log(countWords(inputWords))


module.exports = countWords

