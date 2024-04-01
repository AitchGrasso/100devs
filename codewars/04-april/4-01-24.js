function nbYear(p0, percent, aug, p) {

    let counter = 0
    let result = p0
      
      for(let i = 0; i < p; i++){
        result = Math.floor(result + result * (percent / 100) + aug)
        counter++
        if(result >= p){
          break
          }
        }
      return counter
      }

      
// top solution

function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }