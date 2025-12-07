const lunches = [];

const addLunchToEnd = (arr, s) => {
  arr.push(s);
  console.log(`${s} added to the end of the lunch menu.`);
  return arr
}

const addLunchToStart = (arr, s) => {
  arr.unshift(s);
  console.log(`${s} added to the start of the lunch menu.`);
  return arr
}

const removeLastLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(`${arr.pop()} removed from the end of the lunch menu.`);
  }
  
  return arr;
}

const removeFirstLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(`${arr.shift()} removed from the start of the lunch menu.`);
  }
  
  return arr;
}

const getRandomLunch = arr => {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIdx = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIdx]}`);
  }
}

const showLunchMenu = arr => {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(', ')}`);
  }
}