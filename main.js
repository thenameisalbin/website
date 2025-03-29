// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.top = "0";
        return;
    }

    if (currentScroll > lastScroll && !navLinks.classList.contains('active')) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScroll = currentScroll;
});

// Animate highlights on scroll
const highlights = document.querySelectorAll('.highlight-item');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

highlights.forEach(highlight => {
    highlight.style.opacity = '0';
    highlight.style.transform = 'translateY(20px)';
    highlight.style.transition = 'all 0.5s ease-out';
    observer.observe(highlight);
});