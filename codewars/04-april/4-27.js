function createPhoneNumber(numbers){
    //   Parameters: an array of strings, each element is a number, will never have: letter, other object, more or less than 10 int. 
    // R: return: like a US phone number, no country code, like (012) 345-6789
    // E: example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
    // P: psuedocode: make a for loop. <= 9 times, 
      var phoneNum = ""
      for(let i = 0; i <= 9; i++){
        
        console.log(phoneNum)
        
        if ([i] == 0){ //if 
          phoneNum = "(" + numbers[0] 
        }else if(i == 2){
          phoneNum = phoneNum + numbers[2] + ")" + " "
        }else if(i == 5){
          phoneNum = phoneNum + numbers[5] + "-"
        }else{
          phoneNum = phoneNum + numbers[i]
        }
      }
      return phoneNum
    }