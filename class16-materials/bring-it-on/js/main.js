// *Variables*
// Create a variable and console log the value

let variable

console.log(variable)

// Create a variable, add 10 to it, and alert the value

let newVariable

newVariable = newVariable + 10

alert(newVariable)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(a){
    let numSubFour = a - 4
    alert(numSubFour)
}

// Create a function that divides one number by another and returns the remainder

function divideAndReturn(numOne, numTwo){
    let modTime = numOne % numTwo
    return modTime
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addJumanji(numOne, numTwo){
    
    if ((numOne + numTwo) > 50){
        alert('Jumunji')
    }
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree(numOne, numTwo, numThree){
    for (let i = (numOne*numTwo*numThree); i <= 0; i - 3){
        if(i = 0){
            alert('zebra')
        }else{
            alert('not zebra')
        }
    }
}

multiThree(5,5,5)


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordLoop(string, number){
    for(let i = 0; i = number; i++)
        console.log(string)
}

wordLoop('fart', 7)