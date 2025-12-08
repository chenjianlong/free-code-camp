function largestOfAll(arr) {
    let res = [];
    for (let sub of arr) {
      let max = sub[0];
      for (let i = 1; i < sub.length; ++i) {
        if (sub[i] > max) {
          max = sub[i];
        }
      }
  
      res.push(max);
    }
  
    return res;
  }