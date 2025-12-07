function findLongestWordLength(sentence) {
    const arr = sentence.trim().split(/\s+/);
    console.log(arr);
    let maxWordLength = 0;
    for (const word of arr) {
      if (word.length > maxWordLength) {
        maxWordLength = word.length;
      }
    }
  
    return maxWordLength;
  }