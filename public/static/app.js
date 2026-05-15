/* ============================================
   HIVIEN — Main Application JavaScript
   ============================================ */

(function () {
  'use strict';

  // ── Navbar Scroll Behaviour ──────────────────────────────
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const bars = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  }

  // Close nav on link click
  navLinks && navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      if (navToggle) {
        const bars = navToggle.querySelectorAll('span');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Intersection Observer for Scroll Animations ──────────
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  function initScrollAnimations() {
    const sections = [
      '.use-case-card',
      '.product-feature',
      '.hiw-step',
      '.benefit-card',
      '.trust-card',
      '.roi-result-card',
      '.section-header',
      '.demo-content',
      '.demo-form-wrap',
    ];

    sections.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('animate-on-scroll');
        if (i > 0) {
          el.classList.add(`delay-${Math.min(i * 100, 500)}`);
        }
        observer.observe(el);
      });
    });
  }

  // ── Product Feature Tabs ──────────────────────────────────
  function initProductTabs() {
    const features = document.querySelectorAll('.product-feature');
    const panels = document.querySelectorAll('.pd-panel');

    if (!features.length || !panels.length) return;

    features.forEach(feature => {
      feature.addEventListener('click', () => {
        const idx = feature.dataset.feature;

        // Update active feature
        features.forEach(f => f.classList.remove('active'));
        feature.classList.add('active');

        // Update active panel
        panels.forEach(p => p.classList.remove('active'));
        const activePanel = document.querySelector(`.pd-panel[data-panel="${idx}"]`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });

    // Auto-rotate tabs
    let currentTab = 0;
    const totalTabs = features.length;

    setInterval(() => {
      // Only auto-rotate if user isn't hovering the dashboard
      const dashboard = document.querySelector('.product-dashboard');
      if (dashboard && dashboard.matches(':hover')) return;

      currentTab = (currentTab + 1) % totalTabs;
      features[currentTab] && features[currentTab].click();
    }, 4000);
  }

  // ── ROI Calculator ────────────────────────────────────────
  function initROICalculator() {
    const agentCount = document.getElementById('agentCount');
    const callsPerDay = document.getElementById('callsPerDay');
    const agentCost = document.getElementById('agentCost');

    const agentCountVal = document.getElementById('agentCountVal');
    const callsPerDayVal = document.getElementById('callsPerDayVal');
    const agentCostVal = document.getElementById('agentCostVal');

    const monthlySavings = document.getElementById('monthlySavings');
    const annualSavings = document.getElementById('annualSavings');
    const callsHandled = document.getElementById('callsHandled');

    if (!agentCount || !callsPerDay || !agentCost) return;

    function formatCurrency(val) {
      if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
      if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'K';
      return '$' + val.toLocaleString();
    }

    function formatNumber(val) {
      if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M';
      if (val >= 1000) return (val / 1000).toFixed(1) + 'K';
      return val.toLocaleString();
    }

    function animateNumber(el, target, prefix = '', suffix = '') {
      const duration = 600;
      const start = performance.now();
      const startVal = parseInt(el.dataset.current || '0');

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * eased);
        el.dataset.current = current;
        el.textContent = prefix + formatNumber(current);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function calculate() {
      const agents = parseInt(agentCount.value);
      const calls = parseInt(callsPerDay.value);
      const cost = parseInt(agentCost.value);

      // HIVIEN replaces ~60% of agent cost
      const monthlySavingVal = Math.round(agents * cost * 0.60);
      const annualSavingVal = monthlySavingVal * 12;
      const callsPerYearVal = calls * 365;

      if (monthlySavings) {
        monthlySavings.textContent = formatCurrency(monthlySavingVal);
        monthlySavings.dataset.current = monthlySavingVal;
      }
      if (annualSavings) {
        annualSavings.textContent = formatCurrency(annualSavingVal);
        annualSavings.dataset.current = annualSavingVal;
      }
      if (callsHandled) {
        callsHandled.textContent = formatNumber(callsPerYearVal);
        callsHandled.dataset.current = callsPerYearVal;
      }
    }

    agentCount.addEventListener('input', () => {
      agentCountVal.textContent = agentCount.value;
      calculate();
    });

    callsPerDay.addEventListener('input', () => {
      callsPerDayVal.textContent = callsPerDay.value;
      calculate();
    });

    agentCost.addEventListener('input', () => {
      agentCostVal.textContent = '$' + parseInt(agentCost.value).toLocaleString();
      calculate();
    });

    // Initial calculation
    calculate();
  }

  // ── Demo Form Handler ─────────────────────────────────────
  function initDemoForm() {
    const form = document.getElementById('demoForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitLoading = document.getElementById('submitLoading');

    if (!form || !submitBtn || !submitText || !submitLoading) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Button loading state
      submitBtn.disabled = true;
      submitText.style.display = 'none';
      submitLoading.style.display = 'flex';

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1800));

      // Show success
      form.style.opacity = '0';
      form.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        form.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'block';
          formSuccess.style.opacity = '0';
          formSuccess.style.transform = 'translateY(20px)';
          setTimeout(() => {
            formSuccess.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            formSuccess.style.opacity = '1';
            formSuccess.style.transform = 'translateY(0)';
          }, 50);
        }
      }, 300);
    });

    // Input focus effects
    form.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.querySelector('i') &&
          input.parentElement.querySelector('i').style.setProperty('color', 'rgba(96, 165, 250, 0.8)');
      });
      input.addEventListener('blur', () => {
        input.parentElement.querySelector('i') &&
          input.parentElement.querySelector('i').style.setProperty('color', 'rgba(255,255,255,0.3)');
      });
    });
  }

  // Mailto inquiry form for contact page
  function initContactInquiryForm() {
    const form = document.getElementById('contactInquiryForm');
    if (!form) return;

    const recipient = form.dataset.mailto || 'hello@hivien.com';

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const company = (formData.get('company') || '').toString().trim();
      const website = (formData.get('website') || '').toString().trim();
      const system = (formData.get('system') || '').toString().trim();
      const automation = (formData.get('automation') || '').toString().trim();

      const subjectBase = company || name || 'New inquiry';
      const subject = `Hivien inquiry - ${subjectBase}`;

      const lines = [
        'Hi Hivien,',
        '',
        'I would like to discuss an AI system for my business.',
        '',
        `Name: ${name || 'Not provided'}`,
        `Business email: ${email || 'Not provided'}`,
        `Company name: ${company || 'Not provided'}`,
        `Website: ${website || 'Not provided'}`,
        `Interested in: ${system || 'Not provided'}`,
        '',
        'What I want to automate:',
        automation || 'Not provided',
      ];

      const mailtoUrl =
        `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;

      window.location.href = mailtoUrl;
    });

    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.querySelector('i') &&
          input.parentElement.querySelector('i').style.setProperty('color', 'rgba(96, 165, 250, 0.8)');
      });
      input.addEventListener('blur', () => {
        input.parentElement.querySelector('i') &&
          input.parentElement.querySelector('i').style.setProperty('color', 'rgba(255,255,255,0.3)');
      });
    });
  }

  // ── Typewriter Effect for Hero ────────────────────────────
  function initTypewriter() {
    const phrases = [
      'Let AI Handle It.',
      'Book More Appointments.',
      'Scale Without Limits.',
      'Never Miss a Call.'
    ];

    const el = document.querySelector('.hero-title .gradient-text');
    if (!el) return;

    // Ensure the wrapper has a fixed height before we start so the
    // page layout is locked from the very first frame.
    // We measure the line-height of the h1 and apply it as min-height.
    function lockHeight() {
      const h1 = el.closest('.hero-title');
      if (!h1) return;
      const lineH = parseFloat(getComputedStyle(h1).lineHeight) ||
                    parseFloat(getComputedStyle(h1).fontSize) * 1.1;
      // Reserve exactly 1 line for the animated span
      el.style.minHeight = lineH + 'px';
      el.style.display = 'inline-block';
      el.style.verticalAlign = 'top';
    }
    lockHeight();
    window.addEventListener('resize', lockHeight);

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    // Use zero-width space (\u200B) instead of empty string so the
    // inline-block span never collapses to zero height between phrases.
    const PLACEHOLDER = '\u200B';

    function type() {
      const phrase = phrases[phraseIdx];

      if (isDeleting) {
        charIdx--;
        // Never let charIdx go below 0; use placeholder when empty
        const text = charIdx > 0 ? phrase.substring(0, charIdx) : PLACEHOLDER;
        el.textContent = text;
        typingSpeed = 45;
      } else {
        charIdx++;
        el.textContent = phrase.substring(0, charIdx);
        typingSpeed = 75;
      }

      if (!isDeleting && charIdx === phrase.length) {
        isDeleting = true;
        typingSpeed = 2200; // Long pause at end so reader can absorb it
      } else if (isDeleting && charIdx <= 0) {
        charIdx = 0;
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typingSpeed = 350;
      }

      setTimeout(type, typingSpeed);
    }

    // Start after initial load
    setTimeout(type, 2500);
  }

  // ── Active Nav Link on Scroll ─────────────────────────────
  function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const links = Array.from(document.querySelectorAll('.nav-links a'))
      .filter((link) => link.getAttribute('href') && link.getAttribute('href').startsWith('#'));

    if (!sections.length || !links.length) return;

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active-link');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(s => sectionObserver.observe(s));
  }

  // ── Counter Animations ────────────────────────────────────
  function initCounters() {
    const counters = document.querySelectorAll('.stat-value, .benefit-number');

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const text = entry.target.textContent;
          const num = parseFloat(text.replace(/[^0-9.]/g, ''));

          if (!isNaN(num) && num > 0) {
            const duration = 1500;
            const start = performance.now();

            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = num * eased;

              if (text.includes('%')) {
                entry.target.textContent = Math.round(current) + '%';
              } else if (text.includes('x')) {
                entry.target.textContent = current.toFixed(1).replace('.0', '') + 'x';
              } else if (text.includes('$')) {
                entry.target.textContent = '$' + Math.round(current).toLocaleString();
              } else {
                entry.target.textContent = Math.round(current).toLocaleString();
              }

              if (progress < 1) requestAnimationFrame(step);
              else entry.target.textContent = text; // Restore original text
            };

            requestAnimationFrame(step);
          }
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // ── Floating Cards Parallax ───────────────────────────────
  function initParallax() {
    const cards = document.querySelectorAll('.hero-floating-card');
    if (!cards.length) return;

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xRatio = (clientX / innerWidth - 0.5) * 2;
      const yRatio = (clientY / innerHeight - 0.5) * 2;

      cards.forEach((card, i) => {
        const intensity = (i + 1) * 6;
        card.style.transform = `translate(${xRatio * intensity}px, ${yRatio * intensity}px)`;
      });
    });
  }

  // ── Nav Active Link Style ─────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .nav-links a.active-link {
      color: var(--primary);
      background: rgba(26, 58, 107, 0.08);
    }
  `;
  document.head.appendChild(style);

  // ── Ticker Pause on Hover ─────────────────────────────────
  function initTicker() {
    const track = document.querySelector('.ticker-track');
    if (!track) return;

    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  }

  // ── CTA Button Ripple Effect ──────────────────────────────
  function initRipple() {
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          transform: scale(0);
          animation: ripple-anim 0.6s ease-out forwards;
          pointer-events: none;
        `;

        if (!this.style.position || this.style.position === 'static') {
          this.style.position = 'relative';
        }
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });

    // Inject ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `@keyframes ripple-anim { to { transform: scale(2.5); opacity: 0; } }`;
    document.head.appendChild(rippleStyle);
  }

  // ── How It Works Step Highlight on Scroll ────────────────
  function initHIWSteps() {
    const steps = document.querySelectorAll('.hiw-step');
    if (!steps.length) return;

    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.hiw-step-icon') &&
            entry.target.querySelector('.hiw-step-icon').style.setProperty(
              'animation', 'float 3s ease-in-out infinite'
            );
        }
      });
    }, { threshold: 0.7 });

    steps.forEach(s => stepObserver.observe(s));
  }

  // ── Live Dashboard Counter Animation ─────────────────────
  function initLiveDashboard() {
    const timer = document.querySelector('.agent-timer');
    if (!timer) return;

    let seconds = 134;
    setInterval(() => {
      seconds++;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      timer.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  }

  // ── Init All ──────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProductTabs();
    initROICalculator();
    initDemoForm();
    initContactInquiryForm();
    initTypewriter();
    initActiveNavLinks();
    initCounters();
    initParallax();
    initTicker();
    initRipple();
    initHIWSteps();
    initLiveDashboard();
  });

})();
