let modal = document.getElementById("modal");
let modal_inner = document.getElementById("modal_inner")

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", (event) => {
  if (!modal_inner.contains(event.target) || event.target == event.currentTarget) {
    closeModal();
  }
})
