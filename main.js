"use strict";

async function callAPI() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log(products);

  const pContainer = document.querySelector('#products_container');

  products.map((product) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = product.title;
    div.appendChild(h2);
    // h2.style.display = "none";

    const img = document.createElement("img");
    img.setAttribute("src", `${product.image}`);
    img.style.width = "200px";
    img.style.height = "200px";
    div.appendChild(img);

    const p = document.createElement("p");
    p.textContent = product.price;
    div.appendChild(p);
    pContainer.appendChild(div);
  });
  console.log(pContainer);
}
callAPI();
