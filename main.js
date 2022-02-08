"use strict";

async function callAPI() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log(products);

  const pContainer = document.querySelector('#products_container');

  products.map((product) => {
    const div = document.createElement("div");
    
    const img = document.createElement("img");
    img.setAttribute("src", `${product.image}`);
    img.style.width = "200px";
    img.style.height = "250px";
    div.appendChild(img);
    
    const h4 = document.createElement("h4");
    h4.textContent = product.title;
    div.appendChild(h4);
    // h4.style.display = "none";

    const p = document.createElement("p");
    p.textContent = `$${product.price}`;
    div.appendChild(p);
    pContainer.appendChild(div);
  });
  console.log(pContainer);
}
callAPI();
