function mutation(ar) {
    const first = ar[0].toLowerCase();
    const second = ar[1].toLowerCase();
    for (let char of second) {
      if (!first.includes(char)) {
        return false;
      }
    }
  
    return true;
  }