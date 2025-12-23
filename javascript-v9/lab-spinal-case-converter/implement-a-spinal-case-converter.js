function spinalCase(s) {
  const re = /([a-z])([A-Z])/g;
  return s.replace(re, "$1 $2").toLowerCase().replaceAll(/ |_/g, "-");
}