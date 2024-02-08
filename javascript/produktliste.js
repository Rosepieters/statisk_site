const urlParams = new URLSearchParams(window.location.search);
const cateogry = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products/?category=" + cateogry)
  .then((response) => {
    return response.json();
  })
  .then(dataReceived);

function dataReceived(data) {
  console.log(data);
  data.forEach(productList);
}

function productList(oneProduct) {
  console.log("productList");
  const myList = document.querySelector("template").content;
  const myClone = myList.cloneNode(true);

  myClone.querySelector("h2").textContent = oneProduct.productdisplayname;

  if (oneProduct.soldout) {
    myClone.querySelector("article").classList.add("udsolgt");
  }

  if (oneProduct.discount) {
    myClone.querySelector(".rabat-pris").classList.add("rabat");
    myClone.querySelector(".rabat-pris span").textContent = oneProduct.discount;

    myClone.querySelector(".price").classList.add("førpris");
    myClone.querySelector(".price span").textContent = oneProduct.discount;
  } else {
    myClone.querySelector(".rabat-pris").style.display = "none";
    myClone.querySelector(".price").style.dispaly = "block";
  }

  myClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${oneProduct.id}.webp`;
  myClone.querySelector(".price span").textContent = oneProduct.price;
  myClone.querySelector(".produkt-link").setAttribute("href", `produkt.html?id=${oneProduct.id}`);

  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);
}
