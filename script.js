// ============================================
// Theme Toggle Functionality
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the theme on page load
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(currentTheme);

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Add transition class to body for smooth color transitions
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        setTheme(newTheme);
        
        // Remove transition after it's done
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

// ============================================
// Navigation Functionality
// ============================================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    
    if (currentScroll > 100) {
        navbar.style.background = isDark ? 'rgba(10, 14, 26, 0.98)' : 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = isDark ? '0 4px 16px rgba(0, 0, 0, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.background = isDark ? 'rgba(10, 14, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = isDark ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// Smooth Scrolling
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Circular Progress Animation
// ============================================

function animateProgress() {
    const progressElements = document.querySelectorAll('.circular-progress');
    
    progressElements.forEach(progress => {
        const circle = progress.querySelector('.progress-bar');
        const dataProgress = parseInt(progress.getAttribute('data-progress'));
        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        
        if (circle) {
            const offset = circumference - (dataProgress / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate progress bars when visible
            if (entry.target.querySelector('.circular-progress')) {
                setTimeout(animateProgress, 200);
            }
            
            // Animate comparison bars
            if (entry.target.querySelector('.bar-fill')) {
                const bars = entry.target.querySelectorAll('.bar-fill');
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-value') || bar.style.width;
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
const observeElements = document.querySelectorAll('section, .highlight-card, .stats-card, .feature-item, .benchmark-card, .finding-card, .app-card, .author-card, .resource-card, .quality-content');
observeElements.forEach(el => observer.observe(el));

// ============================================
// Category Filter for Applications
// ============================================

const categoryTabs = document.querySelectorAll('.category-tab');
const appCards = document.querySelectorAll('.app-card');

if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            const selectedCategory = tab.getAttribute('data-category');
            
            // Filter app cards
            appCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (selectedCategory === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, 50);
                } else if (cardCategory === selectedCategory) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, 50);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in');
                }
            });
        });
    });
}

// ============================================
// Copy Citation to Clipboard
// ============================================

const copyButton = document.getElementById('copy-citation');

if (copyButton) {
    copyButton.addEventListener('click', () => {
        const citationText = document.querySelector('.citation-box pre code').textContent;
        
        navigator.clipboard.writeText(citationText).then(() => {
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg> Copied!';
            
            setTimeout(() => {
                copyButton.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy citation:', err);
            alert('Failed to copy citation to clipboard');
        });
    });
}

// ============================================
// Parallax Effect for Hero Background
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.2);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ============================================
// Number Counter Animation
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const target = entry.target.textContent.trim();
            if (!isNaN(target)) {
                animateCounter(entry.target, parseInt(target));
                entry.target.dataset.animated = 'true';
            }
        }
    });
}, { threshold: 0.5 });

// Observe stat numbers (if you want to animate them)
// Uncomment if you want counters to animate
// document.querySelectorAll('.stat-number').forEach(el => {
//     if (!isNaN(el.textContent.trim())) {
//         counterObserver.observe(el);
//     }
// });

// ============================================
// Add Gradient SVG Definition for Progress Circles
// ============================================

function addGradientDefinition() {
    const svg = document.querySelector('.circular-progress svg');
    if (svg && !document.getElementById('gradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#00D9FF;stop-opacity:1');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#7B61FF;stop-opacity:1');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
}

// ============================================
// Loading Animation
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    addGradientDefinition();
    
    // Trigger initial animations
    setTimeout(() => {
        animateProgress();
    }, 500);
});

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ============================================
// Performance Optimizations
// ============================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(updateActiveNavLink, 10));

// ============================================
// External Link Security
// ============================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// ============================================
// Console Easter Egg
// ============================================

console.log('%c🚀 GroundCUA', 'color: #00D9FF; font-size: 24px; font-weight: bold;');
console.log('%cGrounding Computer Use Agents on Human Demonstrations', 'color: #7B61FF; font-size: 14px;');
console.log('%cInterested in our research? Check out our paper and code!', 'color: #A0AEC0; font-size: 12px;');

// ============================================
// Initialize
// ============================================

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    
    // Add smooth reveal to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

