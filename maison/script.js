/* ═══════════════════════════════════════════
   MAISON NOIR — JavaScript Engine
   Enhanced with Premium Effects:
   Dome Gallery, Falling Text, Glass Hover,
   Text Color Change, Masonry, Scroll Reveal,
   Scroll Stack, Scroll Velocity, Count Up
   ═══════════════════════════════════════════ */

// ── Property Data ──
const propertyData = {
  1: {
    location: 'Beverly Hills, California',
    title: 'The Skyline Penthouse',
    price: '$24,500,000',
    beds: '5', baths: '6', sqft: '8,200', year: '2023',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
    description: 'Perched atop the most coveted address in Beverly Hills, this architectural triumph offers panoramic views stretching from the Pacific to downtown Los Angeles. The residence features a private rooftop infinity pool, a chef\'s kitchen with Gaggenau appliances, imported Italian marble throughout, and a home theater that rivals the finest screening rooms. An elevator serves all four floors of uncompromising luxury, while floor-to-ceiling glass walls dissolve the boundary between indoor opulence and the breathtaking California landscape.'
  },
  2: {
    location: 'Miami Beach, Florida',
    title: 'Azure Waterfront Estate',
    price: '$38,900,000',
    beds: '7', baths: '9', sqft: '12,400', year: '2024',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
    description: 'A breathtaking waterfront masterpiece on Miami Beach\'s prestigious Millionaire\'s Row. This estate commands 200 feet of pristine waterfront with a private deep-water dock accommodating vessels up to 120 feet. The residence showcases museum-quality interiors, a resort-style pool pavilion, summer kitchen, wine cellar with 3,000-bottle capacity, and a separate guest house. Smart home technology integrates seamlessly with sustainable luxury design, creating an unparalleled living experience.'
  },
  3: {
    location: 'Malibu, California',
    title: 'Pacific Ridge Villa',
    price: '$31,200,000',
    beds: '6', baths: '7', sqft: '9,800', year: '2022',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
    description: 'Commanding an elevated bluff along Malibu\'s most exclusive stretch, this contemporary villa merges visionary architecture with the raw beauty of the Pacific coastline. Floor-to-ceiling glass walls capture uninterrupted ocean views, while the open-plan living spaces flow effortlessly to expansive terraces. Features include a negative-edge pool, spa, professional gym, and a sculptural staircase that serves as the home\'s centerpiece.'
  },
  4: {
    location: 'Aspen, Colorado',
    title: 'Summit Crown Estate',
    price: '$52,000,000',
    beds: '8', baths: '10', sqft: '15,600', year: '2021',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85',
    description: 'The crown jewel of Aspen\'s Red Mountain, this trophy estate offers 360-degree views of all four ski mountains. Masterfully crafted with reclaimed timber, native stone, and museum-quality finishes, the residence embodies mountain luxury at its finest. Amenities include a private ski-in trail, indoor lap pool, bowling alley, wine grotto, and an observatory. The 5-acre compound provides absolute privacy while remaining minutes from Aspen\'s world-class dining and cultural scene.'
  },
  5: {
    location: 'Manhattan, New York',
    title: 'The Park Avenue Crown',
    price: '$45,000,000',
    beds: '4', baths: '5', sqft: '6,200', year: '2025',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85',
    description: 'Occupying the entire top floor of Park Avenue\'s most prestigious new tower, this penthouse offers unobstructed views of Central Park from every room. The residence features 13-foot ceilings, a private landing for the building\'s exclusive elevator, and interiors designed by a world-renowned atelier. A wrap-around terrace encircles the home, creating an outdoor living experience unmatched in Manhattan.'
  },
  6: {
    location: 'Monaco, French Riviera',
    title: 'Côte d\'Azur Residence',
    price: '€28,500,000',
    beds: '5', baths: '6', sqft: '7,800', year: '2023',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85',
    description: 'An extraordinary residence overlooking the glittering Mediterranean, steps from the Casino de Monte-Carlo. This architectural gem combines French Riviera elegance with cutting-edge design: retractable glass walls open to a limestone terrace with infinity pool, while interiors feature hand-selected marbles, bespoke joinery, and a curated art collection. Private garage accommodates 4 vehicles, and the residence includes a dedicated wellness suite and private cinema.'
  }
};

