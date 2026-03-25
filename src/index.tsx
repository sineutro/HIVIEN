import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HIVIEN – High Vision Engine | AI Voice Agents for Business</title>
  <meta name="description" content="HIVIEN deploys intelligent AI voice agents that handle calls, book appointments, and scale your customer communications 24/7 — without hiring." />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet" />
  <link href="/static/style.css" rel="stylesheet" />
</head>
<body>

<!-- ======== NAVIGATION ======== -->
<nav id="navbar" class="navbar">
  <div class="nav-container">
    <a href="#" class="nav-logo">
      <img src="/static/hivien-logo.png" alt="HIVIEN Logo" class="nav-logo-img" />
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="#use-cases">Use Cases</a></li>
      <li><a href="#product">Platform</a></li>
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#benefits">Benefits</a></li>
      <li><a href="#testimonials">Clients</a></li>
    </ul>
    <div class="nav-cta">
      <a href="#demo" class="btn btn-primary btn-sm">Request a Demo</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ======== HERO SECTION ======== -->
<section class="hero" id="home">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          AI-Powered Voice Intelligence
        </div>
        <h1 class="hero-title">
          Never Miss a Call.<br />
          <span class="gradient-text">Let AI Handle It.</span>
        </h1>
        <p class="hero-subtitle">
          HIVIEN deploys intelligent AI voice agents that handle inbound & outbound calls, 
          book appointments, and scale your customer communications — 24/7, without hiring.
        </p>
        <div class="hero-actions">
          <a href="#demo" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i>
            Request a Demo
          </a>
          <a href="#how-it-works" class="btn btn-ghost btn-lg">
            <i class="fas fa-play-circle"></i>
            See How It Works
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">90%</span>
            <span class="stat-label">Fewer Missed Calls</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">24/7</span>
            <span class="stat-label">Always Available</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">3x</span>
            <span class="stat-label">More Bookings</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>HIVIEN Agent Live</span>
            </div>
            <div class="dashboard-time">Live</div>
          </div>
          <div class="call-activity">
            <div class="call-wave">
              <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
              <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
              <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
            </div>
            <div class="call-info">
              <div class="caller-name">Incoming Call — +1 (555) 234-7890</div>
              <div class="call-status">AI Agent handling · 0:32</div>
            </div>
          </div>
          <div class="transcript-box">
            <div class="transcript-line agent">
              <span class="t-label">AI Agent</span>
              <span class="t-text">Good morning! I'm calling to confirm your appointment tomorrow at 10 AM...</span>
            </div>
            <div class="transcript-line customer">
              <span class="t-label">Customer</span>
              <span class="t-text">Yes, that works perfectly. Can I reschedule to 2 PM instead?</span>
            </div>
            <div class="transcript-line agent typing">
              <span class="t-label">AI Agent</span>
              <span class="t-text">Of course! I've updated your booking to 2:00 PM. You'll receive a confirmation shortly.</span>
            </div>
          </div>
          <div class="dashboard-metrics">
            <div class="metric">
              <i class="fas fa-phone-alt"></i>
              <span>47 calls today</span>
            </div>
            <div class="metric">
              <i class="fas fa-calendar-check"></i>
              <span>12 booked</span>
            </div>
            <div class="metric">
              <i class="fas fa-clock"></i>
              <span>0 missed</span>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-database"></i>
          <span>CRM Synced</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-bell"></i>
          <span>Notification Sent</span>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-scroll-indicator">
    <div class="scroll-dot"></div>
    <span>Scroll to explore</span>
  </div>
</section>

<!-- ======== TRUSTED BY / LOGOS ======== -->
<section class="trusted-section">
  <div class="container">
    <p class="trusted-label">Trusted by forward-thinking businesses</p>
    <div class="logo-ticker">
      <div class="ticker-track">
        <div class="ticker-logo"><i class="fas fa-hospital"></i> MedCore Health</div>
        <div class="ticker-logo"><i class="fas fa-car"></i> AutoServ Pro</div>
        <div class="ticker-logo"><i class="fas fa-hotel"></i> LuxStay Hotels</div>
        <div class="ticker-logo"><i class="fas fa-shopping-bag"></i> RetailEdge</div>
        <div class="ticker-logo"><i class="fas fa-truck"></i> FleetLink</div>
        <div class="ticker-logo"><i class="fas fa-tooth"></i> DentalCare+</div>
        <div class="ticker-logo"><i class="fas fa-chart-line"></i> GrowthIQ</div>
        <div class="ticker-logo"><i class="fas fa-building"></i> PropTech Corp</div>
        <!-- Duplicate for seamless loop -->
        <div class="ticker-logo"><i class="fas fa-hospital"></i> MedCore Health</div>
        <div class="ticker-logo"><i class="fas fa-car"></i> AutoServ Pro</div>
        <div class="ticker-logo"><i class="fas fa-hotel"></i> LuxStay Hotels</div>
        <div class="ticker-logo"><i class="fas fa-shopping-bag"></i> RetailEdge</div>
        <div class="ticker-logo"><i class="fas fa-truck"></i> FleetLink</div>
        <div class="ticker-logo"><i class="fas fa-tooth"></i> DentalCare+</div>
        <div class="ticker-logo"><i class="fas fa-chart-line"></i> GrowthIQ</div>
        <div class="ticker-logo"><i class="fas fa-building"></i> PropTech Corp</div>
      </div>
    </div>
  </div>
