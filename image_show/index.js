let images = document.querySelectorAll(".image img")
let prev_btn = document.querySelector(".previous_btn")
let next_btn = document.querySelector(".next_btn")
let close_btn = document.querySelector(".close_btn")
let gallery = document.querySelector(".gallery")
let gallery_inner_img = document.querySelector(".gallery_inner img")

let current_index = 0

function showGallery(index) {
  if (index == 0) {
    prev_btn.classList.add("hide");
  } else {
    prev_btn.classList.remove("hide");
  }
  if (index >= images.length - 1){
    next_btn.classList.add("hide");
  } else {
    next_btn.classList.remove("hide");
  }
  gallery_inner_img.src = images[index].src;
  if (!gallery.classList.contains('show_gallery')) {
    gallery.classList.add('show_gallery');
  }
}

images.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    current_index = index;
    showGallery(current_index);
  })
})

close_btn.addEventListener("click", (event) => {
  gallery.classList.remove('show_gallery');
})

prev_btn.addEventListener("click", (event) => {
  current_index--;
  showGallery(current_index);
})
next_btn.addEventListener("click", (event) => {
  current_index++;
  showGallery(current_index);
})

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 27) {
    gallery.classList.remove('show_gallery');
  }
})