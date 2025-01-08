// Select elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

// Add event listener to toggle the menu visibility
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // Add/remove the 'open' class
});

// Close menu on link click or outside click
document.addEventListener('click', (e) => {
    if ((menu && !menu.contains(e.target) && e.target !== menuToggle) || e.target.tagName === 'A') {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// Prevent default link behavior for smooth scrolling
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const href = item.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

