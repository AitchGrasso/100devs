//  a and b are floats? 
//    result will be the sum of a and b into binary
//  1 + 1 = 2, 2/2= 10 in binary
//  2 / 2 = 1 time + remainder(0) 
//  1 / 2 = 0 times + remainder(1) 
//   result = "10" starts from bottom up
  
//   1 + 2 = 3
//   3 / 2 = 1 times + 1 remainder
//   1 / 2 = 0 times + 1 remainder
//   result should be 11
  
//   add a and b, take sum, loop mod 2, turnary to add 0 or 1 depending on remainder?
    
function addBinary(a, b) {
  var sum = a + b;
  var result = "";

  while (sum > 0) {
    result = (sum % 2 === 0 ? "0" : "1") + result;
    sum = Math.floor(sum / 2);
  }

  return result;
}