// ── Preloader ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 2200);
});
document.body.style.overflow = 'hidden';

// ══════════════════════════════════════════════
//  HERO IMAGE SEQUENCE — Scroll-Driven Cinema
// ══════════════════════════════════════════════
(function initHeroSequence() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const heroWrapper = document.querySelector('.hero-sequence-wrapper');
  const heroContent = document.querySelector('.hero-content');
  const heroScroll = document.querySelector('.hero-scroll');
  const loader = document.getElementById('heroLoader');
  const loaderBar = loader ? loader.querySelector('.hero-sequence-loader-bar') : null;

  const TOTAL_FRAMES = 80;
  const BASE_NAME = 'Create_a_hyperrealistic_1080p_202602230105_';
  const IMG_DIR = 'assets/hero-sequence/';
  const frames = [];
  let loadedCount = 0;
  let currentFrame = 0;
  let animationFrame = null;
  let isReady = false;

  // Build image paths
  function getFramePath(index) {
    return IMG_DIR + BASE_NAME + String(index).padStart(3, '0') + '.jpg';
  }

  // Resize canvas to match viewport
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (isReady) drawFrame(currentFrame);
  }

  // Draw a specific frame on the canvas (cover-fit)
  function drawFrame(index) {
    const img = frames[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover-fit calculation
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  // Preload all frames
  function preloadFrames() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        const pct = (loadedCount / TOTAL_FRAMES) * 100;

        // Inline hack: set bar width via a style override
        if (loaderBar) {
          loaderBar.style.background = `linear-gradient(90deg, #9a7b2e ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
        }

        // First frame loaded — draw immediately
        if (loadedCount === 1 && i === 0) {
          resizeCanvas();
          drawFrame(0);
        }

        // All frames loaded
        if (loadedCount === TOTAL_FRAMES) {
          isReady = true;
          if (loader) loader.classList.add('loaded');
          resizeCanvas();
          drawFrame(currentFrame);
        }
      };
      img.onerror = () => {
        loadedCount++;
        console.warn('Failed to load frame:', getFramePath(i));
      };
      frames[i] = img;
    }
  }

  // Scroll handler — map scroll progress to frame index
  function onScroll() {
    if (!isReady) return;

    const rect = heroWrapper.getBoundingClientRect();
    const wrapperHeight = heroWrapper.offsetHeight;
    const viewportHeight = window.innerHeight;

    // scrollProgress: 0 at top, 1 when bottom of wrapper hits bottom of viewport
    const scrolled = -rect.top;
    const maxScroll = wrapperHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

    // Map progress to frame index
    const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));

    if (targetFrame !== currentFrame) {
      currentFrame = targetFrame;
      drawFrame(currentFrame);
    }

    // Fade out hero content as user scrolls (fade over first 30% of scroll)
    const contentFade = 1 - Math.min(1, progress / 0.3);
    if (heroContent) {
      heroContent.style.opacity = contentFade;
      heroContent.style.transform = `translateY(${(1 - contentFade) * -40}px)`;
    }

    // Hide scroll indicator once scrolling starts
    if (heroScroll) {
      if (progress > 0.02) {
        heroScroll.classList.add('hidden');
      } else {
        heroScroll.classList.remove('hidden');
      }
    }
  }

  // Throttled scroll via RAF
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Initialize
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('scroll', handleScroll, { passive: true });
  resizeCanvas();
  preloadFrames();
})();

// ── Header Scroll Effect ──
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
}, { passive: true });

// ── Mobile Menu ──
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mainNav.classList.toggle('mobile-open');
  document.body.style.overflow = mainNav.classList.contains('mobile-open') ? 'hidden' : 'auto';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mainNav.classList.remove('mobile-open');
    document.body.style.overflow = 'auto';
  });
});

// ══════════════════════════════════════════════
//  SCROLL REVEAL — Enhanced IntersectionObserver
// ══════════════════════════════════════════════
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);
      revealObserver.unobserve(el);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach((el) => {
  // Stagger siblings
  const parent = el.parentElement;
  const siblings = parent.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const indexInParent = Array.from(siblings).indexOf(el);
  el.dataset.delay = indexInParent * 120;
  revealObserver.observe(el);
});

// ══════════════════════════════════════════════
//  COUNT-UP ANIMATION — Enhanced
// ══════════════════════════════════════════════
const counterElements = document.querySelectorAll('[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '+';
      animateCounter(el, target, prefix, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counterElements.forEach(el => counterObserver.observe(el));

function animateCounter(el, target, prefix, suffix) {
  const duration = 2500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo for dramatic count-up effect
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(eased * target);

    el.textContent = prefix + current.toLocaleString() + suffix;

    // Add pulse effect at milestones
    if (progress > 0.5 && progress < 0.52) {
      el.style.transform = 'scale(1.1)';
      el.style.transition = 'transform 0.3s';
    } else if (progress > 0.55) {
      el.style.transform = 'scale(1)';
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Final value with emphasis
      el.textContent = prefix + target.toLocaleString() + suffix;
      el.style.transform = 'scale(1.05)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 200);
    }
  }
  requestAnimationFrame(update);
}

// ══════════════════════════════════════════════
//  GLASS HOVER EFFECT — Mouse tracking
// ══════════════════════════════════════════════
document.querySelectorAll('.glass-hover').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  });
});

// ══════════════════════════════════════════════
//  TEXT COLOR CHANGE ON CURSOR HOVER
// ══════════════════════════════════════════════
document.querySelectorAll('.nav-hover-color').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.color = '#c9a84c';
    el.style.textShadow = '0 0 20px rgba(201,168,76,0.3)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.color = '';
    el.style.textShadow = '';
  });
});

// Text hover color for headings - proximity-based color shift
document.querySelectorAll('.text-hover-color').forEach(heading => {
  heading.addEventListener('mousemove', (e) => {
    const rect = heading.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    // Shift hue based on x position
    const hue = 30 + x * 30; // subtle gold to warm
    heading.style.color = `hsl(${hue}, 65%, 60%)`;
    heading.style.textShadow = `0 0 30px hsla(${hue}, 65%, 50%, 0.2)`;
  });
  heading.addEventListener('mouseleave', () => {
    heading.style.color = '';
    heading.style.textShadow = '';
  });
});

// ══════════════════════════════════════════════
//  DOME GALLERY — Infinite Scroll + 3D Perspective
// ══════════════════════════════════════════════
(function initDomeGallery() {
  const track = document.querySelector('.dome-gallery-track');
  if (!track) return;

  // Duplicate cards for infinite scroll
  const cards = track.querySelectorAll('.dome-card');
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  // Mouse parallax on dome cards
  const wrapper = document.querySelector('.dome-gallery-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      track.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 3}deg)`;
    });
    wrapper.addEventListener('mouseleave', () => {
      track.style.transform = '';
    });
  }
})();

