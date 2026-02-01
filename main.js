// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

tl.to("#hero-title", { opacity: 1, y: 0, duration: 1.2, delay: 0.5 })
  .to("#hero-desc", { opacity: 1, y: 0, duration: 1.2 }, "-=0.8")
  .to("#hero-cta", { opacity: 1, y: 0, duration: 1.2 }, "-=0.8")
  .to("#hero-img", { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }, "-=1.5")
  .to("#hero-badge", { opacity: 1, scale: 1, rotate: -5, duration: 1, ease: "back.out(1.7)" }, "-=0.5");

// Reveal animations on scroll
const reveals = document.querySelectorAll('.reveal');

reveals.forEach(el => {
    ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => el.classList.add('active'),
        // Once: true // Commented out to allow repeat animations if desired, but adding 'active' class only once is usually enough
    });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect on hero image
window.addEventListener('scroll', () => {
    const depth = window.scrollY * 0.15;
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        heroImg.style.backgroundPositionY = `calc(50% + ${depth}px)`;
    }
});
