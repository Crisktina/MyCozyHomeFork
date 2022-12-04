// menu hamburger----------------------------
const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector(".navMenu");
const body = document.querySelector("body");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menuBtnVisible");
  nav.classList.toggle("navMenuVisible");
  body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuBtn.classList.remove("menuBtnVisible");
    nav.classList.remove("navMenuVisible");
  })
);

// RENDER PRODUCTS
const productsCard = document.querySelector("#cards");

function printProducts(productsArray) {
  productsArray.forEach((item) => {
    productsCard.innerHTML += `
      <div class="item">
          <div class="imgProduct">
            <img src= "${item.image}" class="card-img-top" alt="${item.name}" />
          </div>
        <div class="infoProduct">
          <div class="row1">
            <h5>${item.name}</h5>
            <a onclick="addToCart(${
              item.id
            })" ><img src="assets/icons/buttonCart.svg" alt="Add product to cart" /></a>
          </div>
          <div class="row2">
            <div class="quantity">
              <button onclick="addToCart(${
                item.id
              })"><img src="assets/icons/buttonMinus.svg" alt="More products" /></button>
              <h6>${item.numberOfUnits}</h6>
              <button onclick="addUnitBeforeSendToCart(${
                item.id
              })"><img src="assets/icons/buttonAdd.svg" alt="Less products" /></button>
            </div>
            <p>${item.price.toFixed(2)} €</p>
          </div>
        </div>
      </div>
  `;
  });
}

printProducts(productsArray);

// cart array
let cart = [];

// Number of units to put in cart
// function addUnitBeforeSendToCart(id) {
//   const item = productsArray.find((item) => item.id === id);
//   productsArray.push({
//     ...item,
//     numberOfUnits: 1,
//   });
// }
// addUnitBeforeSendToCart();

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((product) => product.id === id)) {
    Swal.fire({
      title: "Product already in cart!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    const product = productsArray.find((item) => item.id === id);
    cart.push(product);
    console.log(cart);
  }
}
