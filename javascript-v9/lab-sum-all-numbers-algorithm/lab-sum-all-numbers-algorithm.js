function sumAll(range) {
    let [n, m] = range;
    if (n > m) {
      [n, m] = [m, n];
    }
  
    let sum = 0;
    for (let i = n; i <= m; ++i) {
      sum += i;
    }
  
    return sum;
  }