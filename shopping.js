"use strict";
//------------------------
// Slides
// ----------------------
const slide01 = document.querySelector(".img_1");
const p01 = document.createElement("p");
p01.textContent = "Everything at least 10% OFF";
slide01.appendChild(p01);
console.log(slide01);

//------------------------
// API (Shopping items)
// ----------------------
async function callAPI() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log(products);

  const pContainer = document.querySelector("#products_container");

  products.map((product) => {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", `${product.image}`);
    div.appendChild(img);

    const h4 = document.createElement("h4");
    h4.textContent = product.title;
    div.appendChild(h4);
    // h4.style.display = "none";

    const p = document.createElement("p");
    p.textContent = `$${product.price}`;
    div.appendChild(p);

    const addButton = document.createElement("button");
    addButton.textContent = "ADD TO CART";
    div.appendChild(addButton);
    pContainer.appendChild(div);
  });
  console.log(pContainer);

// Add to cart (+number)
  const buttons = document.querySelectorAll("button");
  let num = 0;
  for (let i = 0; i < buttons.length; i++) {
    const cart = document.querySelector("span");
    buttons[i].addEventListener("click", function () {
      cart.textContent = num + 1;
      num++;
      console.log("CartItemNum", num);
      console.log("cart", cart);
    });
  }

  // Items in cart

}
callAPI();



// --------------------------
// Modal
// -------------------------
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

const cartIcon = document.querySelector('.fa-cart-arrow-down');
cartIcon.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', function(){
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});