const form = document.getElementById("form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaints = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.getElementById("complaint-description");
const complaintTextAreaDiv = document.getElementById("complaint-description-container");
const solutionsGroup = document.getElementById("solutions-group");
const solutions = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");
const solutionTextAreaDiv = document.getElementById("solution-description-container");

const messageBox = document.getElementById("message-box");

function isValidEmail() {
  const email = emailInput.value;
  const re = /\w+@\w+\.\w+/;
  return re.test(email);
}

function isValidOrderNo() {
  const orderNo = orderNoInput.value;
  const re = /2024\d{6}/;
  return re.test(orderNo);
}

function isValidProductCode() {
  const productCode = productCodeInput.value;
  const re = /[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}/;
  return re.test(productCode);
}

function isValidComplaints() {
  const complaintsArr = Array.from(complaints).map(function (i) {
    return i.checked;
  });

  return complaintsArr.some(function (i) {
    return i;
  });
}

function isValidOtherComplaint() {
  const complaintsArr = Array.from(complaints).map(function (i) {
    return i.checked;
  });

  if (complaintsArr[3]) {
    complaintTextAreaDiv.style.display = "block";
    const complaintsDescriptionVal = complaintDescription.value.trim();
    if (complaintsDescriptionVal.length < 20) {
      return false;
    } else {
      return true;
    }
  } else {
    complaintTextAreaDiv.style.display = "none";
    return true;
  }
}

function isValidSolutionsGroup() {
  const solutionsArr = Array.from(solutions).map(function (i) {
    return i.checked;
  });

  return solutionsArr.some(function (i) {
      return i;
  });
}

function isValidSolutionDesc() {
  const solutionsArr = Array.from(solutions).map(function (i) {
    return i.checked;
  });

  if (solutionsArr[2]) {
    solutionTextAreaDiv.style.display = "block";
    var solutionDescriptionVal = solutionDescription.value.trim();
    if (solutionDescriptionVal.length < 20) {
      return false;
    } else {
      return true;
    }
  } else {
    solutionTextAreaDiv.style.display = "none";
    return true;
  }
}

function validateForm() {
  const fullNameVal = fullNameInput.value;
  const quantity = quantityInput.value;
  return {
    "full-name": fullNameVal.length !== 0,
    email: isValidEmail(),
    "order-no": isValidOrderNo(),
    "product-code": isValidProductCode(),
    quantity: Number(quantity.trim()) > 0,
    "complaints-group": isValidComplaints(),
    "complaint-description": isValidOtherComplaint(),
    "solutions-group": isValidSolutionsGroup(),
    "solution-description": isValidSolutionDesc(),
  };
}

function isValid(obj) {
  return Object.values(obj).every(function (i) {
    return i;
  });
}

fullNameInput.addEventListener("change", () => {
  const fullNameVal = fullNameInput.value;
  if (fullNameVal.length === 0) {
    fullNameInput.style.borderColor = "red";
  } else {
    fullNameInput.style.borderColor = "green";
  }
});

emailInput.addEventListener("change", () => {
  if (isValidEmail()) {
    emailInput.style.borderColor = "green";
  } else {
    emailInput.style.borderColor = "red";
  }
});

orderNoInput.addEventListener("change", () => {
  if (isValidOrderNo()) {
    orderNoInput.style.borderColor = "green";
  } else {
    orderNoInput.style.borderColor = "red";
  }
});

productCodeInput.addEventListener("change", () => {
  if (isValidProductCode()) {
    productCodeInput.style.borderColor = "green";
  } else {
    productCodeInput.style.borderColor = "red";
  }
});

quantityInput.addEventListener("change", () => {
  const quantity = quantityInput.value;
  if (Number(quantity.trim()) > 0) {
    quantityInput.style.borderColor = "green";
  } else {
    quantityInput.style.borderColor = "red";
  }
});

complaintsGroup.addEventListener("change", () => {
  if (isValidComplaints()) {
    complaintsGroup.style.borderColor = "green";
  } else {
    complaintsGroup.style.borderColor = "red";
  }

  isValidOtherComplaint();
});

complaintDescription.addEventListener("change", () => {
  if (isValidOtherComplaint()) {
    complaintDescription.style.borderColor = "green";
  } else {
    complaintDescription.style.borderColor = "red";
  }
});

solutionsGroup.addEventListener("change", () => {
  if (isValidSolutionsGroup()) {
    solutionsGroup.style.borderColor = "green";
  } else {
    solutionsGroup.style.borderColor = "red";
  }

  isValidSolutionDesc();
});

solutionDescription.addEventListener("change", () => {
  if (isValidSolutionDesc()) {
    solutionDescription.style.borderColor = "green";
  } else {
    solutionDescription.style.borderColor = "red";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = validateForm();
  if (!isValid(obj)) {
    messageBox.innerText = "Please, fill out the required fields correctly before submitting.";
    Object.keys(obj).forEach(function (key) {
      if (!obj[key]) {
        document.getElementById(key).style.borderColor = "red";
      } else {
        document.getElementById(key).style.borderColor = "green";
      }
    });
  } else {
    messageBox.innerText = "";
    alert("Form successfully submitted.");
  }

  return isValid(obj);
});

isValidOtherComplaint();
isValidSolutionDesc();