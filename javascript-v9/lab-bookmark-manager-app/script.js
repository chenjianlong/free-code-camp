const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const categoryName = document.querySelector(".category-name");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const nameEl = document.getElementById("name");
const urlEl = document.getElementById("url");

const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");

const viewCategoryButton = document.getElementById("view-category-button");

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (bookmarks === null || !Array.isArray(bookmarks)) {
      return [];
    }

    const allItemsValid = bookmarks.every(bookmark => {
      return typeof bookmark === 'object' &&
        bookmark !== null &&
        'name' in bookmark &&
        'category' in bookmark &&
        'url' in bookmark;
    });
    if (allItemsValid) {
      return bookmarks;
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
}

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

addBookmarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm()
});

closeFormButton.addEventListener("click", displayOrCloseForm);

addBookmarkButtonForm.addEventListener("click", () => {
  let bm = getBookmarks();
  bm.push({
    name: nameEl.value,
    category: categoryDropdown.value,
    url: urlEl.value
  });

  localStorage.setItem("bookmarks", JSON.stringify(bm));
  displayOrCloseForm();
  nameEl.value = "";
  urlEl.value = "";
});

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

const fillBookmarkList = () => {
  const bm = getBookmarks().filter((item) => item.category === categoryDropdown.value);
  if (bm.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    let inner = "";
    bm.forEach((item) => {
      inner += 
      `<div>
        <input type="radio" name="bookmarks" id="${item.name}" value="${item.name}">
        <label for="${item.name}">
          <a href="${item.url}">${item.name}</a>
        </label>
      </div>`
    });
    categoryList.innerHTML = inner;
  }
}

viewCategoryButton.addEventListener("click", () => {
  fillBookmarkList();
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});


const deleteBookmark = () => {
  const radioBookmarks = document.querySelectorAll('input[type="radio"]');
  console.log(radioBookmarks)
  return Array.from(radioBookmarks).some((item) => {
    if (item.checked) {
      let bookmarks = getBookmarks();
      let indexToRemove = bookmarks.findIndex((i) => {
        return i.name == item.value && i.category === categoryDropdown.value;
      });
      bookmarks.splice(indexToRemove, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      return true;
    }

    return false;
  });
};

deleteBookmarkButton.addEventListener("click", () => {
  if (deleteBookmark()) {
    fillBookmarkList();
  }
});

console.log(getBookmarks())