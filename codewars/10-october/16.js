function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    const directions = { 'n': 0, 's': 0, 'w': 0, 'e': 0 };
  
    for (let direction of walk) {
      directions[direction]++;
    }
  
    return directions['n'] === directions['s'] && directions['w'] === directions['e'];
  }