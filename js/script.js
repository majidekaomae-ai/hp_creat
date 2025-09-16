// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializePortfolioFilter();
    initializeMobileMenu();
    initializeScrollEffects();
});

// Portfolio Scroll Navigation Functionality
function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Add event listeners to filter buttons for scrolling
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Scroll to section
            scrollToSection(filter);
        });
    });

    // No initial active button - user will click to navigate
}

function scrollToSection(filter) {
    // Find the category header for the specific filter
    const categoryHeaders = document.querySelectorAll('.category-header');
    let targetElement;
    
    categoryHeaders.forEach(header => {
        const titleText = header.querySelector('.category-title').textContent.trim();
        
        // Map filter values to section titles
        const filterMapping = {
            'tv': '番組制作・編集',
            'cm': 'CM',
            'youtube': 'YouTube',
            'tiktok': 'TikTok',
            'event': 'イベント'
        };
        
        if (titleText === filterMapping[filter]) {
            targetElement = header;
        }
    });
    
    if (targetElement) {
        // Calculate offset to account for fixed header
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetOffset = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }
}



// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-active');
            mobileMenuBtn.classList.toggle('active');
            
            // Animate hamburger lines
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileMenuBtn.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    // Header background change on scroll
    const header = document.querySelector('.header');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    window.addEventListener('scroll', () => {
        // Header background change
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // Update active navigation button based on scroll position
        updateActiveNavButton(filterButtons);
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

function updateActiveNavButton(filterButtons) {
    const categoryHeaders = document.querySelectorAll('.category-header');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight + 100;
    
    let activeFilter = null; // No active filter initially
    
    categoryHeaders.forEach(header => {
        const titleText = header.querySelector('.category-title').textContent.trim();
        const headerTop = header.offsetTop;
        
        if (scrollPosition >= headerTop) {
            // Map section titles to filter values
            const titleMapping = {
                '番組制作・編集': 'tv',
                'CM': 'cm',
                'YouTube': 'youtube',
                'TikTok': 'tiktok',
                'イベント': 'event'
            };
            
            activeFilter = titleMapping[titleText];
        }
    });
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (activeFilter && btn.dataset.filter === activeFilter) {
            btn.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }
        
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }
    }, 300);
});

// Performance optimization: Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Handle responsive adjustments if needed
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (window.innerWidth <= 768 && portfolioGrid) {
            portfolioGrid.style.gridTemplateColumns = '1fr';
        } else if (portfolioGrid) {
            portfolioGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
        }
    }, 250);
});