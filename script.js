// ==========================================================================
// Dynamic Data Injector (JSON to DOM)
// ==========================================================================

async function loadPortfolioData() {
    try {
        // Fetch JSON data
        const response = await fetch('portfolio.json');
        if (!response.ok) throw new Error("Data load hone mein dikkat aayi bhai!");
        
        const data = await response.json();
        
        // 1. Update Showreel Section Dynamically
        const showreelBg = document.querySelector('.showreel-bg');
        const showreelTitle = document.querySelector('.showreel-title');
        
        if (showreelBg && showreelTitle) {
            showreelBg.src = data.showreel.thumbnail;
            showreelTitle.innerText = data.showreel.title;
            // Yahan hum video click event bhi bind kar sakte hain modal ke liye
            document.querySelector('.play-btn').setAttribute('data-video', data.showreel.videoUrl);
        }

        // 2. Render Portfolio Grid
        const portfolioGrid = document.querySelector('#dynamic-portfolio'); // ID update kar lena HTML mein
        
        if (portfolioGrid) {
            portfolioGrid.innerHTML = ''; // Clear existing loaders/placeholders
            
            data.projects.forEach((project, index) => {
                // Delay stagger effect ke liye
                const delay = index * 0.1; 
                
                const projectHTML = `
                    <div class="portfolio-item glass-panel tilt-card fade-up" data-category="${project.category}" style="transition-delay: ${delay}s;">
                        <div class="portfolio-thumb">
                            <img src="${project.thumbnail}" alt="${project.title}">
                            <div class="hover-video-preview">
                                <video src="${project.previewVideo}" muted loop playsinline></video>
                            </div>
                        </div>
                        <div class="portfolio-info">
                            <h3>${project.title}</h3>
                            <p>${project.categoryLabel}</p>
                        </div>
                    </div>
                `;
                portfolioGrid.insertAdjacentHTML('beforeend', projectHTML);
            });
        }

        // Data aane ke baad UI interactions re-initialize karna zaroori hai
        initializePostLoadEffects();

    } catch (error) {
        console.error("Error loading portfolio:", error);
    }
}

// Ye function tab chalega jab saara data DOM mein inject ho jayega
function initializePostLoadEffects() {
    // 1. Re-init Tilt Effect naye cards ke liye
    if (typeof initTilt === "function") initTilt();
    
    // 2. Re-init Hover States (Custom Cursor ke liye)
    if (typeof attachHoverStates === "function") attachHoverStates();
    
    // 3. Re-init Filters 
    if (typeof initPortfolioFilters === "function") initPortfolioFilters();

    // 4. ScrollTrigger ko refresh karo taaki naye dimensions register ho jayein
    ScrollTrigger.refresh();

    // 5. Video Preview Hover Logic Add karo
    const portfolioThumbs = document.querySelectorAll('.portfolio-thumb');
    portfolioThumbs.forEach(thumb => {
        const video = thumb.querySelector('video');
        if(video) {
            thumb.addEventListener('mouseenter', () => {
                video.play().catch(e => console.log("Autoplay blocked"));
                video.style.opacity = '1';
            });
            thumb.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
                video.style.opacity = '0';
            });
        }
    });
}

// DOM load hote hi fetch trigger kardo
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
});

// ==========================================================================
// Initialization & Utility
// ==========================================================================

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Smooth Scrolling (Lenis)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Text Splitter Utility (Alternative to paid SplitText)
function splitTextReveal() {
    const reveals = document.querySelectorAll('.text-reveal');
    reveals.forEach(el => {
        const text = el.innerText;
        el.innerHTML = '';
        const words = text.split(' ');
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            const innerSpan = document.createElement('span');
            innerSpan.classList.add('word-inner');
            // Handle HTML inside like <br> or spans (simplified for this structure)
            if (word === '<br>') {
                el.appendChild(document.createElement('br'));
            } else {
                innerSpan.innerHTML = word + '&nbsp;';
                wordSpan.appendChild(innerSpan);
                el.appendChild(wordSpan);
            }
        });
    });
}

// ==========================================================================
// Custom Cursor & Interactions
// ==========================================================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Fast cursor
    gsap.to(cursor, {
        x: mouseX, y: mouseY,
        duration: 0.1, ease: "power2.out"
    });
});

// Follower easing
gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    gsap.set(cursorFollower, { x: posX, y: posY });
});

// Cursor Hover States
const attachHoverStates = () => {
    const links = document.querySelectorAll('a, button, .magnetic-element');
    const portfolios = document.querySelectorAll('.portfolio-item, .showreel-wrapper');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-btn');
            cursorFollower.classList.add('hover-btn');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-btn');
            cursorFollower.classList.remove('hover-btn');
        });
    });

    portfolios.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursorFollower.classList.add('hover-portfolio');
        });
        item.addEventListener('mouseleave', () => {
            cursorFollower.classList.remove('hover-portfolio');
        });
    });
};

