function minMax(arr){
    // P - arr = an array, every ele is a number, the array length is 0 - inf
    // R - an array with two elements, left is lowest, right is highest
    // E - [1,2,3,4,5] --> [1,5] [2,4,5,7] --> [2,7]
    // P - take array(param), sort, store arr[0], append arr[0], pop arr[]
     
      var sorted = (arr.sort((a,b) => a-b))
      var answer = []
      answer.push(sorted[0])
      answer.push(sorted[sorted.length-1])
    
      return answer
    
    }