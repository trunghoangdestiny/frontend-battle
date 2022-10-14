let alertElement = document.querySelector('.alert');
let resultElement = document.querySelector('.result>p');
let boxElement = document.querySelector('.box');

let cardKey = document.querySelector('.card>.card_key');
let cardLocation = document.querySelector('.card>.card_location');
let cardWhich = document.querySelector('.card>.card_which');
let cardCode = document.querySelector('.card>.card_code');

document.addEventListener("keydown", function (event) {
  alertElement.classList.add("hidden");
  boxElement.classList.add("show");
  resultElement.textContent = event.which;

  cardKey.textContent = event.key;
  cardCode.textContent = event.code;
  cardLocation.textContent = event.location;
  cardWhich.textContent = event.which;
})
