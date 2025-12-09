function sumFibs(num) {
    let sum = 1;
    let last = 1;
    for (let i = 1; i <= num; [i, last] = [i + last, i]) {
      if (i % 2 === 1) {
        sum += i;
      }
    }
  
    return sum;
  }