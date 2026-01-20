const addTogether = (...numbers) => {
    if (typeof numbers[0] != "number") {
      return undefined;
    }
  
    if (numbers.length === 1) {
      return function(n) {
        if (typeof n != "number") {
          return undefined;
        }
  
        return numbers[0] + n;
      }
    }
  
    if (typeof numbers[1] != "number") {
      return undefined;
    }
  
    return numbers[0] + numbers[1];
  }