// *Variables*
// Declare a variable, assign it a boolean, and alert the value

const variable = true
alert(variable)

// Declare a variable, reassign it to your favorite color, and console log the value

const favColor()

favColor = 'blue'
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function takesFour (num1, num2, num3, num4){
    return((num1+num2+num3)/num4)
}

takesFour(1,2,3,4)
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function takeTwo(num1,num2){
console.log(num1^num2)}

takeTwo(1,2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function boolString(bool, string){
    let bool ? alert(string) : console.log(string)
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function number(num1){
    for(let i; i <= num1; i++){
        if(i % 3 === 0 && i % 5){
            console.log('FizzBuzz')
        }else if(num1 % 3 === 0){
            console.log('fizz')

        }else if(num1 % 5 === 0){
            console.log('buzz')
        }else{
            console.log(i)
    }
}
}