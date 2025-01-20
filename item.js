// item.js

// Function to display selected product details
function displayProductDetails() {
    const selectedProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));
    if (selectedProduct) {
      document.getElementById("item-image").src = `assets/images/${selectedProduct.image}`;
      document.getElementById("item-name").textContent = selectedProduct.name;
      document.getElementById("item-price").textContent = `£${selectedProduct.price.toFixed(2)}`;
    } else {
      alert("No product selected!");
      window.location.href = "products.html";
    }
  }
  
  // Function to add product to cart
  function addToCart() {
    const selectedProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));
    if (selectedProduct) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find((item) => item.id === selectedProduct.id);
  
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${selectedProduct.name} added to the cart!`);
    }
  }
  
  // Initialize the item page
  window.onload = displayProductDetails;

  // Select the hamburger menu and navigation list
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Add click event listener to the hamburger menu
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the 'active' class on the nav-list
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const product = products.find((item) => item.id === productId);

  if (product) {
      const productDetails = document.getElementById("product-details");
      productDetails.innerHTML = `
          <h2>${product.name}</h2>
          <p>Price: £${product.price}</p>
          <p>Description: ${product.description}</p>
          <button id="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
      `;

      const addToCartButton = document.getElementById("add-to-cart-btn");
      addToCartButton.addEventListener("click", () => {
          const cart = JSON.parse(localStorage.getItem("cart")) || [];
          const existingItem = cart.find((item) => item.id === product.id);
          if (existingItem) {
              existingItem.quantity += 1;
          } else {
              cart.push({ ...product, quantity: 1 });
          }
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${product.name} has been added to the cart!`);
      });
  }
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

// Get the product ID from the URL
// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Get products from localStorage
const products = JSON.parse(localStorage.getItem("products"));

// Display product details
const product = products[productId];
if (product) {
    document.getElementById("product-details").innerHTML = `
        <div style="text-align: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 80%; max-width: 600px;">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: £${product.price}</p>
            <button id="add-to-cart-btn">Add to Cart</button>
        </div>
    `;

    // Add to cart functionality
    document.getElementById("add-to-cart-btn").addEventListener("click", () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find((item) => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, id: productId, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} has been added to the cart!`);
    });
} else {
    document.getElementById("product-details").innerHTML = `<p>Product not found!</p>`;
}