</section>

<!-- ======== USE CASES SECTION ======== -->
<section class="use-cases section" id="use-cases">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Use Cases</div>
      <h2 class="section-title">Built for Every Industry That Relies on Communication</h2>
      <p class="section-subtitle">See how HIVIEN transforms operations across industries — from healthcare to hospitality.</p>
    </div>
    <div class="use-cases-grid">
      
      <div class="use-case-card featured" data-index="0">
        <div class="uc-icon-wrap">
          <i class="fas fa-stethoscope"></i>
        </div>
        <div class="uc-tag">Healthcare</div>
        <h3>Appointment Booking for Clinics & Salons</h3>
        <div class="uc-flow">
          <div class="uc-step problem">
            <span class="uc-step-label">Problem</span>
            <p>Receptionists overwhelmed with call volume; patients reaching voicemail after hours.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step solution">
            <span class="uc-step-label">Solution</span>
            <p>HIVIEN AI answers every call, checks calendar availability, and books appointments instantly.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step result">
            <span class="uc-step-label">Result</span>
            <p>40% more bookings, zero missed calls, patients served 24/7.</p>
          </div>
        </div>
        <div class="uc-metric">
          <span class="uc-metric-value">+40%</span>
          <span class="uc-metric-label">Bookings</span>
        </div>
      </div>

      <div class="use-case-card" data-index="1">
        <div class="uc-icon-wrap">
          <i class="fas fa-headset"></i>
        </div>
        <div class="uc-tag">Customer Support</div>
        <h3>Automated Customer Support at Scale</h3>
        <div class="uc-flow">
          <div class="uc-step problem">
            <span class="uc-step-label">Problem</span>
            <p>Support queues growing, wait times increasing, team burning out.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step solution">
            <span class="uc-step-label">Solution</span>
            <p>AI agents handle FAQs, order tracking, and escalations — instantly, every time.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step result">
            <span class="uc-step-label">Result</span>
            <p>70% of inquiries resolved without a human agent. CSAT scores up.</p>
          </div>
        </div>
        <div class="uc-metric">
          <span class="uc-metric-value">70%</span>
          <span class="uc-metric-label">Auto-Resolved</span>
        </div>
      </div>

      <div class="use-case-card" data-index="2">
        <div class="uc-icon-wrap">
          <i class="fas fa-phone-volume"></i>
        </div>
        <div class="uc-tag">Sales</div>
        <h3>Outbound Sales & Follow-Up Calls</h3>
        <div class="uc-flow">
          <div class="uc-step problem">
            <span class="uc-step-label">Problem</span>
            <p>Sales reps spending hours on cold outreach and follow-up calls that never convert.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step solution">
            <span class="uc-step-label">Solution</span>
            <p>AI agents make personalized outbound calls, qualify leads, and schedule demos with your team.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step result">
            <span class="uc-step-label">Result</span>
            <p>5x more outreach volume at a fraction of the cost. Pipeline grows automatically.</p>
          </div>
        </div>
        <div class="uc-metric">
          <span class="uc-metric-value">5x</span>
          <span class="uc-metric-label">More Outreach</span>
        </div>
      </div>

      <div class="use-case-card" data-index="3">
        <div class="uc-icon-wrap">
          <i class="fas fa-truck"></i>
        </div>
        <div class="uc-tag">Logistics</div>
        <h3>Delivery Confirmations & Dispatch</h3>
        <div class="uc-flow">
          <div class="uc-step problem">
            <span class="uc-step-label">Problem</span>
            <p>Manual calls for delivery confirmations eating dispatcher time and causing delays.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step solution">
            <span class="uc-step-label">Solution</span>
            <p>HIVIEN automates confirmation calls, re-routing notifications, and real-time updates.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step result">
            <span class="uc-step-label">Result</span>
            <p>Operations run leaner. Fewer failed deliveries. Happier customers.</p>
          </div>
        </div>
        <div class="uc-metric">
          <span class="uc-metric-value">-60%</span>
          <span class="uc-metric-label">Failed Deliveries</span>
        </div>
      </div>

      <div class="use-case-card" data-index="4">
        <div class="uc-icon-wrap">
          <i class="fas fa-concierge-bell"></i>
        </div>
        <div class="uc-tag">Hospitality</div>
        <h3>Reservations & Guest Services</h3>
        <div class="uc-flow">
          <div class="uc-step problem">
            <span class="uc-step-label">Problem</span>
            <p>Front desk overwhelmed with reservation calls, upsell requests, and special arrangements.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step solution">
            <span class="uc-step-label">Solution</span>
            <p>AI handles reservations, room upgrades, dining bookings, and check-in calls seamlessly.</p>
          </div>
          <div class="uc-arrow"><i class="fas fa-arrow-down"></i></div>
          <div class="uc-step result">
            <span class="uc-step-label">Result</span>
            <p>Guests always served. Staff freed for in-person excellence. Revenue per guest up.</p>
          </div>
        </div>
        <div class="uc-metric">
          <span class="uc-metric-value">+35%</span>
          <span class="uc-metric-label">Guest Satisfaction</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ======== PRODUCT OVERVIEW ======== -->
