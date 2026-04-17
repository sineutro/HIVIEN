/* ================================================================
   HIVIEN – Main JavaScript
   Handles: Loader, Navbar, Particles, Animations, Demo,
            Counters, ROI Calculator, FAQ, Exit Popup, Form, Rings
================================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. LOADER
  ============================================================ */
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
      document.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('visible'));
    }, 1900);
  });

  /* ============================================================
     2. SCROLL PROGRESS BAR
  ============================================================ */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${docHeight > 0 ? scrollTop / docHeight : 0})`;
  }, { passive: true });

  /* ============================================================
     3. NAVBAR — scroll solidify + hamburger
  ============================================================ */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ============================================================
     4. PARTICLE CANVAS
  ============================================================ */
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); }, { passive: true });

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x     = Math.random() * canvas.width;
        this.y     = Math.random() * canvas.height;
        this.vx    = (Math.random() - 0.5) * 0.4;
        this.vy    = (Math.random() - 0.5) * 0.4;
        this.r     = Math.random() * 1.8 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.6 ? '0,212,255' : '78,205,196';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = Array.from({ length: Math.floor((canvas.width * canvas.height) / 12000) }, () => new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    (function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animateParticles);
    })();

    initParticles();
  }

  /* ============================================================
     5. HERO MOUSE-FOLLOW GLOW
  ============================================================ */
  const heroGlow    = document.getElementById('heroGlow');
  const heroSection = document.getElementById('hero');
  if (heroSection && heroGlow) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      heroGlow.style.transform = `translate(${e.clientX - rect.left - 300}px, ${e.clientY - rect.top - 300}px)`;
    });
  }

  /* ============================================================
     6. HERO WAVEFORM
  ============================================================ */
  const waveformBars = document.getElementById('waveformBars');
  if (waveformBars) {
    waveformBars.innerHTML = Array.from({ length: 28 }, (_, i) => {
      const h   = Math.random() * 26 + 6;
      const dur = (Math.random() * 0.6 + 0.5).toFixed(2);
      return `<span style="--h:${h}px;--dur:${dur}s;animation-delay:${(i * 0.04).toFixed(2)}s;"></span>`;
    }).join('');
  }

  /* ============================================================
     7. INTERSECTION OBSERVER
  ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

  /* ============================================================
     8. COUNTER ANIMATION
  ============================================================ */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target);
    const suffix   = el.dataset.suffix || '';
    const duration = 2000;
    const start    = performance.now();
    function update(now) {
      const ease    = 1 - Math.pow(1 - Math.min((now - start) / duration, 1), 3);
      const current = target * ease;
      if (target === 2 && suffix === 'M+')       el.textContent = current.toFixed(1) + suffix;
      else if (target === 2.3)                   el.textContent = '$' + current.toFixed(1) + suffix;
      else if (Number.isInteger(target))         el.textContent = Math.round(current).toLocaleString() + suffix;
      else                                       el.textContent = current.toFixed(1) + suffix;
      if (ease < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  /* ============================================================
     9. RESULT RINGS
  ============================================================ */
  const ringObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const pct  = parseInt(entry.target.dataset.percent, 10);
        const fill = entry.target.querySelector('.ring-fill');
        if (fill) setTimeout(() => { fill.style.strokeDashoffset = 264 - (pct / 100) * 264; }, 200);
        ringObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.result-ring').forEach(r => ringObserver.observe(r));

  // SVG gradient per ring
  document.querySelectorAll('.result-ring svg').forEach((svg) => {
    const uid  = 'g' + Math.random().toString(36).slice(2, 7);
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    grad.setAttribute('id', uid); grad.setAttribute('x1','0%'); grad.setAttribute('y1','0%');
    grad.setAttribute('x2','100%'); grad.setAttribute('y2','100%');
    grad.innerHTML = '<stop offset="0%" stop-color="#00D4FF"/><stop offset="100%" stop-color="#4ECDC4"/>';
    defs.appendChild(grad); svg.prepend(defs);
    const fill = svg.querySelector('.ring-fill');
    if (fill) fill.setAttribute('stroke', `url(#${uid})`);
  });

  /* ============================================================
     10. DEMO PLAYER — 3 SCENARIOS + TABS
  ============================================================ */
  const scenarios = {
    dentist: {
      label: 'Inbound — Appointment Booking (Dental)',
      title: 'Inbound Booking — <span class="gradient-text">Dental Clinic</span>',
      desc:  'Your AI receptionist handles new patient calls 24/7 — booking, rescheduling, and qualifying without any human involvement.',
      convo: [
        { role: 'ai',    text: "Good morning! You've reached Apex Dental. This is Aria — how can I help you today?" },
        { role: 'human', text: "Hi, I'd like to book an appointment for a cleaning." },
        { role: 'ai',    text: "Absolutely! Could I get your name and whether you're a new or existing patient?" },
        { role: 'human', text: "Sure — I'm Sarah Mitchell, been there maybe two years ago." },
        { role: 'ai',    text: "Welcome back, Sarah! Do you prefer mornings or afternoons? And any preferred day?" },
        { role: 'human', text: "Mornings — Wednesday or Thursday if possible?" },
        { role: 'ai',    text: "I have Thursday at 10 AM this week and Wednesday at 9:30 AM next week. Which works?" },
        { role: 'human', text: "Thursday 10 AM is perfect!" },
        { role: 'ai',    text: "Done! Thursday at 10 AM for a full cleaning. You'll receive a confirmation text. Can I help with anything else?" },
      ]
    },
    realestate: {
      label: 'Outbound — Lead Prospecting (Real Estate)',
      title: 'Outbound Prospecting — <span class="gradient-text">Real Estate</span>',
      desc:  'Your AI Growth Engine autonomously finds seller leads, sends personalised outreach, and books listing appointments directly into your calendar.',
      convo: [
        { role: 'ai',    text: "Hi, this is Alex from Prestige Realty. I noticed your home on Cedar Lane — have you considered what it might be worth in today's market?" },
        { role: 'human', text: "Actually… we have been thinking about selling. Maybe next spring?" },
        { role: 'ai',    text: "That's great timing! Inventory is tight right now, which means sellers are commanding premium prices. Would a no-obligation valuation be helpful?" },
        { role: 'human', text: "Yeah, that could be useful. What does that involve?" },
        { role: 'ai',    text: "It's a quick 20-minute walkthrough — our agent reviews comparable sales and gives you a precise range. Completely free, zero pressure." },
        { role: 'human', text: "Alright, that sounds reasonable." },
        { role: 'ai',    text: "Brilliant. I've got Tuesday at 2 PM or Thursday at 11 AM open — which suits you?" },
        { role: 'human', text: "Tuesday works." },
        { role: 'ai',    text: "Perfect — Tuesday at 2 PM is confirmed. I'm sending a calendar invite now with our agent's details. We'll see you then!" },
      ]
    },
    ecommerce: {
      label: 'Inbound Support — Returns & Refunds (E-commerce)',
      title: 'Support Resolution — <span class="gradient-text">E-commerce</span>',
      desc:  'Your AI Success Manager handles returns, refunds, and order issues by connecting live to Stripe and Shopify — no human agent required.',
      convo: [
        { role: 'ai',    text: "Hi, thanks for calling LuminaHome support! I'm Nova — how can I help you today?" },
        { role: 'human', text: "Yeah, I received the wrong lamp. I ordered the white marble finish but got the black one." },
        { role: 'ai',    text: "I'm really sorry about that mix-up! I'm pulling up your order right now. I can see Order #48821 — the Marble Arc Lamp in White. You received the Black instead?" },
        { role: 'human', text: "Exactly. It's still in the box." },
        { role: 'ai',    text: "No problem at all. I'm processing a full replacement right now — the White Marble finish will ship today with priority delivery, no return required for the wrong item." },
        { role: 'human', text: "Oh wow, I don't need to send the black one back?" },
        { role: 'ai',    text: "Correct — we'll let you keep it or donate it. Your replacement tracking number will be texted to you within the hour. Is there anything else I can help with?" },
        { role: 'human', text: "No, that's brilliant. Thank you!" },
        { role: 'ai',    text: "My pleasure! Your satisfaction is our priority. Have a wonderful day! 😊" },
      ]
    }
  };

  let currentScenario = 'dentist';
  let demoPlaying     = false;
  let demoTimeout     = null;
  let currentMsgIdx   = 0;

  const demoPlayBtn     = document.getElementById('demoPlayBtn');
  const demoIcon        = document.getElementById('demoIcon');
  const demoTranscript  = document.getElementById('demoTranscript');
  const demoWaveBars    = document.getElementById('demoWaveBars');
  const demoScenarioLbl = document.getElementById('demoScenarioLabel');
  const demoInfoTitle   = document.getElementById('demoInfoTitle');
  const demoInfoDesc    = document.getElementById('demoInfoDesc');

  // Build wave bars
  if (demoWaveBars) {
    demoWaveBars.innerHTML = Array.from({ length: 50 }, () => {
      const h   = Math.random() * 28 + 4;
      const dur = (Math.random() * 0.5 + 0.4).toFixed(2);
      return `<span style="--h:${h}px;--dur:${dur}s;height:4px;"></span>`;
    }).join('');
  }

  function resetDemo() {
    demoPlaying = false;
    clearTimeout(demoTimeout);
    demoIcon.className = 'fas fa-play';
    demoWaveBars.classList.remove('playing');
    demoWaveBars.querySelectorAll('span').forEach(s => { s.style.height = '4px'; });
  }

  function resetTranscript() {
    demoTranscript.innerHTML = `
      <div class="transcript-placeholder">
        <i class="fas fa-microphone-alt"></i>
        <span>Press play to hear the AI agent in action</span>
      </div>`;
  }

  function startDemo() {
    demoPlaying   = true;
    currentMsgIdx = 0;
    demoIcon.className = 'fas fa-pause';
    demoTranscript.innerHTML = '';
    demoWaveBars.classList.add('playing');
    scheduleNext();
  }

  function scheduleNext() {
    const convo = scenarios[currentScenario].convo;
    if (currentMsgIdx >= convo.length || !demoPlaying) {
      if (currentMsgIdx >= convo.length) resetDemo();
      return;
    }
    const msg   = convo[currentMsgIdx];
    const delay = currentMsgIdx === 0 ? 400 : 1000 + msg.text.length * 14;

    // Show typing indicator
    const typingEl = document.createElement('div');
    typingEl.className = 'transcript-msg';
    typingEl.innerHTML = `
      <span class="msg-label ${msg.role === 'ai' ? 'ai' : 'human'}">${msg.role === 'ai' ? 'HIVIEN AI' : 'CALLER'}</span>
      <div class="typing-indicator"><span></span><span></span><span></span></div>`;
    demoTranscript.appendChild(typingEl);
    demoTranscript.scrollTop = demoTranscript.scrollHeight;

    demoTimeout = setTimeout(() => {
      typingEl.innerHTML = `
        <span class="msg-label ${msg.role === 'ai' ? 'ai' : 'human'}">${msg.role === 'ai' ? 'HIVIEN AI' : 'CALLER'}</span>
        <span class="msg-text">${msg.text}</span>`;
      demoTranscript.scrollTop = demoTranscript.scrollHeight;
      currentMsgIdx++;
      scheduleNext();
    }, delay);
  }

  if (demoPlayBtn) {
    demoPlayBtn.addEventListener('click', () => {
      demoPlaying ? resetDemo() : startDemo();
    });
  }

  // Tab switching
  document.querySelectorAll('.demo-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      // Active state
      document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Reset any running demo
      resetDemo();
      resetTranscript();
      currentScenario = tab.dataset.scenario;

      // Update side info
      const sc = scenarios[currentScenario];
      if (demoScenarioLbl) demoScenarioLbl.textContent = sc.label;
      if (demoInfoTitle)   demoInfoTitle.innerHTML = sc.title;
      if (demoInfoDesc)    demoInfoDesc.textContent = sc.desc;
    });
  });

  /* ============================================================
     11. ROI CALCULATOR
  ============================================================ */
  const agentsSlider  = document.getElementById('agentsSlider');
  const callsSlider   = document.getElementById('callsSlider');
  const costSlider    = document.getElementById('costSlider');
  const ticketsSlider = document.getElementById('ticketsSlider');

  const agentsVal  = document.getElementById('agentsVal');
  const callsVal   = document.getElementById('callsVal');
  const costVal    = document.getElementById('costVal');
  const ticketsVal = document.getElementById('ticketsVal');

  const monthlySavings = document.getElementById('monthlySavings');
  const annualSavings  = document.getElementById('annualSavings');
  const callsHandled   = document.getElementById('callsHandled');
  const hoursReclaimed = document.getElementById('hoursReclaimed');

  function formatNum(n) {
    if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000)    return (n >= 10000 ? '$' : '') + (n / 1000).toFixed(1) + 'K';
    return '$' + Math.round(n).toLocaleString();
  }
  function fmtPlain(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000)    return (n / 1000).toFixed(1) + 'K';
    return Math.round(n).toLocaleString();
  }

  function updateRangeTrack(input) {
    const min  = parseFloat(input.min);
    const max  = parseFloat(input.max);
    const val  = parseFloat(input.value);
    const pct  = ((val - min) / (max - min)) * 100;
    input.style.setProperty('--fill', pct + '%');
  }

  function calcROI() {
    const agents  = parseInt(agentsSlider.value,  10);
    const calls   = parseInt(callsSlider.value,   10);
    const cost    = parseInt(costSlider.value,     10);
    const tickets = parseInt(ticketsSlider.value,  10);

    // Display labels
    agentsVal.textContent  = agents;
    callsVal.textContent   = calls.toLocaleString();
    costVal.textContent    = '$' + cost.toLocaleString();
    ticketsVal.textContent = tickets.toLocaleString();

    // Update track fills
    [agentsSlider, callsSlider, costSlider, ticketsSlider].forEach(updateRangeTrack);

    // Calculations
    // Monthly savings: 70% of agent costs that AI replaces (industry avg ~70% cost reduction)
    const agentSavingsMo = Math.round(agents * cost * 0.70);
    // Ticket savings: avg $8 per ticket resolved by AI (industry avg)
    const ticketSavingsMo = Math.round(tickets * 8);
    const totalMonthlySav = agentSavingsMo + ticketSavingsMo;
    const totalAnnualSav  = totalMonthlySav * 12;
    // Calls per year (calls/day × 365)
    const yearlyCallsNum  = calls * 365;
    // Hours reclaimed: avg 4 min per call/ticket → hrs/month
    const hoursReclaimedNum = Math.round(((calls * 30 + tickets) * 4) / 60);

    // Animate values
    animateROIVal(monthlySavings, totalMonthlySav, true);
    animateROIVal(annualSavings,  totalAnnualSav,  true);
    animateROIRaw(callsHandled,   yearlyCallsNum,  false, 'calls');
    animateROIRaw(hoursReclaimed, hoursReclaimedNum, false, 'hours');
  }

  let roiTimers = {};
  function animateROIVal(el, target, money) {
    if (!el) return;
    clearTimeout(roiTimers[el.id]);
    const start    = performance.now();
    const duration = 500;
    const from     = parseFloat(el.dataset.current || '0') || 0;
    el.dataset.current = target;

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const v = from + (target - from) * (1 - Math.pow(1 - p, 3));
      el.textContent = money ? formatNum(v) : fmtPlain(v) + (el.id === 'callsHandled' ? '' : 'h');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function animateROIRaw(el, target, money, type) {
    if (!el) return;
    clearTimeout(roiTimers[el.id]);
    const start    = performance.now();
    const duration = 500;
    const from     = parseFloat(el.dataset.current || '0') || 0;
    el.dataset.current = target;

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const v = from + (target - from) * (1 - Math.pow(1 - p, 3));
      el.textContent = type === 'hours' ? fmtPlain(v) + 'h' : fmtPlain(v);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Init sliders
  if (agentsSlider) {
    [agentsSlider, callsSlider, costSlider, ticketsSlider].forEach(s => {
      updateRangeTrack(s);
      s.addEventListener('input', calcROI);
    });
    calcROI(); // run once on load
  }

  /* ============================================================
     12. FAQ ACCORDION
  ============================================================ */
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ============================================================
     13. EXIT INTENT POPUP
  ============================================================ */
  const exitPopup = document.getElementById('exitPopup');
  let exitShown   = false;

  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10 && !exitShown && !sessionStorage.getItem('hvExitShown')) {
      exitShown = true;
      sessionStorage.setItem('hvExitShown', '1');
      exitPopup.classList.add('visible');
    }
  });

  window.closePopup = () => exitPopup.classList.remove('visible');
  document.getElementById('closePopup').addEventListener('click', closePopup);
  exitPopup.addEventListener('click', (e) => { if (e.target === exitPopup) closePopup(); });

  /* ============================================================
     14. LEAD FORM
  ============================================================ */
  const leadForm = document.getElementById('leadForm');
  const toast    = document.getElementById('successToast');

  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = leadForm.querySelector('.btn-submit');
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      btn.disabled  = true;

      try {
        // Replace YOUR_FORM_ID after signing up at formspree.io with hello@hivien.com
        const response = await fetch('https://formspree.io/f/mlgadpek', {
          method: 'POST',
          body: new FormData(leadForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          btn.innerHTML = '<i class="fas fa-check"></i> Demo Booked!';
          btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
          leadForm.reset();
          if (toast) {
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 4000);
          }
          setTimeout(() => { btn.innerHTML = originalHTML; btn.style.background = ''; btn.disabled = false; }, 4000);
        } else {
          btn.innerHTML = originalHTML;
          btn.disabled = false;
          alert('Something went wrong. Please email us directly at hello@hivien.com');
        }
      } catch {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        alert('Network error. Please email us directly at hello@hivien.com');
      }
    });
  }

  /* ============================================================
     15. SMOOTH SCROLL
  ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });

  /* ============================================================
     16. STICKY CTA (mobile)
  ============================================================ */
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    stickyCta.style.transition = 'opacity 0.3s ease';
    stickyCta.style.opacity    = '0';
    stickyCta.style.pointerEvents = 'none';
    window.addEventListener('scroll', () => {
      const heroH = heroSection ? heroSection.offsetHeight : 600;
      const show  = window.scrollY > heroH * 0.6;
      stickyCta.style.opacity       = show ? '1' : '0';
      stickyCta.style.pointerEvents = show ? 'all' : 'none';
    }, { passive: true });
  }

  /* ============================================================
     17. PARALLAX ON HERO
  ============================================================ */
  if (heroSection) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight * 1.2) {
        const content = heroSection.querySelector('.hero-content');
        if (content) content.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    }, { passive: true });
  }

  /* ============================================================
     18. SPOT ENTRANCE ANIMATION
  ============================================================ */
  const spotsVisual = document.querySelector('.spots-visual');
  if (spotsVisual) {
    spotsVisual.querySelectorAll('.spot.filled').forEach(s => { s.style.opacity = '0'; s.style.transform = 'scale(0)'; });
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.spot.filled').forEach((spot, i) => {
            setTimeout(() => {
              spot.style.transition = 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)';
              spot.style.opacity = '1'; spot.style.transform = 'scale(1)';
            }, i * 100 + 200);
          });
        }
      });
    }, { threshold: 0.5 }).observe(spotsVisual);
  }

  /* ============================================================
     19. CARD TILT EFFECT
  ============================================================ */
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const rotX = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -3;
      const rotY = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  3;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ============================================================
     20. CONSOLE EASTER EGG
  ============================================================ */
  console.log('%c⚡ HIVIEN — High Vision Engine\n%cWe build AI that works harder than humans.',
    'color:#00D4FF;font-size:18px;font-weight:bold;',
    'color:#4ECDC4;font-size:13px;');

})();
