function findElement(arr, fn) {
    for (let n of arr) {
      if (fn(n)) {
        return n;
      }
    }
  
    return undefined;
  }