// ══════════════════════════════════════════════
//  SCROLL STACK CARDS (About Section)
// ══════════════════════════════════════════════
(function initScrollStack() {
  const stackCards = document.querySelectorAll('.scroll-stack-card');
  if (!stackCards.length) return;

  const stackObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.parentElement.querySelectorAll('.scroll-stack-card');
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add('stacked');
          }, i * 200);
        });
        stackObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  // Observe the first card as trigger
  stackObserver.observe(stackCards[0]);
})();

// ══════════════════════════════════════════════
//  SCROLL VELOCITY ANIMATION (CTA Section)
// ══════════════════════════════════════════════
(function initScrollVelocity() {
  const velocityText = document.querySelector('.velocity-text');
  if (!velocityText) return;

  let lastScrollY = window.scrollY;
  let velocity = 0;
  let raf;

  function updateVelocity() {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;
    velocity = velocity * 0.85 + delta * 0.15; // Smooth velocity
    lastScrollY = currentScrollY;

    // Apply velocity-based effects
    const absVelocity = Math.abs(velocity);
    const skew = Math.max(-8, Math.min(8, velocity * 0.3));
    const scale = 1 + Math.min(absVelocity * 0.002, 0.08);
    const spacing = Math.min(absVelocity * 0.3, 12);

    velocityText.style.transform = `skewX(${skew}deg) scaleY(${scale})`;
    velocityText.style.letterSpacing = `${spacing}px`;

    raf = requestAnimationFrame(updateVelocity);
  }

  // Only run when CTA section is visible
  const velocityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lastScrollY = window.scrollY;
        raf = requestAnimationFrame(updateVelocity);
      } else {
        cancelAnimationFrame(raf);
        velocityText.style.transform = '';
        velocityText.style.letterSpacing = '';
      }
    });
  }, { threshold: 0.1 });

  const ctaSection = document.getElementById('cta-velocity');
  if (ctaSection) velocityObserver.observe(ctaSection);
})();

