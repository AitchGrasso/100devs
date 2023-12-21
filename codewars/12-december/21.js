// return masked string
function maskify(cc) {
    // cc = any amount of char, any type of char
    // cc # but all but last 4 char are replaced with #
    // Split the string. use a method that removes last 4 chars completly. Check remainder of string length. 
    // Make a loop that adds a # to the beginning of snipped number (unshift). Combine array.
      
    let splitem = cc.split("")
    let mask = splitem.slice(0, -4).fill("#").concat(splitem.slice(-4)).join("")
    return(mask)
    
  }