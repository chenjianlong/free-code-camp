const inventory = [];

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; ++i) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  product.name = product.name.toLowerCase();
  const idx = findProductIndex(product.name);
  if (idx !== -1) {
    inventory[idx].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  name = name.toLowerCase();
  const idx = findProductIndex(name);
  if (idx === -1) {
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[idx];
  if (product.quantity < quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantity;
  console.log(`Remaining ${name} pieces: ${product.quantity}`);
  if (product.quantity === 0) {
    inventory.splice(idx, 1);
  }
}