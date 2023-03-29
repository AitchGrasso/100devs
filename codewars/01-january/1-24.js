// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    for(let i = 0; i < str.length; i++){
      let letter = str[i]
      if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        count++
      }
  }
    return count;
}

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time / 2)
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let sum = 0
  for (let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0
    arr.forEach(element => {
      if(element > 0){
      sum += element}
      })
    return sum
  }