// cart.js

// Function to display cart contents
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    const totalPriceElement = document.getElementById("total-price");
    cartContainer.innerHTML = "";
    let totalPrice = 0;
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty!</p>";
      totalPriceElement.textContent = "Total: £0.00";
      return;
    }
  
    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
  
      itemElement.innerHTML = `
        <img src="assets/images/${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: £${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
  
      cartContainer.appendChild(itemElement);
      totalPrice += item.price * item.quantity;
    });
  
    totalPriceElement.textContent = `Total: £${totalPrice.toFixed(2)}`;
  }
  
  // Function to remove an item from the cart
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
  
  // Initialize the cart page
  window.onload = displayCart;

  // Select the hamburger menu and navigation list
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Add click event listener to the hamburger menu
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the 'active' class on the nav-list
});


document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const clearCartButton = document.getElementById("clear-cart");

  function displayCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cartItemsContainer.innerHTML = "";

      if (cart.length === 0) {
          cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
          return;
      }

      cart.forEach((item) => {
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("cart-item");
          itemDiv.innerHTML = `
              <div class="cart-item-details">
                  <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                  <div>
                      <p><strong>${item.name}</strong></p>
                      <p>Price: £${item.price}</p>
                      <p>Quantity: ${item.quantity}</p>
                      <button class="remove-item" data-id="${item.id}">Remove</button>
                  </div>
              </div>
              <hr>
          `;
          cartItemsContainer.appendChild(itemDiv);
      });

      const total = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
      );

      const totalDiv = document.createElement("div");
      totalDiv.classList.add("cart-total");
      totalDiv.innerHTML = `<h3>Total: £${total}</h3>`;
      cartItemsContainer.appendChild(totalDiv);

      attachRemoveListeners();
  }

  function attachRemoveListeners() {
      const removeButtons = document.querySelectorAll(".remove-item");
      removeButtons.forEach((button) => {
          button.addEventListener("click", () => {
              const productId = button.getAttribute("data-id");
              let cart = JSON.parse(localStorage.getItem("cart")) || [];
              cart = cart.filter((item) => item.id !== productId);
              localStorage.setItem("cart", JSON.stringify(cart));
              displayCart();
          });
      });
  }

  clearCartButton.addEventListener("click", () => {
      localStorage.removeItem("cart");
      displayCart();
  });

  displayCart();
});

// Back-to-Top Button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/Hide button on scroll
  window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
          backToTopButton.style.display = "block"; // Show the button
      } else {
          backToTopButton.style.display = "none"; // Hide the button
      }
  });

  // Scroll to top on button click
  backToTopButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scroll effect
      });
  });
});