function pyramid(pattern, rows, downwards) {
    let res = "\n";
    for (let i = 0; i < rows; ++i) {
      let line = "";
      if (downwards) {
        line = " ".repeat(i) + pattern.repeat((rows - i)*2-1) + "\n";
      } else {
        line = " ".repeat(rows - i - 1) + pattern.repeat(2 * i + 1) + "\n";
      }
  
      res += line;
    }
  
    return res;
  }
  
  console.log(pyramid("o", 4, false));
  console.log(pyramid("p", 5, true));