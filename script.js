// script.js (Optional - Add interactivity here)
// Example: Smooth scrolling to sections

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';

    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}