gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// BULLETPROOF PORTFOLIO DATA
// ==========================================================================
const portfolioData = {
  "projects": [
    {
      "id": "proj-1", "title": "Tanishq 1", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/Fp5Fjn7EsWI?si=CTv8ZhRot_WtF9sL",
      "featured": true
    },
    {
      "id": "proj-2", "title": "Tanshiq 2", "categoryLabel": "Cinematic Projects", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://youtu.be/eiMKLZCQj5M?si=_jefQt6GjtfbmLx9",
      "featured": true
    },
    {
      "id": "proj-3", "title": "Shiv ki raat", "categoryLabel": "YouTube Videos", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=YmiamwKatpM",
      "featured": true
    },
    {
      "id": "proj-4", "title": "Maa", "categoryLabel": "Instagram Reels", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1516280440502-628d05260655?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/F0qJtArAGUc",
      "featured": true
    },
    {
      "id": "proj-5", "title": "Saarthi Short", "categoryLabel": "TikTok Ads", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/_2LczNDo2sM",
      "featured": false
    },
    {
      "id": "proj-6", "title": "Shubh Shuruvat", "categoryLabel": "Commercial Ads", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=vixRM6LHjJQ",
      "featured": false
    },
    {
      "id": "proj-7", "title": "HalalVish paan", "categoryLabel": "Cinematic", "format": "16x9",
      "thumbnail": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/watch?v=zyITGGf4Grw",
      "featured": false
    },
    {
      "id": "proj-8", "title": "Krishna's Flute", "categoryLabel": "Instagram Reels", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/hvkY3cVQ5zU",
      "featured": false
    },
    {
      "id": "proj-9", "title": "Shyam jab koi Raha nhi dikhe", "categoryLabel": "YouTube", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/6WKfTHZVpPU",
      "featured": false
    },
    {
      "id": "proj-10", "title": "Sukoon", "categoryLabel": "Documentary", "format": "9x16",
      "thumbnail": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800",
      "previewVideo": "https://www.youtube.com/shorts/3sR_0v7wIsc",
      "featured": false
    }
  ]
};

function getYouTubeId(url) {
    if (!url) return null;
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
    if (url.includes('youtube.com/shorts/')) return url.split('youtube.com/shorts/')[1].split('?')[0];
    if (url.includes('youtube.com/watch')) return new URL(url).searchParams.get('v');
    return null;
}

function buildInlineVideoHTML(src) {
    if (!src) return '';
    const ytId = getYouTubeId(src);
    if (ytId) {
        // HACK: Using youtube-nocookie.com to bypass strict embed restrictions
        return `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&modestbranding=1&playsinline=1&enablejsapi=1" allow="autoplay; fullscreen" title="YouTube video player"></iframe>`;
    } else {
        return `<video src="${src}" loop playsinline muted autoplay></video>`;
    }
}

const volumeOffIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
const volumeOnIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;

function getSlideControls(videoSrc) {
    return `
        <div class="slide-controls">
            <button class="sound-btn muted" onclick="toggleMute(this, event)">${volumeOffIcon}</button>
            <button class="control-btn view-full-btn" onclick="event.stopPropagation(); openVideoModal('${videoSrc}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                View Full
            </button>
        </div>
    `;
}

// ==========================================================================
// SOUND CONTROL LOGIC
// ==========================================================================
window.toggleMute = function(btn, event) {
    event.stopPropagation(); 
    const card = btn.closest('.tilt-card, .swiper-slide');
    const iframe = card.querySelector('iframe');
    const video = card.querySelector('video');
    const isMuted = btn.classList.contains('muted');
    
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({ "event": "command", "func": isMuted ? "unMute" : "mute", "args": [] }), "*");
    } else if (video) {
        video.muted = !isMuted;
    }
    
    btn.classList.toggle('muted');
    btn.innerHTML = isMuted ? volumeOnIcon : volumeOffIcon;
};

