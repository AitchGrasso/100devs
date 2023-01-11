//Create an array of movie titles. Loop through the array and each element to the h2.

let titles = ['movie1', 'moveie2', 'movie3']

function loop(){
    for (let i = 0 ; i < (titles.length); i++){
        document.querySelector('h2').innerHTML += titles[i]} 
}
//had to add the +=


//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numbers = [1,2,3,4,5]

function loop2(){
    for (let i; i <= (numbers.length + 1); i++){
        numbers[i] = numbers[i] + 3
    }
}


numbers.forEach((items, idx) => {
    number[i] = number[i] + 3 
})

//call anythignyou want, FOREACH WILL GRAB EVERY SINGLE TIME WILL GRAB THE ELEMENT, THE INDEX, AND THEN THE ARRAY

//Find the average of all the numbers from question three

function findAverage(){
    for (let i; i < (numbers.length); i++){
        let sum =+ numbers[i]
    }
    let average = sum / (numbers.length) 
}