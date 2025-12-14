const btns = document.querySelectorAll(".favorite-icon");

function toggleButton(btn) {
  const filled = btn.classList.contains("filled");
  if (filled) {
    btn.classList.remove("filled");
    btn.innerHTML = "&#9825";
  } else {
    btn.classList.add("filled");
    btn.innerHTML = "&#10084;"
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", () => toggleButton(btn));
});