// NAME:
// KYU:
// INSTRUCTION:
// STATUS:
// ISSUE:

// NAME: Find the smallest integer in the array
// KYU: 8
// INSTRUCTION:
// STATUS: DONE
// ISSUE:


function findSmallestInt(args){
    let smallestInt = args[0];
    
    for (let i = 0; i < args.length; i++) {
        if (args[i] < smallestInt) {
        smallestInt = args[i];
      }
          
    }
    return smallestInt
}
    

// NAME:Remove First and Last Character
// KYU: 8
// INSTRUCTION:
// STATUS:DONE
// ISSUE:

function removeChar(str){
    return str.slice(1,-1)
};

// NAME:String repeat
// KYU: 8
// INSTRUCTION:
// STATUS:DONE
// ISSUE:

function repeatStr (n, s) {
    var string = ""
    for (let i = 0; i < n; i++){
      string += s
    }
    return string
}

// NAME:Remove String Spaces
// KYU: 8
// INSTRUCTION:
// STATUS:DONE
// ISSUE:


function noSpace(x) {
    return x.replaceAll(' ', '');
  }
