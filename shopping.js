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

    const p = document.createElement("p");
    p.textContent = `${Math.trunc(product.price)}`;
    div.appendChild(p);

    const addButton = document.createElement("button");
    addButton.textContent = "ADD TO CART";
    div.appendChild(addButton);
    pContainer.appendChild(div);
  });
  console.log(pContainer);

  // --------------------------
  // Cart number
  // -------------------------
  const buttons = document.querySelectorAll("button");
  let num = 0;
  let arry = [];
  for (let i = 0; i < buttons.length; i++) {
    const cart = document.querySelector("span");
    buttons[i].addEventListener("click", function () {
      cart.textContent = num + 1;
      num++;

      // --------------------------
      // Modal images
      // -------------------------
      const originalImg = buttons[i].parentNode.firstChild;
      const doublicateImg = originalImg.cloneNode();
      // console.log(doublicateImg);
      doublicateImg.style.width = "70px";
      doublicateImg.style.height = "70px";
      doublicateImg.style.borderRadius = "0%";
      // --------------------------
      // Modal Each price
      // -------------------------
      const originalPrice = buttons[i].parentNode.childNodes[2];
      const doublicatePrice = originalPrice.cloneNode();
      doublicatePrice.textContent =
        buttons[i].parentNode.childNodes[2].textContent;
      // console.log(doublicatePrice);

      // --------------------------
      // Modal Total Price
      // -------------------------
      let totalPrice = document.querySelector(".total_price span");
      arry.push(parseInt(doublicatePrice.textContent));
      // console.log(arry);
      let totalNum = 0;
      for (let j = 0; j < arry.length; j++) {
        totalNum += arry[j];
      }
      console.log(totalNum);
      totalPrice.textContent = totalNum;

      // -------------------------------------------
      // Click close overlay = Total price from 0
      // -------------------------------------------
      const close = document.querySelector(".close");
      const overlay = document.querySelector(".overlay");
      close.addEventListener("click", function () {
          arry = [];
      });
      overlay.addEventListener("click", function () {
          arry = [];
      });
      // --------------------------
      // Modal  Delete button
      // -------------------------
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "DELETE";
      deleteBtn.addEventListener("click", function () {
        li.remove();
        cart.textContent = num - 1;
        num--;

        let allBtns = document.querySelectorAll(".modal01 button");
        let totalNum = 0;
        for (let q = 0; q < allBtns.length; q++) {
          const randomDeleteItemPrice = parseInt(allBtns[q].parentNode.childNodes[1].textContent);
          totalNum = totalNum - randomDeleteItemPrice;
        }
        console.log(totalNum);
        totalPrice.textContent = Math.abs(totalNum);
      });

      const ul = document.querySelector(".modal01 ul");
      const li = document.createElement("li");
      ul.appendChild(li);
      li.appendChild(doublicateImg);
      li.appendChild(doublicatePrice);
      li.appendChild(deleteBtn);
      console.log(modal);
    });
  }
}
callAPI();

// --------------------------
// Modal
// -------------------------
const modal = document.querySelector(".modal01");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const cartIcon = document.querySelector(".fa-cart-arrow-down");
cartIcon.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", function () {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
