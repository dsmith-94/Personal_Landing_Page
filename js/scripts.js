// ===========================
// scripts.js
// JavaScript for personal landing page interactions
// ===========================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const scrollPos = window.scrollY + 100; // offset for nav

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        const navLink = document.querySelector(`nav a[href='#${id}']`);
        if (navLink) {
            if (scrollPos >= top && scrollPos < top + height) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// Optional: Mobile nav toggle (if you later add hamburger menu)
// const navToggle = document.getElementById('nav-toggle');
// const navMenu = document.querySelector('nav ul');
// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('open');
// });