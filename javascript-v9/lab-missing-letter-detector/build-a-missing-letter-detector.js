function fearNotLetter(str) {
    let lastInt = str.charCodeAt(0);
    for (let i = 1; i < str.length; ++i) {
      let curInt = str.charCodeAt(i);
      if (curInt !== lastInt + 1) {
        return String.fromCharCode(lastInt + 1);
      }
  
      lastInt = curInt;
    }
  
    return undefined;
  }