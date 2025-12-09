function pairElement(str) {
    let res = [];
    for (let char of str) {
      switch (char) {
      case "A":
        res.push([char, "T"]);
        break;
      case "T":
        res.push([char, "A"]);
        break;
      case "C":
        res.push([char, "G"]);
        break;
      case "G":
        res.push([char, "C"]);
        break;
      }
    }
  
    return res;
  }