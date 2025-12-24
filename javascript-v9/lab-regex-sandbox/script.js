const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let ret = "";
  if (caseInsensitiveFlag.checked) {
    ret += "i";
  }

  if (globalFlag.checked) {
    ret += "g";
  }

  return ret;
}

testButton.addEventListener("click", function () {
  var matched;
  var flags = getFlags();
  var regex = new RegExp(regexPattern.value, flags);
  if (flags.includes(globalFlag)) {
    stringToTest.innerHTML = stringToTest.innerText.replaceAll(regex, '<span class="highlight">$&</span>');
    matched = stringToTest.innerText.matchAll(regex);
  } else {
    stringToTest.innerHTML = stringToTest.innerText.replace(regex, '<span class="highlight">$&</span>');
    matched = stringToTest.innerText.match(regex);
  }
  testResult.innerText = matched ? matched.join(", ") : 'no match';
});