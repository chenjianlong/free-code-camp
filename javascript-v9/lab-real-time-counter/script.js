const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.substring(0, 50);
  }

  if (textInput.value.length === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
  charCount.textContent = `Character Count: ${textInput.value.length}/50`
})