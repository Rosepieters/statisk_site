//Burgermenu
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector("nav");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("open");
  });
});

function changeClothingSize(size) {
  var resultElement = document.getElementById("result");
  var selectedSizeElement = document.getElementById("selectedSize");

  selectedSizeElement.textContent = size;
}
//Burgermenu