<section class="product-section section" id="product">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">The Platform</div>
      <h2 class="section-title">Everything You Need to Automate Business Communication</h2>
      <p class="section-subtitle">One intelligent platform. Unlimited conversations. Zero dropped calls.</p>
    </div>
    <div class="product-layout">
      <div class="product-features-list">
        <div class="product-feature active" data-feature="0">
          <div class="pf-icon"><i class="fas fa-microphone-alt"></i></div>
          <div class="pf-content">
            <h4>AI Voice Agents</h4>
            <p>Human-like, multilingual AI agents that handle calls with natural conversation flow — inbound and outbound, 24/7.</p>
          </div>
          <i class="fas fa-chevron-right pf-arrow"></i>
        </div>
        <div class="product-feature" data-feature="1">
          <div class="pf-icon"><i class="fas fa-sitemap"></i></div>
          <div class="pf-content">
            <h4>CRM Integration</h4>
            <p>Seamlessly sync with Salesforce, HubSpot, Zoho and more. Every call logs automatically — no manual entry.</p>
          </div>
          <i class="fas fa-chevron-right pf-arrow"></i>
        </div>
        <div class="product-feature" data-feature="2">
          <div class="pf-icon"><i class="fas fa-cogs"></i></div>
          <div class="pf-content">
            <h4>Workflow Automation</h4>
            <p>Trigger follow-ups, send confirmations, update records, and escalate to humans — all automatically based on call outcomes.</p>
          </div>
          <i class="fas fa-chevron-right pf-arrow"></i>
        </div>
        <div class="product-feature" data-feature="3">
          <div class="pf-icon"><i class="fas fa-chart-bar"></i></div>
          <div class="pf-content">
            <h4>Analytics & Reporting</h4>
            <p>Real-time dashboards showing call volumes, resolution rates, booking conversions, and ROI metrics in one place.</p>
          </div>
          <i class="fas fa-chevron-right pf-arrow"></i>
        </div>
        <div class="product-feature" data-feature="4">
          <div class="pf-icon"><i class="fas fa-calendar-alt"></i></div>
          <div class="pf-content">
            <h4>Smart Scheduling</h4>
            <p>Integrates with your calendar (Google, Outlook, Calendly) to book, reschedule, and confirm appointments in real-time.</p>
          </div>
          <i class="fas fa-chevron-right pf-arrow"></i>
        </div>
      </div>
      <div class="product-visual">
        <div class="product-dashboard">
          <div class="pd-header">
            <div class="pd-dots"><span></span><span></span><span></span></div>
            <div class="pd-title">HIVIEN Dashboard</div>
            <div class="pd-controls"><i class="fas fa-expand-alt"></i></div>
          </div>
          <div class="pd-content" id="dashboardContent">
            <!-- Feature 0: AI Voice Agents -->
            <div class="pd-panel active" data-panel="0">
              <div class="pd-panel-header">
                <span class="pd-panel-title"><i class="fas fa-microphone-alt"></i> Active Voice Agents</span>
                <span class="pd-badge green">3 Live</span>
              </div>
              <div class="pd-agent-list">
                <div class="pd-agent">
                  <div class="agent-avatar"><i class="fas fa-robot"></i></div>
                  <div class="agent-info">
                    <span class="agent-name">Agent Sarah</span>
                    <span class="agent-status on-call">On Call — Booking appointment</span>
                  </div>
                  <div class="agent-timer">2:14</div>
                </div>
                <div class="pd-agent">
                  <div class="agent-avatar"><i class="fas fa-robot"></i></div>
                  <div class="agent-info">
                    <span class="agent-name">Agent Mike</span>
                    <span class="agent-status on-call">On Call — Handling inquiry</span>
                  </div>
                  <div class="agent-timer">0:47</div>
                </div>
                <div class="pd-agent idle">
                  <div class="agent-avatar"><i class="fas fa-robot"></i></div>
                  <div class="agent-info">
                    <span class="agent-name">Agent Alex</span>
                    <span class="agent-status idle">Idle — Ready for calls</span>
                  </div>
                  <div class="agent-timer">—</div>
                </div>
              </div>
              <div class="pd-mini-stats">
                <div class="pd-mini-stat"><span class="v">47</span><span class="l">Calls Today</span></div>
                <div class="pd-mini-stat"><span class="v">98%</span><span class="l">Answer Rate</span></div>
                <div class="pd-mini-stat"><span class="v">2.1m</span><span class="l">Avg Duration</span></div>
              </div>
            </div>
            <!-- Feature 1: CRM Integration -->
            <div class="pd-panel" data-panel="1">
              <div class="pd-panel-header">
                <span class="pd-panel-title"><i class="fas fa-sitemap"></i> CRM Activity Feed</span>
                <span class="pd-badge blue">Live Sync</span>
              </div>
              <div class="pd-feed">
                <div class="pd-feed-item">
                  <div class="feed-icon crm"><i class="fas fa-user-plus"></i></div>
                  <div class="feed-text"><strong>New lead created</strong> — John Morris · HubSpot <span class="feed-time">just now</span></div>
                </div>
                <div class="pd-feed-item">
                  <div class="feed-icon update"><i class="fas fa-sync-alt"></i></div>
                  <div class="feed-text"><strong>Contact updated</strong> — Emily Chen · Salesforce <span class="feed-time">1m ago</span></div>
                </div>
                <div class="pd-feed-item">
                  <div class="feed-icon note"><i class="fas fa-sticky-note"></i></div>
                  <div class="feed-text"><strong>Call note logged</strong> — "Interested in premium plan" <span class="feed-time">3m ago</span></div>
                </div>
                <div class="pd-feed-item">
                  <div class="feed-icon deal"><i class="fas fa-handshake"></i></div>
                  <div class="feed-text"><strong>Deal stage moved</strong> — Qualified → Demo Scheduled <span class="feed-time">7m ago</span></div>
                </div>
              </div>
              <div class="pd-integration-logos">
                <span class="int-logo">Salesforce</span>
                <span class="int-logo">HubSpot</span>
                <span class="int-logo">Zoho</span>
                <span class="int-logo">Pipedrive</span>
              </div>
            </div>
            <!-- Feature 2: Workflow Automation -->
            <div class="pd-panel" data-panel="2">
              <div class="pd-panel-header">
                <span class="pd-panel-title"><i class="fas fa-cogs"></i> Automation Workflows</span>
                <span class="pd-badge purple">8 Active</span>
              </div>
              <div class="pd-workflow">
                <div class="wf-step completed"><div class="wf-dot"></div><span>Call Received</span></div>
                <div class="wf-line"></div>
                <div class="wf-step completed"><div class="wf-dot"></div><span>Intent Identified: Booking</span></div>
                <div class="wf-line"></div>
                <div class="wf-step completed"><div class="wf-dot"></div><span>Calendar Checked</span></div>
                <div class="wf-line"></div>
                <div class="wf-step active"><div class="wf-dot pulse"></div><span>Appointment Booked</span></div>
                <div class="wf-line"></div>
                <div class="wf-step pending"><div class="wf-dot"></div><span>SMS Confirmation Sent</span></div>
                <div class="wf-line"></div>
                <div class="wf-step pending"><div class="wf-dot"></div><span>CRM Updated</span></div>
              </div>
            </div>
            <!-- Feature 3: Analytics -->
            <div class="pd-panel" data-panel="3">
              <div class="pd-panel-header">
                <span class="pd-panel-title"><i class="fas fa-chart-bar"></i> Analytics Overview</span>
                <span class="pd-badge orange">This Week</span>
              </div>
              <div class="pd-analytics">
                <div class="analytics-row">
                  <div class="analytics-metric">
                    <span class="am-val">1,247</span>
                    <span class="am-label">Total Calls</span>
                    <span class="am-change up">+18%</span>
                  </div>
                  <div class="analytics-metric">
                    <span class="am-val">94%</span>
                    <span class="am-label">Resolution Rate</span>
                    <span class="am-change up">+5%</span>
                  </div>
                  <div class="analytics-metric">
                    <span class="am-val">312</span>
                    <span class="am-label">Bookings Made</span>
                    <span class="am-change up">+24%</span>
                  </div>
                </div>
                <div class="analytics-chart">
                  <div class="chart-bars">
                    <div class="chart-bar" style="height:55%"><span>Mon</span></div>
                    <div class="chart-bar" style="height:72%"><span>Tue</span></div>
                    <div class="chart-bar" style="height:48%"><span>Wed</span></div>
                    <div class="chart-bar" style="height:90%"><span>Thu</span></div>
                    <div class="chart-bar" style="height:65%"><span>Fri</span></div>
                    <div class="chart-bar highlight" style="height:82%"><span>Sat</span></div>
                    <div class="chart-bar" style="height:40%"><span>Sun</span></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Feature 4: Scheduling -->
            <div class="pd-panel" data-panel="4">
              <div class="pd-panel-header">
                <span class="pd-panel-title"><i class="fas fa-calendar-alt"></i> Today's Schedule</span>
                <span class="pd-badge green">12 Booked</span>
              </div>
              <div class="pd-calendar">
                <div class="cal-slot booked">
                  <span class="cal-time">9:00 AM</span>
                  <div class="cal-event">Dr. Consultation — James Wilson <span class="cal-tag">AI Booked</span></div>
                </div>
                <div class="cal-slot booked">
                  <span class="cal-time">10:30 AM</span>
                  <div class="cal-event">Demo Call — Sarah Tech Corp <span class="cal-tag">AI Booked</span></div>
                </div>
                <div class="cal-slot active">
                  <span class="cal-time">11:00 AM</span>
                  <div class="cal-event">Follow-up — Michael Brown <span class="cal-tag in-progress">In Progress</span></div>
                </div>
                <div class="cal-slot">
                  <span class="cal-time">2:00 PM</span>
                  <div class="cal-event">Sales Call — Elena Rodriguez <span class="cal-tag">AI Booked</span></div>
                </div>
                <div class="cal-slot">
                  <span class="cal-time">3:30 PM</span>
                  <div class="cal-event">Support — TechFlow Inc <span class="cal-tag">AI Booked</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======== HOW IT WORKS ======== -->
