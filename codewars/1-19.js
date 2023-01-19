
/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

//Initual try: 

// function squareSum(numbers){
//     let sum = 0
//     numbers.forEach(element => sum = sum + (Math.pow(numbers,2)))
//     return sum
                                      
// }

// What was wrong: You are using numbers instead of element in the Math.pow() function. numbers is the entire array, not an individual element from it. So it's trying to square the entire array, which is not a number and hence returning NaN.

//Actual Solution: 

function squareSum(numbers){
    let sum = 0
    numbers.forEach(element => sum = sum + (Math.pow(element,2)))
    return sum
                                      
  }

