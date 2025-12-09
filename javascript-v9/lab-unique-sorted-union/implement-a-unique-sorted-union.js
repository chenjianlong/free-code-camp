function uniteUnique(...arr) {
    const res = [];
    const cache = {};
    for (const innerArr of arr) {
      for (const num of innerArr) {
        if (num in cache) {
          continue;
        }
  
        res.push(num);
        cache[num] = 1;
      }
    }
  
    return res;
  }