<section class="how-it-works section" id="how-it-works">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Simple Setup</div>
      <h2 class="section-title">Go Live in Minutes, Not Months</h2>
      <p class="section-subtitle">No technical expertise required. HIVIEN is designed for business operators, not developers.</p>
    </div>
    <div class="hiw-steps">
      <div class="hiw-step" data-step="1">
        <div class="hiw-step-num">01</div>
        <div class="hiw-step-icon">
          <i class="fas fa-sliders-h"></i>
        </div>
        <div class="hiw-step-content">
          <h3>Configure Your AI Agent</h3>
          <p>Choose your agent's voice, language, and personality. Set its purpose — booking, support, outbound calls — in minutes using our guided setup.</p>
        </div>
        <div class="hiw-connector"></div>
      </div>
      <div class="hiw-step" data-step="2">
        <div class="hiw-step-num">02</div>
        <div class="hiw-step-icon">
          <i class="fas fa-brain"></i>
        </div>
        <div class="hiw-step-content">
          <h3>Train With Your Business Data</h3>
          <p>Upload FAQs, services, pricing, and policies. Your AI agent learns your business and speaks with accuracy and confidence on your behalf.</p>
        </div>
        <div class="hiw-connector"></div>
      </div>
      <div class="hiw-step" data-step="3">
        <div class="hiw-step-num">03</div>
        <div class="hiw-step-icon">
          <i class="fas fa-plug"></i>
        </div>
        <div class="hiw-step-content">
          <h3>Connect Your Tools</h3>
          <p>Plug in your CRM, calendar, and communication stack. HIVIEN integrates with 50+ tools — from HubSpot to Google Calendar — no coding needed.</p>
        </div>
        <div class="hiw-connector"></div>
      </div>
      <div class="hiw-step" data-step="4">
        <div class="hiw-step-num">04</div>
        <div class="hiw-step-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <div class="hiw-step-content">
          <h3>Go Live & Scale</h3>
          <p>Activate your AI agent and watch it work. Monitor in real-time, review calls, and scale up instantly — no hiring, no training, no downtime.</p>
        </div>
      </div>
    </div>
    <div class="hiw-cta">
      <a href="#demo" class="btn btn-primary btn-lg">Get Started Today <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</section>