// ==========================================================================
// FEATURED WORK: INSTANT KILL LOGIC 
// ==========================================================================
function killAllCoverflowVideosImmediately(swiper) {
    swiper.slides.forEach(slide => {
        const videoContainer = slide.querySelector('.coverflow-inline-video');
        if (videoContainer && videoContainer.innerHTML !== '') {
            gsap.killTweensOf(videoContainer); 
            videoContainer.style.opacity = 0; 
            videoContainer.innerHTML = ''; 
            
            const soundBtn = slide.querySelector('.sound-btn');
            if(soundBtn) { soundBtn.classList.add('muted'); soundBtn.innerHTML = volumeOffIcon; }
        }
    });
}

function playCenterCoverflowVideo(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
        const videoSrc = activeSlide.getAttribute('data-preview-src');
        const videoContainer = activeSlide.querySelector('.coverflow-inline-video');
        if (videoContainer && videoSrc && videoContainer.innerHTML === '') {
            videoContainer.innerHTML = buildInlineVideoHTML(videoSrc);
            gsap.to(videoContainer, {opacity: 1, duration: 0.4});
        }
    }
}

// ==========================================================================
// PORTFOLIO GRID: PC HOVER & MOBILE SCROLL
// ==========================================================================
let globalHoverTimer;
let currentActiveVideoContainer = null;

function initHoverToPlay() {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document.addEventListener('mouseover', (e) => {
            const card = e.target.closest('.portfolio-item, .portfolio-slider-section .swiper-slide');
            if (!card) return;

            const videoSrc = card.getAttribute('data-preview-src');
            const videoContainer = card.querySelector('.portfolio-inline-video');
            
            if (videoContainer && videoSrc && currentActiveVideoContainer !== videoContainer) {
                clearTimeout(globalHoverTimer);
                if (currentActiveVideoContainer) {
                    currentActiveVideoContainer.innerHTML = '';
                    gsap.to(currentActiveVideoContainer, {opacity: 0, duration: 0.1});
                }
                currentActiveVideoContainer = videoContainer;

                globalHoverTimer = setTimeout(() => {
                    videoContainer.innerHTML = buildInlineVideoHTML(videoSrc);
                    gsap.to(videoContainer, {opacity: 1, duration: 0.4});
                }, 350); 
            }
        });

        document.addEventListener('mouseout', (e) => {
            const card = e.target.closest('.portfolio-item, .portfolio-slider-section .swiper-slide');
            if (!card) return;
            if (card.contains(e.relatedTarget)) return;

            const videoContainer = card.querySelector('.portfolio-inline-video');
            if (videoContainer) {
                clearTimeout(globalHoverTimer);
                gsap.to(videoContainer, {
                    opacity: 0, duration: 0.2, onComplete: () => {
                        videoContainer.innerHTML = ''; 
                        if(currentActiveVideoContainer === videoContainer) currentActiveVideoContainer = null;
                        const soundBtn = card.querySelector('.sound-btn');
                        if(soundBtn) { soundBtn.classList.add('muted'); soundBtn.innerHTML = volumeOffIcon; }
                    }
                });
            }
        });
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const card = entry.target;
                const videoSrc = card.getAttribute('data-preview-src');
                const videoContainer = card.querySelector('.portfolio-inline-video, .coverflow-inline-video'); 
                
                if(card.closest('.coverflow-swiper')) return; 

                if (entry.isIntersecting) {
                    if (videoContainer && videoContainer.innerHTML === '') {
                        videoContainer.innerHTML = buildInlineVideoHTML(videoSrc);
                        gsap.to(videoContainer, {opacity: 1, duration: 0.4});
                        card.querySelector('.slide-controls').style.opacity = 1;
                        card.querySelector('.slide-controls').style.pointerEvents = 'auto';
                    }
                } else {
                    if (videoContainer && videoContainer.innerHTML !== '') {
                        gsap.to(videoContainer, {opacity: 0, duration: 0.2, onComplete: () => {
                            videoContainer.innerHTML = '';
                            const soundBtn = card.querySelector('.sound-btn');
                            if(soundBtn) { soundBtn.classList.add('muted'); soundBtn.innerHTML = volumeOffIcon; }
                        }});
                        card.querySelector('.slide-controls').style.opacity = 0;
                        card.querySelector('.slide-controls').style.pointerEvents = 'none';
                    }
                }
            });
        }, { threshold: 0.5 }); 

        document.querySelectorAll('.portfolio-item, .horizontal-swiper .swiper-slide, .vertical-swiper .swiper-slide').forEach(card => {
            observer.observe(card);
        });
    }
}

