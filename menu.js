// Select elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    // Update ARIA attribute for accessibility
    menuToggle.setAttribute('aria-expanded', menu.classList.contains('open'));
});

// Close menu on link click or outside click
document.addEventListener('click', (e) => {
    // Close menu if clicking outside or on a menu item
    if ((!menu.contains(e.target) && e.target !== menuToggle) || e.target.tagName === 'A') {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false); // Update ARIA attribute
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