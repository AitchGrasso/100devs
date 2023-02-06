//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [1,2,3,4]
alert(nums.reduce((acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArray = nums => nums.map( num => num**2)

//implicit return




// function squareMe(array){
//     return array.forEach(element => {
//         new arraynew = Math.pow(element, 2)
//     });
// return arraynew
// }

//Create a function that takes string
//Print the reverse of that string to the console

let unoRevers = st => console.log(str.split('').reverse().join(''))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let palindrome = str => str == str.split('').reverse().join('')