// *Variables*
// Create a variable and console log the value
let aValue
console.log(aValue) 

// Create a variable, add 10 to it, and alert the value

let addTen =+ 10
alert(addTen)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(x){
    y = x - 4
    alert(y)
}

// Create a function that divides one number by another and returns the remainder
function div(y, x){
    return y / x
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(x ,y){
    if (x + y > 50){
        alert(Jumanji)
    }
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(x,y,z){
    if(x * y * z % 3 == 0){
        alert('ZEBRA')
    }
}


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takeWord(word, num){
    for(let i = 0; i <= num; i++)
    console.log('word')
}
