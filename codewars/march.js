// DATE:
// NAME:
// KYU:
// INSTRUCTION:
// STATUS:
// ISSUE:


// DATE: 1
// NAME: Get the Middle Character
// KYU: 7
// INSTRUCTION: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// STATUS: complete!
// ISSUE: One possible reason for the issue you are encountering could be due to the version of JavaScript you are using. The array index is expected to be an integer, but in some versions of JavaScript, the array index can be a float. If the JavaScript version you are using allows float array index, then the expression (s.length / 2) will result in a float value, and the array access will fail, resulting in undefined.

function getMiddle(s)
{
  if (s.length % 2 == 0){ //even
    return(s[Math.floor((s.length / 2) -1 )] + s[Math.floor((s.length / 2))])  //length = 10, return 5 &6, length = 4, return 2 & 3, lake s.length /  
  }else{ //odd
    return( s[ Math.floor(s.length / 2) ] )
  }
}

console.log(getMiddle('testing'))

