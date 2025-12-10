function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Function to calculate the Least Common Multiple (LCM) using the GCD
  function lcm(a, b) {
    // Handle cases where one or both numbers are zero
    if (a === 0 || b === 0) {
      return 0;
    }
    return Math.abs(a * b) / gcd(a, b);
  }
  
  function smallestCommons(range) {
    let [m, n] = range;
    if (m > n) {
      [m, n] = [n, m];
    }
  
    let res = m;
    for (let i = m + 1; i <= n; ++i) {
      res = lcm(res, i);
    }
  
    return res;
  }