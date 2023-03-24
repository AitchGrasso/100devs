
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.


function range(start, end, step){
    let newArray = []
    if (step > 0){
        for (let i = start; i <= end; i = i + step){
            newArray.push(i)
            console.log(newArray)
    }}else{
        for (let i = start; i <= end; i++){
            newArray.push(i)
            console.log(newArray)
    }}
    return newArray
}

range(5, 10, 2)

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 

function sum(anArray){
    console.log(anArray.reduce((acc, curr) => acc + curr, 0)) 
    
}

sum(range(5,10,2))

//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
function reverseArray(array){
    let reverseMe = []
    for (let i = 0; i < array.length; i++){
        reverseMe.shift(array[i])
    }
    console.log(reverseMe)
}

reverseArray([1,2,3,4,5])

function reverseArrayInPlace(array){
    for (let i = 0; i < array.length; i++){
        array.unshift(array[i])
    }
    console.log(array)
}