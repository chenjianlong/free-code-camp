const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  const val = textInput.value.replaceAll(/\W|_/g, "").toLowerCase();
  let first = 0;
  let last = val.length - 1;
  let isPalindrome = true;
  while (first < last) {
    if (val[first] !== val[last]) {
      isPalindrome = false;
      break;
    }

    ++first;
    --last;
  }

  result.innerHTML = isPalindrome ?
  `<p class="user-input"><strong>${textInput.value}</strong> is a palindrome</p>` :
  `<p class="user-input"><strong>${textInput.value}</strong> is not a palindrome</p>`;
  result.classList.remove("hidden");
});