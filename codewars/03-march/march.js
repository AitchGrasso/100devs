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

// DATE: 3/3
// NAME: Isograms
// KYU: 7
// INSTRUCTION: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// STATUS: complete! 
// ISSUE: using .sort

function isIsogram(str){
  //str > ignore case > to array > sort? loop to find > bool
  str = str.toLowerCase()
  let array = str.split("").sort();
  for (let i = 0; i < array.length; i++){
    if (array[i] == array[i + 1]){
      return false
    }
  }
  return true
}

// DATE: 3-6
// NAME: Disemvowel Trolls
// KYU: 7
// INSTRUCTION: Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
// STATUS: COMPLETE
// ISSUE: change || to &&

function disemvowel(str) {
  //take a string
  //loop through string (keep case in mind)
  let answer = ""
  for (let i = 0; i < str.length; i++){
      //if statement to catch vowels, only need one if
    if(str[i] !== 'a' && str[i] !== 'A' && str[i] !== 'e' && str[i] !== 'E' && str[i] !== 'i' && str[i] !== 'I' && str[i] !== 'o' && str[i] !== 'O' && str[i] !== 'u' && str[i] !== 'U'){
      answer += str[i]
    }else{
      continue
    }
  }
  return answer
  //if statement to catch vowels, only need one if
  //end of function will be returnbing the string
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//BEST PRACTICE: 
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//https://javascript.info/object

let user = {
  name: 'John',
  surname: 'Smith'
}

user.name = Pete;
delete user.name;

//check for emptiness: 
function isEmpty(obj){
  if (key in obj == undefined){
    return true
  }
}

// DATE: 3/7
// NAME: List Filtering
// KYU: 7
// INSTRUCTION: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// STATUS: COMPLETE
// ISSUE: using Filter

function filter_list(l) {  
    function isNum(ele) {
      for (let i = 0; 1 > i; i++) {
        if (typeof ele !== 'number') {
          return false;
        }
      }
      return ele <= Infinity;
      }
  
  return(l.filter(isNum))
}

//Better solution: 
function filter_list(l) {
  return l.filter(v => typeof v == "number")
 }

// DATE: 3/13
// NAME: Complementary DNA
// KYU: 7
// INSTRUCTION: c>g, A,T
// STATUS: COMPLETE
// ISSUE:

function DNAStrand(dna){
  let newDNA = ""
  for (let i = 0; i <= dna.length; i++){
    if (dna[i] == "A"){
      newDNA = newDNA + "T"
    }if(dna[i] == "T"){
      newDNA = newDNA + "A"
    }if (dna[i] == "C"){
      newDNA = newDNA + "G"
    }if (dna[i] == "G"){
      newDNA = newDNA + "C"
    }
  }
  return newDNA
}

// Best Practice:
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// DATE: 3/14
// NAME: Find the middle element
// KYU: 7
// INSTRUCTION: As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// STATUS: COMPLETE
// ISSUE:

// DATE: 3/15
// NAME: Highest and Lowest
// KYU: 7
// INSTRUCTION: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// STATUS: COMPLETE
// ISSUE:

function highAndLow(numbers){ 
  let arrayNum = (numbers.split(" "))
  let numNum = arrayNum.map(ele => Number(ele))
  numNum = numNum.sort(function(a,b) {
    return a - b})
  
  return (numNum[numNum.length - 1] + " " +  numNum[0])
}

//again but better:

function highAndLow(numbers){ 
  let arrayNum = (numbers.split(" ")).map(ele => Number(ele)).sort(function(a,b) {return a - b})
  return (arrayNum[arrayNum.length - 1 ] + " " + arrayNum[0])
}

// DATE: 3/15
// NAME: Find the odd int
// KYU: 6
// INSTRUCTION: Given an array of integers, find the one that appears an odd number of times.There will always be only one integer that appears an odd number of times.
// STATUS: Completed
// ISSUE:

function findOdd(A) {
  for (let i = 0; i < A.length; i++){
    let aNum = A.filter(ele => ele === A[i])
    if (aNum.length % 2 !== 0){
      return A[i]
    }
  }
}

var isSquare = function(n){
  return false; // fix me
}

// DATE: 3/24
// NAME: Descending Order
// KYU: 7
// INSTRUCTION: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// STATUS: COMPLETE
// ISSUE: difficulty with .split

//   p - n = non-negative int aka 0 <= n, (q: how many numbers can be in a string?)
//   r - return digits in decending order, if there are more than one of the same, order does not matter
//   e - 129807 -> 012789, 
//   p - Parse into array, sort (a,b){ a-b}?, back to string, and then number

function descendingOrder(n){
  return Number(Array.from(String(n), Number ).sort((a,b) =>{ return b - a }).join(""))
}

//best answer:
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}