let searchBox = document.querySelector(".search-box");
let searchBoxInput = document.querySelector(".search-box-input");
let searchBoxBtn = document.querySelector(".search-box-btn");
let body = document.querySelector("body");

searchBoxBtn.addEventListener("click", function(){
  let searchBox = this.parentElement;
  searchBox.classList.toggle("search-box-w400");
  let searchBoxInput = this.previousElementSibling;
  searchBoxInput.focus();
})

searchBoxInput.addEventListener("keypress", function(event){
  if (event.key == "Enter"){
    console.log(this.value);
  }
})

