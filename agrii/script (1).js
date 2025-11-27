// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]'). forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this. getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks. forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window. addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const farmer = document.querySelector('.farmer-img');
    const barn = document. querySelector('.barn-img');
    const leaves = document.querySelectorAll('.leaves-left, .leaves-right');
    
    if (farmer) {
        farmer.style. transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (barn) {
        barn.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
    
    leaves.forEach(leaf => {
        leaf.style.transform = `translateY(${scrolled * 0.15}px)`;
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry. isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.info-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Mobile menu toggle (for responsive design)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.navbar ul');
    
    if (window.innerWidth <= 768) {
        if (! document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            navbar.insertBefore(menuToggle, navList);
            
            menuToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
                menuToggle.querySelector('i').classList.toggle('fa-bars');
                menuToggle. querySelector('i').classList.toggle('fa-times');
            });
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Hover effect for gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style. transform = 'scale(1. 05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Scroll to top button
const createScrollToTop = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #4a9d9f;
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn. addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style. background = '#2c5f6f';
        this.style.transform = 'translateY(-5px)';
    });
    
    scrollBtn. addEventListener('mouseleave', function() {
        this.style.background = '#4a9d9f';
        this.style.transform = 'translateY(0)';
    });
};

createScrollToTop();

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style. opacity = '1';
    }, 100);
});

// Console welcome message
console.log('%c Indonesia Fertilizer Website ', 'background: #4a9d9f; color: white; font-size: 20px; padding: 10px;');
console.log('%c Website loaded successfully!  ', 'background: #2c5f6f; color: white; font-size: 14px; padding: 5px;');