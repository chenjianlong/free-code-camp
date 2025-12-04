const confirmEnding = (s1, s2) => {
    if (s1.length < s2.length) {
      return false;
    }
  
    const sub = s1.slice(-s2.length);
    return sub === s2;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Connor", "n"));
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  console.log(confirmEnding("He has to give me a new name", "name"));
  console.log(confirmEnding("Open sesame", "same"));
  console.log(confirmEnding("Open sesame", "sage"));
  console.log(confirmEnding("Open sesame", "game"));
  console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));
  console.log(confirmEnding("Abstraction", "action"));