// ==========================================================================
// 3D Background (Three.js)
// ==========================================================================
function initThreeJS() {
    const canvas = document.querySelector('#webgl-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x00E5FF,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 3;

    // Mouse Parallax
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (event) => {
        targetX = (event.clientX / window.innerWidth) - 0.5;
        targetY = (event.clientY / window.innerHeight) - 0.5;
    });

    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Auto rotation
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        // Mouse influence
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ==========================================================================
// Main Animations & Loader Logic
// ==========================================================================
function initAnimations() {
    splitTextReveal();
    
    // --- Cinematic Fast-Type + Lightning Loader Sequence ---
    
    // 1. Split text for typing effect
    const brandText = document.getElementById('brand-text');
    const textContent = brandText.innerText;
    brandText.innerHTML = '';
    
    // Create individual spans for each character
    textContent.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('type-char');
        span.innerText = char;
        brandText.appendChild(span);
    });

    const tlLoader = gsap.timeline({
        onComplete: () => {
            document.body.classList.remove('loading');
            initScrollAnimations(); // Trigger page scroll animations after load
        }
    });

    // Animate Percentage quickly
    tlLoader.to('.loader-percentage', { opacity: 1, duration: 0.2 })
            .to({ val: 0 }, {
                val: 100,
                duration: 1.5,
                ease: "power4.inOut",
                onUpdate: function() {
                    document.getElementById('load-percent').innerText = 
                        Math.round(this.targets()[0].val).toString().padStart(2, '0');
                }
            }, 0);

    // Fast Typing Effect
    tlLoader.to('.type-char', {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.1,
        stagger: 0.05, // Insanely fast stagger
        ease: "power2.out"
    }, 0.2);

    // Give specific letters a neon flicker (C & U in FlashCut)
    tlLoader.to('.type-char:nth-child(6), .type-char:nth-child(7)', {
        color: 'var(--acc)',
        textShadow: '0 0 20px var(--acc-glow)',
        duration: 0.1,
        yoyo: true,
        repeat: 3
    }, "-=0.5");

    // The Lightning Slash Effect
    tlLoader.to('.lightning-slash', { opacity: 1, duration: 0.1 }, "-=0.2")
            .to('.lightning-slash', { left: '150%', duration: 0.4, ease: "power4.in" }, "-=0.1")
            .to('.lightning-slash', { opacity: 0, duration: 0.1 }, "-=0.1");

    // Cinematic Flash Bang
    tlLoader.to('.screen-flash', { opacity: 1, duration: 0.1, ease: "power2.in" })
            .to('.screen-flash', { opacity: 0, duration: 0.8, ease: "power2.out" }, "+=0.1");

    // Open the Shutters
    tlLoader.to('.top-shutter', { yPercent: -100, duration: 1.2, ease: "power4.inOut" }, "-=0.8")
            .to('.bottom-shutter', { yPercent: 100, duration: 1.2, ease: "power4.inOut" }, "-=1.2")
            
    // Hide Loader wrapper entirely
            .set('.loader', { display: 'none' })

    // Reveal Hero Content
            .to('.hero-headline .word-inner', { y: 0, duration: 1, stagger: 0.05, ease: "power4.out" }, "-=0.6")
            .to('.hero-subtext .word-inner', { y: 0, duration: 1, ease: "power4.out" }, "-=0.8")
            .to('.hero-buttons.fade-up, .scroll-indicator', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.6");
}

function initScrollAnimations() {
    // Navbar Blur on Scroll
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) document.querySelector('.navbar').classList.add('scrolled');
        else document.querySelector('.navbar').classList.remove('scrolled');
    });

    // Reveal Texts on scroll
    const textReveals = document.querySelectorAll('section:not(.hero) .text-reveal');
    textReveals.forEach(text => {
        gsap.to(text.querySelectorAll('.word-inner'), {
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
            },
            y: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power4.out"
        });
    });

    // Fade Up Elements
    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach(el => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                y: 0, opacity: 1, duration: 1, ease: "power3.out"
            }
        );
    });

    // About Image Parallax
    gsap.to('.portrait-img', {
        scrollTrigger: {
            trigger: '.about',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        yPercent: 15,
        scale: 1.1
    });

    // Stats Counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power3.out"
                });
            }
        });
    });

    // Process Timeline Scroll
    const tlTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1
        }
    });
    tlTimeline.to(".timeline-progress", { height: "100%", ease: "none" });

    // Activate Process dots
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        ScrollTrigger.create({
            trigger: step,
            start: "top 60%",
            onEnter: () => step.classList.add('active'),
            onLeaveBack: () => step.classList.remove('active')
        });
    });
}

// ==========================================================================
// 3D Tilt Effect on Cards (Vanilla JS)
// ==========================================================================
function initTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none'; // Remove transition for smooth immediate tracking
        });
    });
}

// ==========================================================================
// Portfolio Filtering
// ==========================================================================
function initPortfolioFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filtering logic with GSAP
            items.forEach(item => {
                if(filter === 'all' || item.getAttribute('data-category') === filter) {
                    gsap.to(item, { scale: 1, opacity: 1, duration: 0.4, display: 'block' });
                } else {
                    gsap.to(item, { scale: 0.8, opacity: 0, duration: 0.4, display: 'none' });
                }
            });
            ScrollTrigger.refresh(); // Refresh markers layout
        });
    });
}

// ==========================================================================
// Initialization via Barba.js (For smooth page transitions)
// ==========================================================================
barba.init({
    sync: true,
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.5
            });
        },
        enter(data) {
            // Re-init instances on new page load
            attachHoverStates();
            initTilt();
            initPortfolioFilters();
            return gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.5
            });
        }
    }]
});

// Run Initial setup
window.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initAnimations();
    attachHoverStates();
    initTilt();
    initPortfolioFilters();
});