"use strict";

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

    // let cartItemNum = 0;
    // addButton.addEventListener("click", function () {
    //   const cart = document.querySelector("span");
    //   cart.textContent = cartItemNum;
    //   cartItemNum ++;;
    //   console.log("CartItemNum", cartItemNum);
    //   console.log("cart", cart);
    // });
  });
  console.log(pContainer);

  const buttons = document.querySelectorAll("button");
  let numArr = [];
  let num = 0;
  const cart = document.querySelector("span");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      cart.textContent = num + 1;
      num++;
      console.log("CartItemNum", num);
      console.log("cart", cart);
      numArr.push(num);
      console.log(numArr);
    });
  }
  // console.log(buttons);
}
callAPI();

//------------------------
// Slides
// ----------------------
const slide01 = document.querySelector(".img_1");
const p01 = document.createElement("p");
p01.textContent = "Everything at least 10% OFF";
slide01.appendChild(p01);
console.log(slide01);
