function frankenSplice(arr1, arr2, idx) {
    let res = [...arr2];
    res.splice(idx, 0, ...arr1);
    return res;
  }