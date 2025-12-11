function getIndexToIns(arr, num) {
    let idx = arr.sort((a, b) => a - b).findIndex(n => n >= num);
    return idx >= 0 ? idx : arr.length;
  }