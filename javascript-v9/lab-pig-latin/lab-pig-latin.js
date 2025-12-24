function translatePigLatin(str) {
    const regex = /[aeiou]/g;
    const consonantIdx = str.search(regex);
    if (consonantIdx === -1) {
      return str + "ay";
    } else if (consonantIdx === 0) {
      return str + "way";
    }
  
    return str.substring(consonantIdx) + str.substring(0, consonantIdx) + "ay";
  }