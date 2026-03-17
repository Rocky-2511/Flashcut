gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// Lenis Smooth Scroll Engine
// ==========================================================================
const lenis = new Lenis({
    duration: 1.8, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
lenis.stop();

// ==========================================================================
// NEW: Floating Ghost Logo Logic (Scroll to reveal)
// ==========================================================================
function initGhostLogo() {
    const ghostLogo = document.querySelector('.fixed-ghost-logo');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        // Show the ghost logo only when we've scrolled past the hero section's midpoint
        if (window.scrollY > (window.innerHeight * 0.5)) {
            ghostLogo.classList.add('visible');
        } else {
            ghostLogo.classList.remove('visible');
        }
    });
}

// ==========================================================================
// Fetching Data and DOM Loading
// ==========================================================================
async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio.json');
        if (!response.ok) throw new Error("Data error");
        const data = await response.json();
        
        const showreelBg = document.querySelector('.showreel-bg');
        const showreelTitle = document.querySelector('.showreel-title');
        
        if (showreelBg && showreelTitle) {
            showreelBg.src = data.showreel.thumbnail;
            showreelTitle.innerText = data.showreel.title;
            document.querySelector('.play-btn').setAttribute('data-video', data.showreel.videoUrl);
        }

        const portfolioGrid = document.querySelector('#dynamic-portfolio'); 
        if (portfolioGrid) {
            portfolioGrid.innerHTML = ''; 
            data.projects.forEach((project, index) => {
                const delay = index * 0.1; 
                
                const projectHTML = `
                    <div class="portfolio-item tilt-card fade-up" data-category="${project.category}" style="transition-delay: ${delay}s;">
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

        initializePostLoadEffects();

    } catch (error) {
        console.error("Error loading portfolio:", error);
    }
}

function initializePostLoadEffects() {
    if (typeof initTilt === "function") initTilt();
    if (typeof attachHoverStates === "function") attachHoverStates();
    if (typeof initPortfolioFilters === "function") initPortfolioFilters();

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

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

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioData();
    initModalPlayer();
    initLenisAnchors(); 
    initGhostLogo(); // Init the scroll listener for the logo
});


// ==========================================================================
// Utilities
// ==========================================================================
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

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1, ease: "power2.out" });
});

gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.15; posY += (mouseY - posY) * 0.15;
    gsap.set(cursorFollower, { x: posX, y: posY });
});

const attachHoverStates = () => {
    const links = document.querySelectorAll('a, button, .magnetic-element');
    const portfolios = document.querySelectorAll('.portfolio-item, .showreel-wrapper');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => { cursor.classList.add('hover-btn'); cursorFollower.classList.add('hover-btn'); });
        link.addEventListener('mouseleave', () => { cursor.classList.remove('hover-btn'); cursorFollower.classList.remove('hover-btn'); });
    });

    portfolios.forEach(item => {
        item.addEventListener('mouseenter', () => { cursorFollower.classList.add('hover-portfolio'); });
        item.addEventListener('mouseleave', () => { cursorFollower.classList.remove('hover-portfolio'); });
    });
};

// ==========================================================================
// Three.js Background 
// ==========================================================================
function initThreeJS() {
    const canvas = document.querySelector('#webgl-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800; 
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15; 
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.003, 
        color: 0xD4AF37, 
        transparent: true, 
        opacity: 0.6, 
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);
    camera.position.z = 3;

    let targetX = 0, targetY = 0;
    document.addEventListener('mousemove', (event) => {
        targetX = (event.clientX / window.innerWidth) - 0.5;
        targetY = (event.clientY / window.innerHeight) - 0.5;
    });

    let scrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
    });

    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        particlesMesh.rotation.y = elapsedTime * 0.03; 
        particlesMesh.rotation.x = elapsedTime * 0.01;
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
        
        particlesMesh.position.y = -scrollY * 0.0008; 

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
// Animations & Preloader
// ==========================================================================
function initAnimations() {
    splitTextReveal();
    
    const brandText = document.getElementById('brand-text');
    const textContent = brandText.innerText;
    brandText.innerHTML = '';
    
    textContent.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('type-char');
        span.innerText = char;
        brandText.appendChild(span);
    });

    const tlLoader = gsap.timeline({
        onComplete: () => {
            document.body.classList.remove('loading');
            lenis.start(); 
            initScrollAnimations(); 
        }
    });

    tlLoader.to('.loader-logo-img', { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" })
            .to('.loader-percentage', { opacity: 1, duration: 0.2 }, "-=0.2")
            .to({ val: 0 }, {
                val: 100, duration: 1.5, ease: "power3.inOut",
                onUpdate: function() { document.getElementById('load-percent').innerText = Math.round(this.targets()[0].val).toString().padStart(2, '0'); }
            }, "-=0.5");

    tlLoader.to('.type-char', { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.1, stagger: 0.05, ease: "power2.out" }, "-=1.0");
    tlLoader.to('.type-char:nth-child(6), .type-char:nth-child(7)', { color: 'var(--acc)', textShadow: '0 0 20px rgba(212, 175, 55, 0.4)', duration: 0.1, yoyo: true, repeat: 3 }, "-=0.5");

    tlLoader.to('.lightning-slash', { opacity: 1, duration: 0.1 }, "-=0.2")
            .to('.lightning-slash', { left: '150%', duration: 0.4, ease: "power4.in" }, "-=0.1")
            .to('.lightning-slash', { opacity: 0, duration: 0.1 }, "-=0.1");

    tlLoader.to('.screen-flash', { opacity: 1, duration: 0.1, ease: "power2.in" })
            .to('.screen-flash', { opacity: 0, duration: 0.8, ease: "power2.out" }, "+=0.1");

    tlLoader.to('.top-shutter', { yPercent: -100, duration: 1.2, ease: "power3.inOut" }, "-=0.8")
            .to('.bottom-shutter', { yPercent: 100, duration: 1.2, ease: "power3.inOut" }, "-=1.2")
            .to('.loader', { autoAlpha: 0, display: "none", duration: 0.1 }, "-=0.2") 
            .to('.hero-logo', { opacity: 0.8, duration: 1, ease: "power3.out" }, "-=0.6")
            .to('.hero-headline .word-inner', { y: 0, duration: 1.2, stagger: 0.05, ease: "power3.out" }, "-=0.6")
            .to('.hero-subtext .word-inner', { y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
            .to('.hero-buttons.fade-up, .scroll-indicator', { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }, "-=0.6");
}

function initScrollAnimations() {
    const textReveals = document.querySelectorAll('section:not(.hero) .text-reveal');
    textReveals.forEach(text => {
        gsap.to(text.querySelectorAll('.word-inner'), { scrollTrigger: { trigger: text, start: "top 85%" }, y: 0, duration: 1.2, stagger: 0.05, ease: "power3.out" });
    });

    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach(el => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { scrollTrigger: { trigger: el, start: "top 85%" }, y: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
    });

    gsap.to('.portrait-img', { scrollTrigger: { trigger: '.about', start: "top bottom", end: "bottom top", scrub: true }, yPercent: 10, scale: 1.05 });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        ScrollTrigger.create({
            trigger: counter, start: "top 90%", once: true,
            onEnter: () => { gsap.to(counter, { innerHTML: target, duration: 2.5, snap: { innerHTML: 1 }, ease: "power3.out" }); }
        });
    });

    const tlTimeline = gsap.timeline({ scrollTrigger: { trigger: ".process-timeline", start: "top 50%", end: "bottom 50%", scrub: 1 } });
    tlTimeline.to(".timeline-progress", { height: "100%", ease: "none" });

    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        ScrollTrigger.create({ trigger: step, start: "top 60%", onEnter: () => step.classList.add('active'), onLeaveBack: () => step.classList.remove('active') });
    });
}

function initLenisAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            if(target !== '#') {
                lenis.scrollTo(target, { 
                    duration: 1.8, 
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
                });
            }
        });
    });
}

function initTilt() {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; const y = e.clientY - rect.top;
                const centerX = rect.width / 2; const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5; 
                const rotateY = ((x - centerX) / centerX) * 5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
            });
            card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
        });
    }
}

function initPortfolioFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            items.forEach(item => {
                if(filter === 'all' || item.getAttribute('data-category') === filter) {
                    gsap.to(item, { scale: 1, opacity: 1, duration: 0.5, display: 'block', ease: "power3.out" });
                } else {
                    gsap.to(item, { scale: 0.95, opacity: 0, duration: 0.4, display: 'none', ease: "power2.in" });
                }
            });
            setTimeout(() => ScrollTrigger.refresh(), 500); 
        });
    });
}

function initModalPlayer() {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    const closeBtn = document.querySelector('.modal-close-btn');
    
    document.addEventListener('click', (e) => {
        const playBtn = e.target.closest('.play-btn');
        if (playBtn) {
            const videoSrc = playBtn.getAttribute('data-video');
            if (videoSrc) {
                container.innerHTML = '';
                if (videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be')) {
                    let videoId = '';
                    if (videoSrc.includes('youtu.be/')) {
                        videoId = videoSrc.split('youtu.be/')[1].split('?')[0];
                    } else if (videoSrc.includes('youtube.com/watch?v=')) {
                        videoId = videoSrc.split('v=')[1].split('&')[0];
                    }
                    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
                } else {
                    container.innerHTML = `<video src="${videoSrc}" controls playsinline autoplay></video>`;
                }
                gsap.to(modal, { autoAlpha: 1, duration: 0.6, ease: "power3.out" });
                lenis.stop(); 
            }
        }
    });

    const closeModal = () => {
        gsap.to(modal, { autoAlpha: 0, duration: 0.5, ease: "power2.in", onComplete: () => {
            container.innerHTML = ''; 
        }});
        lenis.start(); 
    };

    closeBtn.addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
}

barba.init({
    sync: true,
    transitions: [{
        name: 'opacity-transition',
        leave(data) { return gsap.to(data.current.container, { opacity: 0, duration: 0.6, ease: "power2.inOut" }); },
        enter(data) {
            attachHoverStates(); initTilt(); initPortfolioFilters();
            return gsap.from(data.next.container, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
        }
    }]
});

window.addEventListener('DOMContentLoaded', () => {
    initThreeJS(); initAnimations(); attachHoverStates(); initTilt(); initPortfolioFilters();
});