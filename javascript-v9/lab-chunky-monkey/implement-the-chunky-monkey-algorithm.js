function chunkArrayInGroups(ar, num) {
    let res = [];
    while (ar.length > 0) {
      res.push(ar.splice(0, num))
    }
  
    return res;
  }