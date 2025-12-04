function booWho(val) {
  return typeof val === "boolean";
}

console.log("booWho(true): ", booWho(true));
console.log("booWho(false): ", booWho(false));
console.log("booWho([1, 2, 3]): ", booWho([1, 2, 3]));
console.log("booWho([].slice): ", booWho([].slice));
console.log("booWho({ \"a\": 1 }): ", booWho({ "a": 1 }));
console.log("booWho(1): ", booWho(1));
console.log("booWho(NaN): ", booWho(NaN));
console.log("booWho(\"a\"): ", booWho("a"));
console.log("booWho(\"true\"): ", booWho("true"));
console.log("booWho(\"false\"): ", booWho("false"));