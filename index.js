// Select the hamburger menu and navigation list
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Add click event listener to the hamburger menu
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the 'active' class on the nav-list
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
  