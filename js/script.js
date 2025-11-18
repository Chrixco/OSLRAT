/**
 * OSLRAT - Open-Source Sea-Level Rise Assessment Tool
 * Main JavaScript File
 * Handles all interactive elements, animations, and dynamic functionality
 */

// ============================================================================
// MOBILE NAVIGATION
// ============================================================================

/**
 * Initialize mobile navigation toggle functionality
 */
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });

  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navToggle.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    }
  });
}

// ============================================================================
// STICKY NAVIGATION
// ============================================================================

/**
 * Add/remove shadow on navigation when scrolling
 */
function initStickyNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      nav.style.boxShadow = 'var(--shadow-md)';
    } else {
      nav.style.boxShadow = 'var(--shadow-sm)';
    }

    lastScroll = currentScroll;
  });
}

// ============================================================================
// ANIMATED COUNTER
// ============================================================================

/**
 * Animate numbers counting up
 * @param {HTMLElement} element - The element containing the number
 * @param {number} target - The target number to count to
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60 FPS
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

/**
 * Initialize counter animations when they come into view
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        entry.target.dataset.counted = 'true';
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

/**
 * Initialize intersection observer for scroll animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) translateX(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Set initial state
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const animationType = element.dataset.animate;
    if (animationType === 'fade-up') {
      element.style.transform = 'translateY(30px)';
    } else if (animationType === 'slide-right') {
      element.style.transform = 'translateX(-30px)';
    } else if (animationType === 'slide-left') {
      element.style.transform = 'translateX(30px)';
    }

    observer.observe(element);
  });
}

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const offsetTop = target.offsetTop - 80; // Account for fixed nav

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}

// ============================================================================
// DOCUMENTATION NAVIGATION
// ============================================================================

/**
 * Highlight active section in documentation navigation
 */
function initDocsNav() {
  const docsNav = document.querySelector('.docs-nav');
  if (!docsNav) return;

  const sections = document.querySelectorAll('.docs-section');
  const navLinks = docsNav.querySelectorAll('.docs-nav__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('docs-nav__link--active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('docs-nav__link--active');
          }
        });
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-100px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// ============================================================================
// CODE BLOCK COPY FUNCTIONALITY
// ============================================================================

/**
 * Copy code block content to clipboard
 * @param {HTMLElement} button - The copy button element
 */
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code');

  if (!code) return;

  // Create temporary textarea to copy text
  const textarea = document.createElement('textarea');
  textarea.value = code.textContent;
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Update button text
  const originalText = button.textContent;
  button.textContent = 'Copied!';
  button.style.backgroundColor = 'var(--color-success)';

  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = '';
  }, 2000);
}

// Make copyCode globally available for onclick handlers
window.copyCode = copyCode;

// ============================================================================
// FORM HANDLING
// ============================================================================

/**
 * Initialize contact form submission
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', data);

    // Show success message
    form.style.display = 'none';
    const successMessage = document.getElementById('form-success');
    if (successMessage) {
      successMessage.style.display = 'block';
    }

    // In production, you would send this to your backend:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   });
    //   // Handle response
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  });
}

/**
 * Initialize newsletter form submission
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const button = form.querySelector('button');

    if (!emailInput || !button) return;

    const email = emailInput.value;

    // Simulate submission
    console.log('Newsletter signup:', email);

    // Update button text
    const originalText = button.textContent;
    button.textContent = 'Subscribed!';
    button.style.backgroundColor = 'var(--color-success)';
    emailInput.value = '';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
    }, 3000);

    // In production:
    // try {
    //   const response = await fetch('/api/newsletter', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email })
    //   });
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  });
}

// ============================================================================
// LAZY LOADING IMAGES
// ============================================================================

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ============================================================================
// PARALLAX EFFECTS
// ============================================================================

/**
 * Add subtle parallax effect to hero section
 */
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = hero.querySelector('.hero__background');

    if (parallax && scrolled < window.innerHeight) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

