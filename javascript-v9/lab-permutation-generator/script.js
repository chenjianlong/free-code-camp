const permuteString = (s, p = "", res = []) => {
    if (s.length === 0) {
      res.push(p);
      return res;
    }
  
    for (let i = 0; i < s.length; ++i) {
      permuteString(s.substring(0, i)+s.substring(i + 1), p + s[i], res);
    }
  
    return Array.from(new Set(res));;
  }