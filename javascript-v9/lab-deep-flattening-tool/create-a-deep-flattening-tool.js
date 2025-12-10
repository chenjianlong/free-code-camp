function steamrollArray(arr) {
    let res = [];
    for (let i of arr) {
      if (Array.isArray(i)) {
        res.push(...steamrollArray(i));
      } else {
        res.push(i);
      }
    }
  
    return res;
  }