// ==========================================================================
// Lenis Smooth Scroll Engine
// ==========================================================================
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', smooth: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{ lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
lenis.stop();

function initGhostLogo() {
    const ghostLogo = document.querySelector('.fixed-ghost-logo');
    if(!ghostLogo) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > (window.innerHeight * 0.5)) { ghostLogo.classList.add('visible'); } 
        else { ghostLogo.classList.remove('visible'); }
    });
}

function loadPortfolioData() {
    try {
        const data = portfolioData; 
        const isHomePage = document.querySelector('[data-barba-namespace="home"]') !== null;
        const isPortfolioPage = document.querySelector('[data-barba-namespace="portfolio"]') !== null;

        if (isHomePage) {
            const featuredGrid = document.querySelector('#dynamic-featured');
            if(featuredGrid) {
                featuredGrid.innerHTML = '';
                let featuredProjects = data.projects.filter(p => p.featured);
                if (featuredProjects.length > 0 && featuredProjects.length < 5) {
                    featuredProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];
                }

                featuredProjects.forEach((project) => {
                    const projHTML = `
                        <div class="swiper-slide tilt-card" data-preview-src="${project.previewVideo}" onclick="openVideoModal('${project.previewVideo}')">
                            <img src="${project.thumbnail}" alt="${project.title}" class="coverflow-img">
                            <div class="coverflow-inline-video"></div>
                            ${getSlideControls(project.previewVideo)}
                            <div class="coverflow-info">
                                <h3>${project.title}</h3>
                                <p>${project.categoryLabel}</p>
                            </div>
                        </div>
                    `;
                    featuredGrid.insertAdjacentHTML('beforeend', projHTML);
                });
            }

            const portfolioGrid = document.querySelector('#dynamic-portfolio'); 
            if (portfolioGrid) {
                portfolioGrid.innerHTML = ''; 
                const top4Projects = data.projects.slice(0, 4);
                
                top4Projects.forEach((project, index) => {
                    const delay = index * 0.1; 
                    const projectHTML = `
                        <div class="portfolio-item tilt-card fade-up" style="transition-delay: ${delay}s;" data-preview-src="${project.previewVideo}" onclick="openVideoModal('${project.previewVideo}')">
                            <div class="portfolio-thumb">
                                <img src="${project.thumbnail}" alt="${project.title}">
                                <div class="portfolio-inline-video"></div>
                                ${getSlideControls(project.previewVideo)}
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
            const horizontalGrid = document.querySelector('#dynamic-16x9');
            const verticalGrid = document.querySelector('#dynamic-9x16');

            if (horizontalGrid && verticalGrid) {
                horizontalGrid.innerHTML = '';
                verticalGrid.innerHTML = '';

                data.projects.forEach(project => {
                    const slideHTML = `
                        <div class="swiper-slide tilt-card" data-preview-src="${project.previewVideo}" onclick="openVideoModal('${project.previewVideo}')">
                            <div class="portfolio-thumb" style="margin:0; height:100%;">
                                <img src="${project.thumbnail}" alt="${project.title}">
                                <div class="portfolio-inline-video"></div>
                                ${getSlideControls(project.previewVideo)}
                            </div>
                        </div>
                    `;
                    if(project.format === '16x9') horizontalGrid.insertAdjacentHTML('beforeend', slideHTML);
                    else if (project.format === '9x16') verticalGrid.insertAdjacentHTML('beforeend', slideHTML);
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
    
    initHoverToPlay();

    if(document.querySelector('.coverflow-swiper')) {
        new Swiper('.coverflow-swiper', {
            effect: 'coverflow', grabCursor: true, centeredSlides: true, slidesPerView: 'auto',
            loop: true, loopedSlides: 5, 
            coverflowEffect: { rotate: 0, stretch: 0, depth: 200, modifier: 1.5, slideShadows: false },
            navigation: { nextEl: '.featured-next', prevEl: '.featured-prev' },
            slideToClickedSlide: true,
            on: {
                init: function () {
                    setTimeout(() => playCenterCoverflowVideo(this), 800);
                },
                sliderMove: function () {
                    killAllCoverflowVideosImmediately(this);
                },
                slideChangeTransitionStart: function () {
                    killAllCoverflowVideosImmediately(this);
                },
                slideChangeTransitionEnd: function () {
                    playCenterCoverflowVideo(this);
                }
            }
        });
    }

    if(document.querySelector('.horizontal-swiper')) {
        new Swiper('.horizontal-swiper', { slidesPerView: 'auto', spaceBetween: 30, grabCursor: true, navigation: { nextEl: '.next-16x9', prevEl: '.prev-16x9' } });
    }
    if(document.querySelector('.vertical-swiper')) {
        new Swiper('.vertical-swiper', { slidesPerView: 'auto', spaceBetween: 30, grabCursor: true, navigation: { nextEl: '.next-9x16', prevEl: '.prev-9x16' } });
    }

    setTimeout(() => { ScrollTrigger.refresh(); }, 500);
}

function splitTextReveal() {
    const reveals = document.querySelectorAll('.text-reveal');
    reveals.forEach(el => {
        const text = el.innerText;
        el.innerHTML = '';
        const words = text.split(' ');
        words.forEach(word => {
            const wordSpan = document.createElement('span'); wordSpan.classList.add('word');
            const innerSpan = document.createElement('span'); innerSpan.classList.add('word-inner');
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
    const links = document.querySelectorAll('a, button, .magnetic-element, .slider-btn, .control-btn');
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

function initThreeJS() {
    const canvas = document.querySelector('#webgl-canvas');
    if (!canvas) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 400; 
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 20; 
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const material = new THREE.PointsMaterial({ size: 0.004, color: 0xE2B938, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
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
        particlesMesh.rotation.y = elapsedTime * 0.02; 
        particlesMesh.rotation.x = elapsedTime * 0.01;
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
        particlesMesh.position.y = -scrollY * 0.0005; 
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
// SPEED & SCROLL UNLOCK OPTIMIZATION
// ==========================================================================
function initAnimations() {
    splitTextReveal();
    const brandText = document.getElementById('brand-text');
    const tlLoader = gsap.timeline();

    // 1. Initial Logo & Loader setup
    tlLoader.to('.loader-logo-img', { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" })
            .to('.loader-percentage', { opacity: 1, duration: 0.2 }, "-=0.2")
            .to({ val: 0 }, { val: 100, duration: 0.8, ease: "power3.inOut", onUpdate: function() { 
                const pct = document.getElementById('load-percent');
                if(pct) pct.innerText = Math.round(this.targets()[0].val).toString().padStart(2, '0'); 
            } }, "-=0.5");

    // 2. Homepage Specific text typing (Only runs if brandText exists)
    if(brandText) {
        const textContent = brandText.innerText;
        brandText.innerHTML = '';
        
        textContent.split('').forEach(char => {
            const span = document.createElement('span');
            span.classList.add('type-char'); span.innerText = char;
            brandText.appendChild(span);
        });

        tlLoader.to('.type-char', { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.05, stagger: 0.03, ease: "power2.out" }, "-=0.5")
                .to('.type-char:nth-child(6), .type-char:nth-child(7)', { color: 'var(--acc)', textShadow: '0 0 20px rgba(226, 185, 56, 0.4)', duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2")
                .to('.lightning-slash', { opacity: 1, duration: 0.1 }, "-=0.1")
                .to('.lightning-slash', { left: '150%', duration: 0.3, ease: "power4.in" }, "-=0.1")
                .to('.lightning-slash', { opacity: 0, duration: 0.1 }, "-=0.1")
                .to('.screen-flash', { opacity: 1, duration: 0.1, ease: "power2.in" })
                .to('.screen-flash', { opacity: 0, duration: 0.5, ease: "power2.out" }, "+=0.1");
    }

    // 3. OPENS SHUTTER AND UNLOCKS SCROLL IMMEDIATELY (Fixes the 8 second wait!)
    tlLoader.to('.top-shutter', { yPercent: -100, duration: 0.8, ease: "power3.inOut" }, "+=0.1")
            .to('.bottom-shutter', { yPercent: 100, duration: 0.8, ease: "power3.inOut" }, "-=0.8")
            .to('.loader', { autoAlpha: 0, display: "none", duration: 0.1 }, "-=0.2")
            .call(() => {
                // Yahan lock hat gaya!
                document.body.classList.remove('loading');
                lenis.start(); 
                initScrollAnimations(); 
            });

    // 4. Reveal Hero UI Elements 
    if(document.querySelector('.hero-logo')) {
        tlLoader.to('.hero-logo', { opacity: 0.9, duration: 0.8, ease: "power3.out" }, "-=0.4")
                .to('.hero-subtext .word-inner', { y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
                .to('.hero-buttons.fade-up, .scroll-indicator', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.6");
    }
}

function initScrollAnimations() {
    const textReveals = document.querySelectorAll('section:not(.hero) .text-reveal');
    textReveals.forEach(text => { gsap.to(text.querySelectorAll('.word-inner'), { scrollTrigger: { trigger: text, start: "top 85%" }, y: 0, duration: 1.2, stagger: 0.05, ease: "power3.out" }); });
    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach(el => { gsap.fromTo(el, { y: 40, opacity: 0 }, { scrollTrigger: { trigger: el, start: "top 85%" }, y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }); });
}

function initTilt() {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
                const centerX = rect.width / 2; const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5; const rotateY = ((x - centerX) / centerX) * 5;
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

function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    container.innerHTML = '';
    const ytId = getYouTubeId(videoSrc);
    if (ytId) {
        // HACK: Using youtube-nocookie.com for the full screen modal too
        container.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&hd=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else {
        container.innerHTML = `<video src="${videoSrc}" controls playsinline autoplay></video>`;
    }
    gsap.to(modal, { autoAlpha: 1, duration: 0.4, ease: "power3.out" });
    lenis.stop(); 
}

function initModalPlayer() {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('modalVideoContainer');
    const closeBtn = document.querySelector('.modal-close-btn');

    const closeModal = () => {
        gsap.to(modal, { autoAlpha: 0, duration: 0.4, ease: "power2.in", onComplete: () => { container.innerHTML = ''; }});
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
        leave(data) { return gsap.to(data.current.container, { opacity: 0, duration: 0.5, ease: "power2.inOut" }); },
        enter(data) {
            window.scrollTo(0, 0); lenis.scrollTo(0, { immediate: true });
            loadPortfolioData(); attachHoverStates(); initTilt(); 
            return gsap.from(data.next.container, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
        }
    }]
});

window.addEventListener('DOMContentLoaded', () => {
    initThreeJS(); initAnimations(); attachHoverStates(); initTilt(); loadPortfolioData(); initModalPlayer(); initGhostLogo(); 
});

// ==========================================================================
// BULLETPROOF CONTACT FORM AJAX SUBMISSION
// ==========================================================================
window.submitForm = async function(event) {
    const form = event.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerText;
    
    submitBtn.innerText = 'Sending...';
    submitBtn.style.opacity = '0.7';
    submitBtn.style.pointerEvents = 'none';

    const formData = new FormData(form);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            submitBtn.innerText = 'Message Sent! ✓';
            submitBtn.style.background = '#25D366'; 
            submitBtn.style.color = '#fff';
            submitBtn.style.borderColor = '#25D366';
            submitBtn.style.opacity = '1';
            
            form.reset(); 
            
            setTimeout(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                submitBtn.style.borderColor = '';
                submitBtn.style.pointerEvents = 'auto';
            }, 5000);
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        submitBtn.innerText = 'Error! Try again.';
        submitBtn.style.background = '#E1306C'; 
        submitBtn.style.opacity = '1';
        
        setTimeout(() => {
            submitBtn.innerText = originalBtnText;
            submitBtn.style.background = '';
            submitBtn.style.pointerEvents = 'auto';
        }, 3000);
    }
};