<!-- ======== BENEFITS SECTION ======== -->
<section class="benefits-section section" id="benefits">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Why HIVIEN</div>
      <h2 class="section-title">Outcomes That Drive Business Growth</h2>
      <p class="section-subtitle">We don't sell features — we deliver measurable results that impact your bottom line.</p>
    </div>
    <div class="benefits-grid">
      <div class="benefit-card large">
        <div class="benefit-icon">
          <i class="fas fa-phone-slash"></i>
        </div>
        <div class="benefit-number">90%</div>
        <h3>Reduction in Missed Calls</h3>
        <p>AI agents answer instantly — no hold time, no voicemail. Every caller gets served, every time.</p>
        <div class="benefit-bar"><div class="benefit-fill" style="width:90%"></div></div>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <i class="fas fa-moon"></i>
        </div>
        <div class="benefit-number">24/7</div>
        <h3>Always-On Operations</h3>
        <p>Your AI workforce never sleeps, never takes breaks, and never calls in sick.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="benefit-number">60%</div>
        <h3>Lower Communication Costs</h3>
        <p>Replace expensive call center seats with scalable AI agents — for a fraction of the cost.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <i class="fas fa-expand-arrows-alt"></i>
        </div>
        <div class="benefit-number">∞</div>
        <h3>Instant Scalability</h3>
        <p>Handle 1 call or 10,000 simultaneously. Scale up in seconds, not months.</p>
      </div>
      <div class="benefit-card">
        <div class="benefit-icon">
          <i class="fas fa-calendar-check"></i>
        </div>
        <div class="benefit-number">3x</div>
        <h3>More Bookings Captured</h3>
        <p>Never lose a booking opportunity due to unavailability. AI books around the clock.</p>
      </div>
      <div class="benefit-card large-2">
        <div class="benefit-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="benefit-number">Zero</div>
        <h3>Extra Headcount Needed</h3>
        <p>Grow your communication capacity without growing your team. Let AI do the heavy lifting so your people can focus on what matters most — building relationships and closing deals.</p>
        <div class="benefit-comparison">
          <div class="comp-col">
            <div class="comp-label">Without HIVIEN</div>
            <div class="comp-item bad"><i class="fas fa-times"></i> Hire more agents</div>
            <div class="comp-item bad"><i class="fas fa-times"></i> Training & onboarding</div>
            <div class="comp-item bad"><i class="fas fa-times"></i> Limited hours</div>
            <div class="comp-item bad"><i class="fas fa-times"></i> Human errors</div>
          </div>
          <div class="comp-col">
            <div class="comp-label hivien">With HIVIEN</div>
            <div class="comp-item good"><i class="fas fa-check"></i> Deploy instantly</div>
            <div class="comp-item good"><i class="fas fa-check"></i> Zero onboarding</div>
            <div class="comp-item good"><i class="fas fa-check"></i> 24/7 availability</div>
            <div class="comp-item good"><i class="fas fa-check"></i> Consistent quality</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======== TESTIMONIALS ======== -->
