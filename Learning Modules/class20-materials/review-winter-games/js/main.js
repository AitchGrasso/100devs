//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function everyEven(array){
    let newArray = []
    array.forEach(num => {
        if (num % 2 == 0){
            newArray.push(num)
        }
    });
    alert(newArray)
}

everyEven([1,2,3,4,5,6,7,8])