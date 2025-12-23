function myReplace(str, word, toReplace) {
  if (/[a-z]/.test(word[0])) {
    toReplace = toReplace[0].toLowerCase() + toReplace.substring(1);
  } else if (/[A-Z]/.test(word[0])) {
    toReplace = toReplace[0].toUpperCase() + toReplace.substring(1);
  }

  return str.replaceAll(word, toReplace);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));