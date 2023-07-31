// 1768. Merge Strings Alternately
// Easy
// 2.6K
// 45
// Companies
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // 2 params: 2 strings.
    // a single string og the joined works 'interlocked', join the rest of the characters if lengths are differant. 
    // split both words into arrays. A while loop will be used to pop each char at index i starting with word1 every time. The while loop will only run for the longest length of word 1 or 2. If one array runs out of elements, this could throw an error. should retur .pop("") if this is the case
    let wordOne = word1.split("")
    let wordTwo = word2.split("")

    //check length of both and store higher

    let maxLength = 0
    var resultant = []

    if (wordOne.length > wordTwo.length){
        maxLength += wordOne.length
    }else{
        maxLength =+ wordTwo.length
    }

   for (let i = 0; i <= maxLength; i++){
        resultant.push(wordOne[i])
        resultant.push(wordTwo[i])
    }

    return resultant.join("")
};