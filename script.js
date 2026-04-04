gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// BULLETPROOF PORTFOLIO DATA (Solves the Blank Page Git/Fetch Bug entirely)
// ==========================================================================
const portfolioData = {
  "projects": [
    {
      "id": "proj-1",
      "title": "Naavdurga",
      "categoryLabel": "Commercial Ads",
      "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=vT-GP604Wds",
      "featured": true
    },
    {
      "id": "proj-2",
      "title": "Saarthi",
      "categoryLabel": "Cinematic Projects",
      "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=S1CySzctSc8",
      "featured": true
    },
    {
      "id": "proj-3",
      "title": "Shiv ki raat",
      "categoryLabel": "YouTube Videos",
      "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=YmiamwKatpM",
      "featured": true
    },
    {
      "id": "proj-4",
      "title": "Maa",
      "categoryLabel": "Instagram Reels",
      "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1516280440502-628d05260655?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/F0qJtArAGUc",
      "featured": true
    },
    {
      "id": "proj-5",
      "title": "Saarthi Short",
      "categoryLabel": "TikTok Ads",
      "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/_2LczNDo2sM",
      "featured": false
    },
    {
      "id": "proj-6",
      "title": "Shubh Shuruvat",
      "categoryLabel": "Commercial Ads",
      "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=vixRM6LHjJQ",
      "featured": false
    }
  ]
};

// Tool to extract YouTube IDs
function getYouTubeId(url) {
    if (!url) return null;
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
    if (url.includes('youtube.com/shorts/')) return url.split('youtube.com/shorts/')[1].split('?')[0];
    if (url.includes('youtube.com/watch')) return new URL(url).searchParams.get('v');
    return null;
}

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
gsap.ticker.add((time)=>{ lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
lenis.stop();

function initGhostLogo() {
    const ghostLogo = document.querySelector('.fixed-ghost-logo');
    if(!ghostLogo) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > (window.innerHeight * 0.5)) {
            ghostLogo.classList.add('visible');
        } else {
            ghostLogo.classList.remove('visible');
        }
    });
}

