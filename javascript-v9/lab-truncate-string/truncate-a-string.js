const truncateString = (s, n) => {
    if (s.length <= n) {
      return s;
    }
  
    return s.slice(0, n) + "...";
  }
  
  let s = "A-tisket a-tasket A green and yellow basket";
  console.log(truncateString(s, 8));
  
  s = "Peter Piper picked a peck of pickled peppers"
  console.log(truncateString(s, 11));
  
  s = "A-tisket a-tasket A green and yellow basket";
  console.log(truncateString(s, s.length));
  console.log(truncateString(s, s.length + 2));
  
  s = "A-";
  console.log(truncateString(s, 1));
  
  s = "Absolutely Longer";
  console.log(truncateString(s, 2));