<section class="testimonials-section section" id="testimonials">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Customer Stories</div>
      <h2 class="section-title">Businesses That Never Look Back</h2>
      <p class="section-subtitle">Real results from real businesses that transformed their operations with HIVIEN.</p>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card featured-testimonial">
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <div class="testimonial-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">"Before HIVIEN, we were losing around 30% of our appointment calls to voicemail after business hours. Within two weeks of deploying HIVIEN, our booking rate increased by 43%, and our reception team could finally focus on the patients in the clinic rather than being glued to the phone."</p>
        <div class="testimonial-author">
          <div class="author-avatar" style="background: linear-gradient(135deg, #1a3a6b, #2d5aa8);">
            <span>DR</span>
          </div>
          <div class="author-info">
            <strong>Dr. Rachel Ngo</strong>
            <span>Clinic Director, MedCore Health Group</span>
          </div>
          <div class="testimonial-metric">
            <span class="tm-value">+43%</span>
            <span class="tm-label">Bookings</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <div class="testimonial-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">"We replaced our entire outbound follow-up team with HIVIEN agents. They make 500+ calls a day with no performance dips, no sick days, and no complaints. Our pipeline has never been healthier."</p>
        <div class="testimonial-author">
          <div class="author-avatar" style="background: linear-gradient(135deg, #0f4c2e, #1a7a4e);">
            <span>MK</span>
          </div>
          <div class="author-info">
            <strong>Marcus Kim</strong>
            <span>VP Sales, GrowthIQ Solutions</span>
          </div>
          <div class="testimonial-metric">
            <span class="tm-value">500+</span>
            <span class="tm-label">Daily Calls</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <div class="testimonial-stars">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">"HIVIEN's integration with our hotel's reservation system was seamless. Guests call, get instant responses, bookings are confirmed in real-time. Our front desk team now focuses on creating memorable guest experiences."</p>
        <div class="testimonial-author">
          <div class="author-avatar" style="background: linear-gradient(135deg, #6b1a1a, #a82d2d);">
            <span>SL</span>
          </div>
          <div class="author-info">
            <strong>Sophie Laurent</strong>
            <span>GM, LuxStay Boutique Hotels</span>
          </div>
          <div class="testimonial-metric">
            <span class="tm-value">98%</span>
            <span class="tm-label">Guest Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======== TRUST & CREDIBILITY ======== -->
