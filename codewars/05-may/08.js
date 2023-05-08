// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.


const binaryArrayToNumber = arr => {
    //   arr is an array, elements are either a one or a 0, arrays arent limited to length of 4,
    //     result is one number. 
    //     example: [0, 0, 0, 1 (2^0)] ==> 1 orTesting: [1(2^3 = 8), 1(2^2 = 4), 1 (2^1 = 2), 1(2^0 = 1)] ==> 15
    //   psuedo: var to hold sum, take the array, flip array, loop, if 1: add 2 power of i to sum, return sum
    
      var sum = 0.0
      var newArr = arr.reverse()
      
      for(let i = 0; i <= newArr.length; i++){
        if (newArr[i] === 1){
          sum = sum + Math.pow(2, i)
        }
      }
      
      return sum
      
    };