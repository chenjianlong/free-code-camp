const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".lightbox");

const lightBoxImage = document.getElementById("lightbox-image");

const closeBtn = document.getElementById("close-btn");

function hideLightBox() {
  lightBoxImage.src = "";
  lightbox.style.display = "none";
}

closeBtn.addEventListener("click", hideLightBox);
lightBoxImage.addEventListener("click", e => e.stopPropagation());
lightbox.addEventListener("click", hideLightBox);

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightBoxImage.src = item.src.replace("-thumbnail.jpg", ".jpg");
  });
})