/**
 * Log Core Web Vitals for performance monitoring
 */
function initPerformanceMonitoring() {
  // Only in development or with analytics enabled
  if (typeof PerformanceObserver === 'undefined') return;

  // Largest Contentful Paint (LCP)
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Observer not supported
  }

  // First Input Delay (FID)
  try {
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    // Observer not supported
  }

  // Cumulative Layout Shift (CLS)
  try {
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      }
      console.log('CLS:', clsScore);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Observer not supported
  }
}

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

/**
 * Trap focus within modal dialogs (if implemented)
 */
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  });
}

/**
 * Announce content changes to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Debounce function to limit how often a function can run
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
function debounce(func, wait = 250) {
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

/**
 * Throttle function to ensure function runs at most once per interval
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function}
 */
function throttle(func, limit = 250) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ============================================================================
// KEYBOARD NAVIGATION
// ============================================================================

/**
 * Add keyboard shortcuts for better navigation
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Skip if user is typing in an input
    if (e.target.matches('input, textarea, select')) return;

    // Keyboard shortcuts
    switch(e.key) {
      case '/':
        // Focus search (if implemented)
        e.preventDefault();
        break;
      case 'Escape':
        // Close any open modals or menus
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (navMenu && navToggle) {
          navMenu.classList.remove('is-active');
          navToggle.classList.remove('is-active');
        }
        break;
    }
  });
}

// ============================================================================
// EXTERNAL LINK HANDLING
// ============================================================================

/**
 * Add icon and accessibility attributes to external links
 */
function initExternalLinks() {
  const links = document.querySelectorAll('a[href^="http"]');

  links.forEach(link => {
    // Skip if it's the current domain
    if (link.hostname === window.location.hostname) return;

    // Add external link attributes if not already present
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
    }
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }

    // Add screen reader text
    if (!link.querySelector('.sr-only')) {
      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = ' (opens in new tab)';
      link.appendChild(srText);
    }
  });
}

// ============================================================================
// PRINT STYLES
// ============================================================================

/**
 * Optimize content for printing
 */
function initPrintOptimization() {
  window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections before printing
    const collapsedSections = document.querySelectorAll('[aria-expanded="false"]');
    collapsedSections.forEach(section => {
      section.setAttribute('aria-expanded', 'true');
    });
  });
}

// ============================================================================
// ERROR HANDLING
// ============================================================================

/**
 * Global error handler
 */
function initErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    // In production, send to error tracking service
  });
}

// ============================================================================
// THEME DETECTION (for future dark mode support)
// ============================================================================

/**
 * Detect and apply user's color scheme preference
 */
function initThemeDetection() {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function handleThemeChange(e) {
    if (e.matches) {
      // User prefers dark mode
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // User prefers light mode
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // Initial check
  handleThemeChange(darkModeQuery);

  // Listen for changes
  darkModeQuery.addEventListener('change', handleThemeChange);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  // Core functionality
  initMobileNav();
  initStickyNav();
  initSmoothScroll();
  initKeyboardShortcuts();

  // Animations
  if (!prefersReducedMotion()) {
    initScrollAnimations();
    initCounters();
    initParallax();
  }

  // Page-specific functionality
  initDocsNav();
  initContactForm();
  initNewsletterForm();

  // Enhancements
  initLazyLoading();
  initExternalLinks();
  initPrintOptimization();

  // Development/monitoring
  initErrorHandling();
  // initPerformanceMonitoring(); // Uncomment in development

  // Future features
  // initThemeDetection(); // Uncomment when dark mode is ready

  console.log('OSLRAT website initialized successfully');
}

// ============================================================================
// RUN INITIALIZATION
// ============================================================================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM is already loaded
  init();
}

// Export functions for potential use in other scripts
window.OSLRAT = {
  announceToScreenReader,
  debounce,
  throttle,
  isInViewport,
  prefersReducedMotion
};
