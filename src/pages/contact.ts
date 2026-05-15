import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const PAGE_TITLE = 'Contact Hivien | AI Agent Systems'
const PAGE_DESCRIPTION =
  'Contact Hivien to discuss AI voice receptionists, lead generation automation, follow-up systems, support agents, and customer lifecycle automation.'

const PAGE_CONTENT = `
<section class="hero" id="contact-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Contact Hivien
        </div>
        <h1 class="hero-title">Let's Find Your Best AI Automation Opportunity</h1>
        <p class="hero-subtitle">
          Tell us where your business is losing time, leads, calls, or support capacity. Hivien will help map the
          simplest AI system that makes sense.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i>
            Book Free AI Revenue Audit
          </a>
          <a href="mailto:hello@hivien.com" class="btn btn-ghost btn-lg">
            <i class="fas fa-envelope"></i>
            Email Hivien
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card lifecycle-dashboard">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>Fastest Contact Paths</span>
            </div>
            <div class="dashboard-time">Simple Start</div>
          </div>
          <div class="lifecycle-track lifecycle-track-compact">
            <div class="lifecycle-node">Book Audit</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Share Context</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Map Bottleneck</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Choose System</div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">What to Bring</span>
              <div class="signal-item"><span class="signal-copy">Where leads or calls get missed</span></div>
              <div class="signal-item"><span class="signal-copy">Current CRM or workflow tools</span></div>
              <div class="signal-item"><span class="signal-copy">What you want to automate first</span></div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">What You'll Get</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Fastest starting path</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Offer fit recommendation</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Clear next step</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-envelope-open-text"></i>
          <span>Inquiry Ready</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-calendar-plus"></i>
          <span>Audit Booking</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="use-cases section" id="contact-options">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Contact Options</div>
      <h2 class="section-title">Choose the Fastest Way to Start</h2>
      <p class="section-subtitle">
        If you already know you want to talk through the workflow, book the audit. If you prefer to send context first,
        email or use the inquiry form below.
      </p>
    </div>
    <div class="contact-options-grid">
      <article class="trust-card contact-option-card">
        <div class="trust-icon"><i class="fas fa-calendar-check"></i></div>
        <h4>Book an Audit</h4>
        <p>Best if you want to map your calls, leads, support, or customer lifecycle and see what AI can automate.</p>
        <a href="BOOKING_LINK_HERE" class="btn btn-ghost">Book a Call</a>
      </article>
      <article class="trust-card contact-option-card">
        <div class="trust-icon"><i class="fas fa-envelope"></i></div>
        <h4>Email Hivien</h4>
        <p>Send details about your business, current tools, and what you want to automate.</p>
        <a href="mailto:hello@hivien.com" class="btn btn-ghost">hello@hivien.com</a>
      </article>
      <article class="trust-card contact-option-card">
        <div class="trust-icon"><i class="fas fa-comments"></i></div>
        <h4>Not Sure Yet?</h4>
        <p>Start with a quick message. We'll help you identify whether a voice receptionist, lead gen system, support agent, or full AI system makes sense.</p>
        <a href="#inquiry" class="btn btn-ghost">Send Inquiry</a>
      </article>
    </div>
  </div>
</section>

<section class="demo-section section" id="inquiry">
  <div class="demo-bg-orb demo-orb-1"></div>
  <div class="demo-bg-orb demo-orb-2"></div>
  <div class="container">
    <div class="demo-layout contact-inquiry-layout">
      <div class="demo-content">
        <div class="section-tag">Inquiry Form</div>
        <h2 class="demo-title">Send a Quick Inquiry</h2>
        <p class="demo-subtitle">
          Share a few details and we'll point you toward the simplest next step.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Mention the bottleneck you want fixed first</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Include the tools your team already uses</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Tell us whether you're exploring one workflow or a connected system</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card">
          <div class="form-header">
            <h3>Send Inquiry</h3>
            <p id="contactMailtoNote">This opens your email app so you can send the inquiry directly.</p>
          </div>
          <form id="contactInquiryForm" data-mailto="hello@hivien.com">
            <div class="form-group">
              <label for="contactName">Name</label>
              <div class="input-wrap">
                <i class="fas fa-user"></i>
                <input id="contactName" name="name" type="text" placeholder="Your name" required />
              </div>
            </div>
            <div class="form-group">
              <label for="contactEmail">Business email</label>
              <div class="input-wrap">
                <i class="fas fa-envelope"></i>
                <input id="contactEmail" name="email" type="email" placeholder="name@company.com" required />
              </div>
            </div>
            <div class="form-group">
              <label for="contactCompany">Company name</label>
              <div class="input-wrap">
                <i class="fas fa-building"></i>
                <input id="contactCompany" name="company" type="text" placeholder="Your company" />
              </div>
            </div>
            <div class="form-group">
              <label for="contactWebsite">Website</label>
              <div class="input-wrap">
                <i class="fas fa-globe"></i>
                <input id="contactWebsite" name="website" type="url" placeholder="https://yourwebsite.com" />
              </div>
            </div>
            <div class="form-group">
              <label for="contactSystem">Which system are you interested in?</label>
              <div class="input-wrap select-wrap">
                <i class="fas fa-diagram-project"></i>
                <select id="contactSystem" name="system" required>
                  <option value="">Choose a system</option>
                  <option>AI Voice Receptionist</option>
                  <option>AI Lead Gen + Follow-Up</option>
                  <option>AI Support Agent</option>
                  <option>Full Customer Lifecycle AI System</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="contactAutomation">What do you want to automate?</label>
              <div class="input-wrap input-wrap-textarea">
                <i class="fas fa-pen"></i>
                <textarea id="contactAutomation" name="automation" rows="6" placeholder="Tell us about the process, bottleneck, or workflow you want help with." required></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-full">
              <i class="fas fa-paper-plane"></i>
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="what-to-include">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">What to Include</div>
      <h2 class="section-title">What Helps Us Map the Right System</h2>
      <p class="section-subtitle">
        The more clearly we understand your current process, the easier it is to recommend the simplest system that fits.
      </p>
    </div>
    <div class="compare-card pricing-note-card">
      <div class="pricing-note-list">
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Your business type</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Current tools or CRM</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Where leads currently come from</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>How calls are handled now</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Where follow-up gets delayed</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Common customer support questions</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>What you want automated first</span></div>
      </div>
    </div>
  </div>
</section>

<section class="demo-section section" id="final-cta">
  <div class="demo-bg-orb demo-orb-1"></div>
  <div class="demo-bg-orb demo-orb-2"></div>
  <div class="container">
    <div class="demo-layout final-cta-layout">
      <div class="demo-content">
        <div class="section-tag">Fastest Path</div>
        <h2 class="demo-title">Want the Fastest Path?</h2>
        <p class="demo-subtitle">
          Book the audit. It is the easiest way to map your current process and see which AI system fits.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Review the current bottleneck</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> See which offer fits first</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Avoid overbuilding the workflow</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free AI Revenue Audit</h3>
            <p>Use the audit to map the cleanest first automation step.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Calls</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Leads</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Support</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Workflow fit</span></div>
          </div>
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg btn-full">
            <i class="fas fa-calendar-check"></i>
            Book Free AI Revenue Audit
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
`

export function renderPage() {
  return renderLayout({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: '/contact',
    body: `${renderNavbar()}
${PAGE_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
