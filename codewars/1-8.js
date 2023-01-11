//return a negative
function makeNegative(num) {
    if (num > 0){
        return -num
    }else{
        return num
    }
}

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0){
      return "Even"
    }else{
      return "Odd"
    }
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool == true){
      return 'Yes'
    }else{
      return 'No'
    }
}

//a better solution:

function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

//or 
const boolToWord = bool => bool ? 'Yes' : 'No';