<section class="trust-section section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Enterprise Grade</div>
      <h2 class="section-title">Built for Trust. Designed for Enterprise.</h2>
      <p class="section-subtitle">HIVIEN meets the security and compliance standards your business demands.</p>
    </div>
    <div class="trust-grid">
      <div class="trust-card">
        <div class="trust-icon"><i class="fas fa-shield-alt"></i></div>
        <h4>SOC 2 Compliant</h4>
        <p>Enterprise-grade security protocols that meet the highest industry standards for data protection and system availability.</p>
        <div class="trust-badge">Certified</div>
      </div>
      <div class="trust-card">
        <div class="trust-icon"><i class="fas fa-lock"></i></div>
        <h4>End-to-End Encryption</h4>
        <p>All call data, transcripts, and customer information are encrypted in transit and at rest with AES-256.</p>
        <div class="trust-badge">AES-256</div>
      </div>
      <div class="trust-card">
        <div class="trust-icon"><i class="fas fa-user-shield"></i></div>
        <h4>GDPR & HIPAA Ready</h4>
        <p>Full compliance support for healthcare, finance, and international operations. Your data stays yours.</p>
        <div class="trust-badge">Compliant</div>
      </div>
      <div class="trust-card">
        <div class="trust-icon"><i class="fas fa-tools"></i></div>
        <h4>Works With Your Stack</h4>
        <p>Native integrations with 50+ tools including Salesforce, HubSpot, Google Calendar, Zapier, and more.</p>
        <div class="trust-badge">50+ Tools</div>
      </div>
      <div class="trust-card">
        <div class="trust-icon"><i class="fas fa-server"></i></div>
        <h4>99.9% Uptime SLA</h4>
        <p>Enterprise SLA with guaranteed uptime, redundant infrastructure, and 24/7 monitoring and support.</p>
        <div class="trust-badge">99.9% SLA</div>
      </div>
      <div class="trust-card">
        <div class="trust-icon"><i class="fas fa-headset"></i></div>
        <h4>Dedicated Support</h4>
        <p>Onboarding specialists, dedicated account managers, and priority support ensure your success from day one.</p>
        <div class="trust-badge">24/7 Support</div>
      </div>
    </div>
    <div class="integrations-bar">
      <p>Integrates natively with:</p>
      <div class="int-logos">
        <span><i class="fas fa-cloud"></i> Salesforce</span>
        <span><i class="fas fa-hubspot"></i> HubSpot</span>
        <span><i class="fab fa-google"></i> Google</span>
        <span><i class="fab fa-microsoft"></i> Microsoft 365</span>
        <span><i class="fas fa-bolt"></i> Zapier</span>
        <span><i class="fas fa-calendar"></i> Calendly</span>
        <span><i class="fas fa-phone"></i> Twilio</span>
        <span><i class="fas fa-ellipsis-h"></i> +43 more</span>
      </div>
    </div>
  </div>
</section>

<!-- ======== ROI CALCULATOR ======== -->
<section class="roi-section section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">ROI Calculator</div>
      <h2 class="section-title">See Your Potential Savings</h2>
      <p class="section-subtitle">Estimate how much HIVIEN could save your business every month.</p>
    </div>
    <div class="roi-layout">
      <div class="roi-inputs">
        <div class="roi-input-group">
          <label>Number of customer service agents</label>
          <div class="roi-slider-wrap">
            <input type="range" min="1" max="50" value="5" class="roi-slider" id="agentCount" />
            <span class="roi-val" id="agentCountVal">5</span>
          </div>
        </div>
        <div class="roi-input-group">
          <label>Average calls per day</label>
          <div class="roi-slider-wrap">
            <input type="range" min="20" max="1000" value="100" step="10" class="roi-slider" id="callsPerDay" />
            <span class="roi-val" id="callsPerDayVal">100</span>
          </div>
        </div>
        <div class="roi-input-group">
          <label>Average agent monthly cost ($)</label>
          <div class="roi-slider-wrap">
            <input type="range" min="2000" max="8000" value="4000" step="500" class="roi-slider" id="agentCost" />
            <span class="roi-val" id="agentCostVal">$4,000</span>
          </div>
        </div>
      </div>
      <div class="roi-results">
        <div class="roi-result-card">
          <div class="roi-result-icon"><i class="fas fa-piggy-bank"></i></div>
          <div class="roi-result-val" id="monthlySavings">$12,000</div>
          <div class="roi-result-label">Estimated Monthly Savings</div>
        </div>
        <div class="roi-result-card">
          <div class="roi-result-icon"><i class="fas fa-chart-line"></i></div>
          <div class="roi-result-val" id="annualSavings">$144,000</div>
          <div class="roi-result-label">Estimated Annual Savings</div>
        </div>
        <div class="roi-result-card">
          <div class="roi-result-icon"><i class="fas fa-phone-alt"></i></div>
          <div class="roi-result-val" id="callsHandled">36,500</div>
          <div class="roi-result-label">Calls Handled Per Year</div>
        </div>
        <p class="roi-disclaimer">*Estimates based on industry averages. Actual results may vary.</p>
        <a href="#demo" class="btn btn-primary">Get Your Custom ROI Report <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

