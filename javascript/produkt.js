const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".info h1").textContent = product.productdisplayname;
  document.querySelector(".info .brand").textContent = product.brandname;
  document.querySelector(".info .gender").textContent = product.gender;
  document.querySelector(".info .number").textContent = product.id;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  document.querySelector(".price").textContent = product.price + " DKK";

  if (product.discount) {
    document.querySelector(".rabat-pris").textContent = "Rabat: " + product.discount + "%";
  } else {
    document.querySelector(".rabat-pris").style.display = "none";
  }

  if (product.soldout) {
    document.querySelector(".status").textContent = "Status: Udsolgt";
  }
}
