const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () => Array.from(
  { length: 5 },
  () => generateElement()
);

const generateContainer = () => document.createElement("div");

const fillArrContainer = (div, arr) => {
  arr.forEach((n) => div.innerHTML += `<span>${n}</span>`);
}

const isOrdered = (l, r) => l <= r;

const swapElements = (arr, idx) => {
  if (isOrdered(arr[idx], arr[idx+1])) {
    return false;
  }

  [arr[idx], arr[idx+1]] = [arr[idx+1], arr[idx]];
  return true;
}

const highlightCurrentEls = (el, idx) => {
  el.children[idx].style.borderStyle = "dashed";
  el.children[idx].style.borderColor = "red";
  el.children[idx+1].style.borderStyle = "dashed";
  el.children[idx+1].style.borderColor = "red";
}

const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

let arrToSort = [];

generateBtn.addEventListener("click", () => {
  [...arrayContainer.children].slice(1).forEach(el => el.remove());
  startingArray.innerHTML = '';
  arrToSort = generateArray();
  fillArrContainer(startingArray, arrToSort);
  sortBtn.hidden = false;
});

const sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", () => {
  let first = true;
  while (true) {
    let counter = 0;
    for (let i = 0; i < arrToSort.length - 1; ++i) {
      if (first) {
        highlightCurrentEls(startingArray, i);
        first = false;
      } else {
        const div = generateContainer();
        fillArrContainer(div, arrToSort);
        highlightCurrentEls(div, i);
        arrayContainer.appendChild(div);
      }

      if (swapElements(arrToSort, i)) {
        counter++;
      }
    }

    if (counter === 0) {
      break;
    }
  }

  const div = generateContainer();
  fillArrContainer(div, arrToSort);
  div.style.border = "4px solid green";
  arrayContainer.appendChild(div);
  sortBtn.hidden = true;
});

sortBtn.hidden = true;