/* ============================================
   PORTFOLIO JAVASCRIPT
   Interactive features and smooth scrolling
   ============================================ */

// Wait for DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all JavaScript functionality
    initializeNavigation();
    initializeScrollEffects();
    initializeHoverEffects();
});

/* ============================================
   NAVIGATION INITIALIZATION
   ============================================ */

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Update active nav link based on scroll position
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scroll is handled by CSS (scroll-behavior: smooth)
            // This just ensures the navigation works properly
            updateActiveLink();
        });
    });

    // Update active nav item on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   SCROLL EFFECTS
   ============================================ */

function initializeScrollEffects() {
    // Observe elements for fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-in-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe skill cards and other elements
    const skillCards = document.querySelectorAll('.skill-card');
    const contactCards = document.querySelectorAll('.contact-card');

    skillCards.forEach(card => {
        observer.observe(card);
    });

    contactCards.forEach(card => {
        observer.observe(card);
    });
}

/* ============================================
   HOVER EFFECTS
   ============================================ */

function initializeHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            // Add smooth scale effect
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function(e) {
            this.style.transform = 'scale(1)';
        });
    });

    // Add interactivity to skill cards
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add effects to contact cards
    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Subtle scale on hover
        });

        card.addEventListener('mouseleave', function() {
            // Reset
        });
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Smooth scroll helper (works with CSS scroll-behavior: smooth)
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Get current scroll position
function getScrollPosition() {
    return window.scrollY || document.documentElement.scrollTop;
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for scroll events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/* ============================================
   ADDITIONAL FUNCTIONALITY
   ============================================ */

// Performance optimization: Debounce scroll events
const debouncedScroll = debounce(updateActiveLink, 100);
window.addEventListener('scroll', debouncedScroll);

// Add a subtle animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Log page load for debugging
console.log('Portfolio loaded successfully');
console.log('Author: Amrendra Kumar');
console.log('Roll Number: 2513015');
console.log('College: NIT Patna');