// ==========================================================================
// DOM Loading & Injection
// ==========================================================================
function loadPortfolioData() {
    try {
        const data = portfolioData; 
        
        const isHomePage = document.querySelector('[data-barba-namespace="home"]') !== null;
        const isPortfolioPage = document.querySelector('[data-barba-namespace="portfolio"]') !== null;

        if (isHomePage) {
            // A. INJECT 3D COVERFLOW FEATURED PROJECTS WITH INLINE VIDEO
            const featuredGrid = document.querySelector('#dynamic-featured');
            if(featuredGrid) {
                featuredGrid.innerHTML = '';
                let featuredProjects = data.projects.filter(p => p.featured);
                
                // Duplicate if less than 5 to prevent Swiper 3D glitch
                if (featuredProjects.length > 0 && featuredProjects.length < 5) {
                    featuredProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];
                }

                featuredProjects.forEach((project) => {
                    const projHTML = `
                        <div class="swiper-slide" data-video="${project.previewVideo}">
                            <div class="coverflow-inline-video"></div>
                            <img src="${project.thumbnail}" alt="${project.title}" class="coverflow-img">
                            <div class="coverflow-info">
                                <h3>${project.title}</h3>
                                <p>${project.categoryLabel}</p>
                            </div>
                            <div class="slide-controls">
                                <button class="control-btn play-pause-btn">Pause</button>
                                <button class="control-btn view-full-btn" data-video="${project.previewVideo}">View Full</button>
                            </div>
                        </div>
                    `;
                    featuredGrid.insertAdjacentHTML('beforeend', projHTML);
                });
            }

            // B. INJECT TRUNCATED PORTFOLIO (TOP 4)
            const portfolioGrid = document.querySelector('#dynamic-portfolio'); 
            if (portfolioGrid) {
                portfolioGrid.innerHTML = ''; 
                const top4Projects = data.projects.slice(0, 4);
                
                top4Projects.forEach((project, index) => {
                    const delay = index * 0.1; 
                    const projectHTML = `
                        <div class="portfolio-item tilt-card fade-up" data-video="${project.previewVideo}" style="transition-delay: ${delay}s;">
                            <div class="portfolio-thumb">
                                <img src="${project.thumbnail}" alt="${project.title}">
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
        }

        if (isPortfolioPage) {
            // C. INJECT DEDICATED PORTFOLIO SLIDERS
            const horizontalGrid = document.querySelector('#dynamic-16x9');
            const verticalGrid = document.querySelector('#dynamic-9x16');

            if (horizontalGrid && verticalGrid) {
                horizontalGrid.innerHTML = '';
                verticalGrid.innerHTML = '';

                data.projects.forEach(project => {
                    const slideHTML = `
                        <div class="swiper-slide tilt-card" data-video="${project.previewVideo}">
                            <div class="portfolio-thumb" style="margin:0; height:100%;">
                                <img src="${project.thumbnail}" alt="${project.title}">
                            </div>
                        </div>
                    `;

                    if(project.format === '16x9') {
                        horizontalGrid.insertAdjacentHTML('beforeend', slideHTML);
                    } else if (project.format === '9x16') {
                        verticalGrid.insertAdjacentHTML('beforeend', slideHTML);
                    }
                });
            }
        }

        initializePostLoadEffects();

    } catch (error) {
        console.error("Error loading portfolio:", error);
    }
}

function initializePostLoadEffects() {
    if (typeof initTilt === "function") initTilt();
    if (typeof attachHoverStates === "function") attachHoverStates();

    // 1. Init 3D Coverflow Swiper WITH INLINE PLAY LOGIC
    if(document.querySelector('.coverflow-swiper')) {
        new Swiper('.coverflow-swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            loopedSlides: 5, 
            coverflowEffect: {
                rotate: 0, stretch: 0, depth: 200, modifier: 1.5, slideShadows: false,
            },
            navigation: { nextEl: '.featured-next', prevEl: '.featured-prev' },
            on: {
                slideChangeTransitionEnd: function () {
                    // Clear all iframes first to pause them
                    document.querySelectorAll('.coverflow-inline-video').forEach(container => {
                        container.innerHTML = '';
                        container.style.opacity = '0';
                    });
                    
                    // Play newly active slide inline!
                    const activeSlide = this.slides[this.activeIndex];
                    const videoContainer = activeSlide.querySelector('.coverflow-inline-video');
                    const videoSrc = activeSlide.getAttribute('data-video');
                    
                    if(videoSrc && videoContainer) {
                        const ytId = getYouTubeId(videoSrc);
                        if(ytId) {
                            const iframeHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&modestbranding=1&playsinline=1" allow="autoplay; fullscreen" style="width:100%; height:100%; pointer-events:none; border:none;"></iframe>`;
                            videoContainer.innerHTML = iframeHTML;
                            videoContainer.style.opacity = '1';
                            
                            const playPauseBtn = activeSlide.querySelector('.play-pause-btn');
                            if(playPauseBtn) {
                                playPauseBtn.innerText = "Pause";
                                const newBtn = playPauseBtn.cloneNode(true);
                                playPauseBtn.parentNode.replaceChild(newBtn, playPauseBtn);
                                
                                newBtn.addEventListener('click', (e) => {
                                    e.stopPropagation(); 
                                    if(videoContainer.innerHTML !== '') {
                                        videoContainer.innerHTML = '';
                                        videoContainer.style.opacity = '0';
                                        newBtn.innerText = "Play";
                                    } else {
                                        videoContainer.innerHTML = iframeHTML;
                                        videoContainer.style.opacity = '1';
                                        newBtn.innerText = "Pause";
                                    }
                                });
                            }
                        }
                    }
                }
            }
        });
        
        document.querySelectorAll('.view-full-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const videoSrc = btn.getAttribute('data-video');
                if(videoSrc) openVideoModal(videoSrc);
            });
        });
    }

    // 2. Init Dedicated Portfolio Swipers
    if(document.querySelector('.horizontal-swiper')) {
        new Swiper('.horizontal-swiper', {
            slidesPerView: 'auto', spaceBetween: 30, grabCursor: true,
            navigation: { nextEl: '.next-16x9', prevEl: '.prev-16x9' },
        });
    }
    if(document.querySelector('.vertical-swiper')) {
        new Swiper('.vertical-swiper', {
            slidesPerView: 'auto', spaceBetween: 30, grabCursor: true,
            navigation: { nextEl: '.next-9x16', prevEl: '.prev-9x16' },
        });
    }

    setTimeout(() => { ScrollTrigger.refresh(); }, 500);

    // Modal Triggers for Portfolio Items
    document.querySelectorAll('.portfolio-item[data-video], .portfolio-page .swiper-slide[data-video]').forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = item.getAttribute('data-video');
            if(videoSrc) openVideoModal(videoSrc);
        });
    });
}

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
            if (word === '<br>') { el.appendChild(document.createElement('br')); } 
            else { innerSpan.innerHTML = word + '&nbsp;'; wordSpan.appendChild(innerSpan); el.appendChild(wordSpan); }
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
    const portfolios = document.querySelectorAll('.portfolio-item, .swiper-slide');

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

    for(let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 15; 

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.003, color: 0xD4AF37, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
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
    window.addEventListener('scroll', () => { scrollY = window.scrollY; });

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
    if(!brandText) return;
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
            .to('.hero-logo', { opacity: 0.9, duration: 1, ease: "power3.out" }, "-=0.6")
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
                lenis.scrollTo(target, { duration: 1.8, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
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

// ==========================================================================
// Dynamic Smart Player 
// ==========================================================================
function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    
    container.innerHTML = '';
    const ytId = getYouTubeId(videoSrc);
    
    if (ytId) {
        container.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else {
        container.innerHTML = `<video src="${videoSrc}" controls playsinline autoplay></video>`;
    }
    gsap.to(modal, { autoAlpha: 1, duration: 0.6, ease: "power3.out" });
    lenis.stop(); 
}

function initModalPlayer() {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    const closeBtn = document.querySelector('.modal-close-btn');
    
    const closeModal = () => {
        gsap.to(modal, { autoAlpha: 0, duration: 0.5, ease: "power2.in", onComplete: () => {
            container.innerHTML = ''; 
        }});
        lenis.start(); 
    };

    closeBtn.addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
}

// ==========================================================================
// Barba Page Transitions 
// ==========================================================================
barba.init({
    sync: true,
    transitions: [{
        name: 'opacity-transition',
        leave(data) { return gsap.to(data.current.container, { opacity: 0, duration: 0.6, ease: "power2.inOut" }); },
        enter(data) {
            // Because we don't fetch, we can just call loadPortfolioData synchronously
            loadPortfolioData();
            attachHoverStates(); 
            initTilt(); 
            initLenisAnchors();
            return gsap.from(data.next.container, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
        }
    }]
});

window.addEventListener('DOMContentLoaded', () => {
    initThreeJS(); initAnimations(); attachHoverStates(); initTilt(); loadPortfolioData(); initModalPlayer(); initLenisAnchors(); initGhostLogo(); 
});