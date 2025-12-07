function repeatStringNumTimes(str, repeatTimes) {
    if (repeatTimes <= 0) {
      return "";
    }
  
    let res = "";
    for (let i = 0; i < repeatTimes; ++i) {
      res += str;
    }
  
    return res;
  }