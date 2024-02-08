fetch("https://kea-alt-del.dk/t7/api/categories/")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector("template").content;
  const myClone = template.cloneNode(true);

  myClone.querySelector("a").textContent = cat.category;
  myClone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

  document.querySelector(".kategori ol").appendChild(myClone);
}
