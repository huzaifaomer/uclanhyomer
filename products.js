function displayProducts() {
  const productsContainer = document.getElementById("products-container");
  products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      productElement.innerHTML = `
          <img src="assets/images/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: £${product.price.toFixed(2)}</p>
          <button onclick="location.href='item.html?id=${product.id}'">View Details</button>
      `;

      productsContainer.appendChild(productElement);
  });
}

  
// Function to handle "View Details" button click
function viewProduct(productId) {
  // Redirect to item.html with the product ID as a query parameter
  window.location.href = `details.html?id=${productId}`;
}
  
  // Initialize the products page
  window.onload = displayProducts;
  
  // Select the hamburger menu and navigation list
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Add click event listener to the hamburger menu
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the 'active' class on the nav-list
});

document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-to-cart-button");

  cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const productId = button.getAttribute("data-id");
          const productName = button.getAttribute("data-name");
          const productPrice = button.getAttribute("data-price");
          const productImage = button.closest(".product-card").querySelector("img").src;

          const cartItem = {
              id: productId,
              name: productName,
              price: productPrice,
              image: productImage,
              quantity: 1,
          };

          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          // Check if item is already in the cart
          const existingItem = cart.find((item) => item.id === productId);
          if (existingItem) {
              existingItem.quantity += 1; // Increment quantity
          } else {
              cart.push(cartItem); // Add new item to the cart
          }

          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${productName} has been added to the cart!`);
      });
  });
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


const products = {
  tshirt1: {
      name: "Navy Blue T-Shirt",
      price: 15,
      image: "/tshirts/tshirt (1).jpg",
      description: "A lightweight and breathable t-shirt for daily wear.",
  },
  tshirt2: {
      name: "Red T-Shirt",
      price: 15,
      image: "tshirts/tshirt (2).jpg",
      description: "A vibrant and stylish t-shirt.",
  },
  // Add more products as needed...
};

localStorage.setItem("products", JSON.stringify(products)); // Save to localStorage for easy access

