document
  .getElementById("heart_icon")
  .addEventListener("click", function like() {
    let _this = document.getElementById("heart_icon");
    if (_this.classList.contains("bx-heart")) {
      _this.classList.remove("bx-heart");
      _this.classList.add("bxs-heart");
      _this.style.color = "#C22200";
      return
    }
    if (_this.classList.contains("bxs-heart")) {
      _this.classList.remove("bxs-heart");
      _this.classList.add("bx-heart");
      _this.style.color = "white";
    }
  });