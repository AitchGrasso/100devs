/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = []
    for (let i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            answer.push("FizzBuzz")
        }else if(i % 3 == 0){
            answer.push("Fizz")
        }else if(i % 5 == 0){
            answer.push("Buzz")
        }else{
            answer.push(String(i))
        }
    }
    return answer
};

//Input: n = 15
//Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
