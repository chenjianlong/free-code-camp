function isPrime(num) {
    for (let i = 2; i <= num / 2; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function sumPrimes(num) {
    if (num < 2) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    return sum;
  }