<!-- ======== FINAL CTA / DEMO FORM ======== -->
<section class="demo-section section" id="demo">
  <div class="demo-bg-orb demo-orb-1"></div>
  <div class="demo-bg-orb demo-orb-2"></div>
  <div class="container">
    <div class="demo-layout">
      <div class="demo-content">
        <div class="section-tag">Get Started</div>
        <h2 class="demo-title">Ready to Transform Your Business Communications?</h2>
        <p class="demo-subtitle">Join hundreds of businesses already using HIVIEN to handle more calls, book more appointments, and grow without limits.</p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Free 14-day trial — no credit card required</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Dedicated onboarding specialist</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Live demo with your real data</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Setup in under 30 minutes</div>
        </div>
        <div class="demo-social-proof">
          <div class="proof-avatars">
            <div class="proof-avatar" style="background:#1a3a6b">DR</div>
            <div class="proof-avatar" style="background:#0f4c2e">MK</div>
            <div class="proof-avatar" style="background:#6b1a1a">SL</div>
            <div class="proof-avatar" style="background:#4a1a6b">+</div>
          </div>
          <span>200+ businesses trust HIVIEN</span>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card">
          <div class="form-header">
            <h3>Request Your Free Demo</h3>
            <p>We'll reach out within 24 hours.</p>
          </div>
          <form class="demo-form" id="demoForm">
            <div class="form-group">
              <label for="fname">Full Name *</label>
              <div class="input-wrap">
                <i class="fas fa-user"></i>
                <input type="text" id="fname" name="fname" placeholder="John Smith" required />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Work Email *</label>
              <div class="input-wrap">
                <i class="fas fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="john@company.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="company">Company Name *</label>
              <div class="input-wrap">
                <i class="fas fa-building"></i>
                <input type="text" id="company" name="company" placeholder="Acme Corp" required />
              </div>
            </div>
            <div class="form-group">
              <label for="industry">Industry</label>
              <div class="input-wrap select-wrap">
                <i class="fas fa-industry"></i>
                <select id="industry" name="industry">
                  <option value="">Select your industry...</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="logistics">Logistics</option>
                  <option value="sales">Sales / SaaS</option>
                  <option value="realestate">Real Estate</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="callvolume">Monthly Call Volume</label>
              <div class="input-wrap select-wrap">
                <i class="fas fa-chart-bar"></i>
                <select id="callvolume" name="callvolume">
                  <option value="">Select volume...</option>
                  <option value="small">Under 500 calls/mo</option>
                  <option value="medium">500 – 2,000 calls/mo</option>
                  <option value="large">2,000 – 10,000 calls/mo</option>
                  <option value="enterprise">10,000+ calls/mo</option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-full" id="submitBtn">
              <span id="submitText"><i class="fas fa-calendar-check"></i> Request My Free Demo</span>
              <span id="submitLoading" style="display:none"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
            </button>
            <p class="form-disclaimer">
              <i class="fas fa-lock"></i>
              Your information is secure and will never be shared.
            </p>
          </form>
          <div class="form-success" id="formSuccess">
            <div class="success-icon"><i class="fas fa-check-circle"></i></div>
            <h3>You're In!</h3>
            <p>Thanks! Our team will reach out within 24 hours to schedule your personalized demo.</p>
            <div class="success-next">
              <p>What happens next:</p>
              <ol>
                <li>Check your email for a confirmation</li>
                <li>We'll review your use case</li>
                <li>A specialist will call you within 1 business day</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======== FOOTER ======== -->
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="/static/hivien-logo.png" alt="HIVIEN" class="footer-logo" />
        <p class="footer-tagline">The AI Workforce for Business Communication. Handle more calls, book more clients, grow without limits.</p>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-links-group">
        <h5>Product</h5>
        <ul>
          <li><a href="#product">Platform Overview</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#demo">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h5>Company</h5>
        <ul>
          <li><a href="#">About HIVIEN</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h5>Resources</h5>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">API Reference</a></li>
          <li><a href="#">Integration Guide</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Support Center</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h5>Contact</h5>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:hello@hivien.ai">hello@hivien.ai</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>San Francisco, CA</span>
        </div>
        <a href="#demo" class="btn btn-primary btn-sm footer-cta">Request Demo</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 HIVIEN — High Vision Engine. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Security</a>
      </div>
    </div>
  </div>
</footer>

<script src="/static/app.js"></script>
</body>
</html>`)
})

export default app