// ══════════════════════════════════════════════
//  PROPERTY FILTER
// ══════════════════════════════════════════════
const filterTabs = document.querySelectorAll('.filter-tab');
const propertyCards = document.querySelectorAll('.property-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    propertyCards.forEach((card, i) => {
      const category = card.dataset.category;
      const show = filter === 'all' || category === filter;

      if (show) {
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.display = '';

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 80);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 400);
      }
    });
  });
});

// ══════════════════════════════════════════════
//  PROPERTY MODAL
// ══════════════════════════════════════════════
const modal = document.getElementById('propertyModal');
const modalClose = document.getElementById('modalClose');

function openModal(propertyId) {
  const data = propertyData[propertyId];
  if (!data) return;

  document.getElementById('modalImage').src = data.image;
  document.getElementById('modalImage').alt = data.title;
  document.getElementById('modalLocation').textContent = data.location;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalPrice').textContent = data.price;
  document.getElementById('modalBeds').textContent = data.beds;
  document.getElementById('modalBaths').textContent = data.baths;
  document.getElementById('modalSqft').textContent = data.sqft.toLocaleString ? data.sqft : data.sqft;
  document.getElementById('modalYear').textContent = data.year;
  document.getElementById('modalDescription').textContent = data.description;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Property card click handlers
document.querySelectorAll('.property-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.property;
    openModal(id);
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Favorites Toggle ──
document.querySelectorAll('.property-card-fav').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.style.color = btn.textContent === '♥' ? '#c9a84c' : '';
  });
});

// ── Contact Form ──
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.textContent = '✓ Request Received';
    btn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    btn.style.opacity = '1';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }, 1500);
});

// ── Smooth Scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});

// ── Chat Widget ──
document.getElementById('chatBtn').addEventListener('click', () => {
  alert('Live chat would connect here. For now, please use the contact form or call our private line at +1 (310) 555-0190.');
});

// ── Gallery dots interaction (modal) ──
document.querySelectorAll('.modal-gallery-dot').forEach((dot, i) => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.modal-gallery-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// ── Newsletter ──
document.querySelector('.footer-newsletter button').addEventListener('click', () => {
  const input = document.querySelector('.footer-newsletter input');
  if (input.value && input.value.includes('@')) {
    input.value = '';
    const btn = document.querySelector('.footer-newsletter button');
    btn.textContent = '✓';
    setTimeout(() => { btn.textContent = 'Join'; }, 2000);
  }
});

// ── Cursor Glow Effect (Desktop only) ──
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

// ══════════════════════════════════════════════
//  PARALLAX SCROLL REVEAL (Enhanced)
// ══════════════════════════════════════════════
(function initParallaxReveal() {
  // Add parallax depth effect to certain sections while scrolling
  const aboutImage = document.querySelector('.about-image img');
  const ctaBg = document.querySelector('.cta-banner-bg img');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Parallax on about image
    if (aboutImage) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + aboutSection.offsetHeight);
          aboutImage.style.transform = `translateY(${(progress - 0.5) * -40}px) scale(1.05)`;
        }
      }
    }

    // Parallax on CTA background
    if (ctaBg) {
      const ctaSection = document.getElementById('cta-velocity');
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + ctaSection.offsetHeight);
          ctaBg.style.transform = `translateY(${(progress - 0.5) * -30}px) scale(1.1)`;
        }
      }
    }
  }, { passive: true });
})();

console.log('%c MAISON NOIR ', 'background: #c9a84c; color: #0a0a0c; font-family: Georgia; font-size: 14px; padding: 8px 16px; letter-spacing: 4px;');
console.log('%c Where Luxury Lives — Enhanced with Premium Effects ', 'color: #8a8a95; font-family: Georgia; font-size: 11px; letter-spacing: 2px;');
