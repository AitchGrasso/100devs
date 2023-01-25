// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favoriteFood = 'mushrooms'
alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

const second = 'google'
alert(second.substring(1,1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function product(one, two, three){
    alert((one / two) * three)
}

product(1,2,3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takeOne(one){
    console.log((one)^3)
}

takeOne(3)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function goodBadMonth(month){
    if(month == 'may' || month == 'june' || month == 'july' || month == 'august'){
        alert('yay')
    }else{
        alert('Booo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function takeNum(num){
    for(let i = 0; i < num; i++){
        if (i % 5 == 0){
        }else{
            console.log(i)
        }
    }
}
