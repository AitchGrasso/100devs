// DATE: 3-29
// NAME: Detect Pangram
// KYU: 6kyu
// INSTRUCTION: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// STATUS: COMPLETED
// ISSUE: 

function isPangram(string){
    var newString = string.toLowerCase().split(" ").join("").split("").sort().join("")
    var alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split("")
    for (let i = 0; i < alphaArray.length; i++){
        if (newString.indexOf(alphaArray[i]) === -1){
          return false
        }
      }
      return true
    }
    
  
  // Params: 'string' of any length, includes spaces, caps, and punctuation.
  // Returns: True or false. 
  // Examples: 'This is not a pangram.' will return false, 'The quick brown fox jumps over the lazy dog.' will return true
  // q: will this have any other punctuation in the string? Will the test cases include any non-alpha char?  
  // Pseudo code:
  // string - > compare to a string of the alphabet
  
  // string > tolowercase (no cap) > split (to array) > .pop (to remove last char, the .) .sort (a-b to put in alph order)
  // Create variable that is abcdefghijklmnopqrstuvwxyz. Compare string to variable in switch statement. 

// Popular Solution:

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }