function XO(str) {
//     Parameters: string, what other cases should I be testing for? Only x and o? no. case sensative? yes. 
//     Returns: returns a bool (comparrison)
//     Eexamples: zpzpzpp, is true bc both are 0, zzoo false bc 0x, 2o
//     Psuedo code: str to lowwer for loop, length of string, if statement for x and os
    var test = str.toLowerCase(str)
    var x = 0
    var o = 0
    for (let i = 0; i < test.length; i++){
      if (test[i] == 'x'){
        x++
      }if (test[i] == 'o'){
        o++
      }
    }
  
  return x === o
    
}