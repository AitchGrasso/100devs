//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takesArray(array){
    let product = 1
    array.forEach(element => {
        product *= element
    });
alert(product)
}

takesArray([5,3,7,8])