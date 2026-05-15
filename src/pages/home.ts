import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const HOME_TITLE = 'Hivien | AI Agents for Calls, Leads, Support, and Automation'
const HOME_DESCRIPTION =
  'Hivien builds live AI agent systems for voice reception, lead generation, follow-up, support, booking, CRM updates, and customer lifecycle automation.'

const HOME_CONTENT = `
<section class="hero" id="home">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Live AI Agent Systems
        </div>
        <h1 class="hero-title">AI Agents for the Entire Customer Lifecycle</h1>
        <p class="hero-subtitle">
          Hivien builds live AI systems that generate leads, follow up fast, answer calls, book appointments,
          handle support, and automate customer workflows - 24/7.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i>
            Book Free AI Revenue Audit
          </a>
          <a href="#systems" class="btn btn-ghost btn-lg">
            <i class="fas fa-layer-group"></i>
            Explore AI Systems
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card lifecycle-dashboard">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>Customer Lifecycle View</span>
            </div>
            <div class="dashboard-time">24/7</div>
          </div>
          <div class="lifecycle-track">
            <div class="lifecycle-node">Lead Generated</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Follow-Up Sent</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Call Answered</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Appointment Booked</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Customer Supported</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">CRM Updated</div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">Leak Examples</span>
              <div class="signal-item">
                <span class="signal-amount">-$850</span>
                <span class="signal-copy">Missed after-hours call</span>
              </div>
              <div class="signal-item">
                <span class="signal-amount">-$300</span>
                <span class="signal-copy">Lead not contacted fast enough</span>
              </div>
              <div class="signal-item">
                <span class="signal-amount">-$500</span>
                <span class="signal-copy">Appointment request not booked</span>
              </div>
              <div class="signal-item">
                <span class="signal-amount">-$120</span>
                <span class="signal-copy">Support request left waiting</span>
              </div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">Fixed Actions</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>AI followed up instantly</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>AI answered the call</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>AI booked the appointment</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>AI updated CRM</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>AI handled support request</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-bolt"></i>
          <span>Automation Active</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-route"></i>
          <span>Lifecycle Connected</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="revenue-leaks">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Revenue Leak Audit</div>
      <h2 class="section-title">Where Is Your Customer Journey Leaking Revenue?</h2>
      <p class="section-subtitle">
        Most businesses do not only lose money from a lack of leads. They lose money when leads are not followed up with,
        calls go unanswered, appointments are not booked, and customers wait too long for support.
      </p>
    </div>
    <div class="leak-compare">
      <div class="compare-card">
        <div class="compare-card-label">Revenue Leaks</div>
        <ul class="compare-list compare-list-loss">
          <li><i class="fas fa-times-circle"></i><span>No consistent lead generation</span></li>
          <li><i class="fas fa-times-circle"></i><span>Slow follow-up</span></li>
          <li><i class="fas fa-times-circle"></i><span>Missed calls during busy hours</span></li>
          <li><i class="fas fa-times-circle"></i><span>After-hours inquiries</span></li>
          <li><i class="fas fa-times-circle"></i><span>Manual appointment booking</span></li>
          <li><i class="fas fa-times-circle"></i><span>Repetitive customer support</span></li>
          <li><i class="fas fa-times-circle"></i><span>Forgotten follow-ups</span></li>
        </ul>
      </div>
      <div class="compare-card compare-card-dark">
        <div class="compare-card-label">Fixed by Hivien AI</div>
        <ul class="compare-list compare-list-fixed">
          <li><i class="fas fa-check-circle"></i><span>Lead sourcing and enrichment</span></li>
          <li><i class="fas fa-check-circle"></i><span>Fast lead follow-up</span></li>
          <li><i class="fas fa-check-circle"></i><span>24/7 AI call answering</span></li>
          <li><i class="fas fa-check-circle"></i><span>Appointment booking</span></li>
          <li><i class="fas fa-check-circle"></i><span>CRM and sheet updates</span></li>
          <li><i class="fas fa-check-circle"></i><span>Support ticket creation</span></li>
          <li><i class="fas fa-check-circle"></i><span>Human handoff when needed</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="use-cases section" id="systems">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">AI Systems</div>
      <h2 class="section-title">Choose the AI System Your Business Needs</h2>
      <p class="section-subtitle">
        Hivien builds live AI agent systems for the full customer lifecycle: generating leads, following up fast,
        answering calls, booking appointments, handling support, updating CRMs, and automating workflows.
      </p>
    </div>
    <div class="systems-grid">
      <article class="use-case-card system-card">
        <div class="uc-icon-wrap"><i class="fas fa-phone-volume"></i></div>
        <div class="uc-tag">Offer 01</div>
        <h3>AI Voice Receptionist</h3>
        <p>Answers calls 24/7, qualifies callers, books appointments, handles FAQs, sends summaries, and updates your systems.</p>
        <a href="/voice-receptionist" class="btn btn-ghost">View System</a>
      </article>
      <article class="use-case-card system-card">
        <div class="uc-icon-wrap"><i class="fas fa-user-plus"></i></div>
        <div class="uc-tag">Offer 02</div>
        <h3>AI Lead Gen + Follow-Up</h3>
        <p>Finds prospects, cleans and enriches lead data, scores opportunities, generates outreach, and follows up with new leads.</p>
        <a href="/lead-gen-follow-up" class="btn btn-ghost">View System</a>
      </article>
      <article class="use-case-card system-card">
        <div class="uc-icon-wrap"><i class="fas fa-headset"></i></div>
        <div class="uc-tag">Offer 03</div>
        <h3>AI Support Agent</h3>
        <p>Handles repetitive support questions, looks up information, creates tickets, sends updates, and hands off complex issues.</p>
        <a href="/support-agent" class="btn btn-ghost">View System</a>
      </article>
      <article class="use-case-card system-card featured">
        <div class="uc-icon-wrap"><i class="fas fa-diagram-project"></i></div>
        <div class="uc-tag">Offer 04</div>
        <h3>Full Customer Lifecycle AI System</h3>
        <p>Combines lead generation, follow-up, voice receptionist, booking, CRM updates, and support into one connected AI system.</p>
        <a href="/full-ai-system" class="btn btn-primary">View System</a>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Lifecycle Automation</div>
      <h2 class="section-title">One System From First Contact to Customer Support</h2>
      <p class="section-subtitle">
        Hivien can build one agent for a specific bottleneck or connect multiple AI agents into a full customer lifecycle system.
      </p>
    </div>
    <div class="lifecycle-band">
      <div class="lifecycle-step"><span>01</span><strong>Find Leads</strong></div>
      <div class="lifecycle-step"><span>02</span><strong>Enrich &amp; Score</strong></div>
      <div class="lifecycle-step"><span>03</span><strong>Follow Up</strong></div>
      <div class="lifecycle-step"><span>04</span><strong>Answer Calls</strong></div>
      <div class="lifecycle-step"><span>05</span><strong>Book Appointments</strong></div>
      <div class="lifecycle-step"><span>06</span><strong>Update CRM</strong></div>
      <div class="lifecycle-step"><span>07</span><strong>Support Customers</strong></div>
      <div class="lifecycle-step"><span>08</span><strong>Improve Workflow</strong></div>
    </div>
  </div>
</section>

<section class="how-it-works section" id="how-it-works">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Build Process</div>
      <h2 class="section-title">How Hivien Builds Your AI System</h2>
      <p class="section-subtitle">
        We focus on the real customer journey, the manual bottlenecks, and the handoffs that need to work in production.
      </p>
    </div>
    <div class="hiw-steps hiw-steps-6">
      <div class="hiw-step">
        <div class="hiw-step-num">01</div>
        <div class="hiw-step-icon"><i class="fas fa-map"></i></div>
        <div class="hiw-step-content">
          <h3>Map your customer journey</h3>
          <p>We document how leads, calls, bookings, support requests, and updates move through your business.</p>
        </div>
      </div>
      <div class="hiw-step">
        <div class="hiw-step-num">02</div>
        <div class="hiw-step-icon"><i class="fas fa-funnel-dollar"></i></div>
        <div class="hiw-step-content">
          <h3>Identify revenue leaks and manual bottlenecks</h3>
          <p>We pinpoint where speed, consistency, and handoffs are breaking down.</p>
        </div>
      </div>
      <div class="hiw-step">
        <div class="hiw-step-num">03</div>
        <div class="hiw-step-icon"><i class="fas fa-brain"></i></div>
        <div class="hiw-step-content">
          <h3>Design the AI agent or full system</h3>
          <p>We scope the agent behavior, workflows, and human handoff paths that fit your operation.</p>
        </div>
      </div>
      <div class="hiw-step">
        <div class="hiw-step-num">04</div>
        <div class="hiw-step-icon"><i class="fas fa-plug-circle-bolt"></i></div>
        <div class="hiw-step-content">
          <h3>Connect your tools and workflows</h3>
          <p>Calendars, CRMs, Google Sheets, support tools, webhooks, and automations get wired into the system.</p>
        </div>
      </div>
      <div class="hiw-step">
        <div class="hiw-step-num">05</div>
        <div class="hiw-step-icon"><i class="fas fa-vial-circle-check"></i></div>
        <div class="hiw-step-content">
          <h3>Test real scenarios</h3>
          <p>We run live examples so the agent behavior matches actual lead, call, booking, and support workflows.</p>
        </div>
      </div>
      <div class="hiw-step">
        <div class="hiw-step-num">06</div>
        <div class="hiw-step-icon"><i class="fas fa-rocket"></i></div>
        <div class="hiw-step-content">
          <h3>Launch, monitor, and improve</h3>
          <p>Once live, we keep refining performance, routing, prompts, and automation logic.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="roi-section section" id="live-systems">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Live Systems</div>
      <h2 class="section-title">Live AI Systems Built by Hivien</h2>
      <p class="section-subtitle">
        Hivien builds callable, working AI agents connected to tools like calendars, CRMs, Google Sheets,
        support systems, webhooks, and automation workflows.
      </p>
    </div>
    <div class="live-systems-grid">
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-phone"></i></div>
        <h4>AI voice receptionist answering and booking calls</h4>
        <div class="media-placeholder">Video / Screenshot Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-filter-circle-dollar"></i></div>
        <h4>Lead generation and follow-up workflow</h4>
        <div class="media-placeholder">Video / Screenshot Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-ticket"></i></div>
        <h4>Support agent with ticket creation</h4>
        <div class="media-placeholder">Video / Screenshot Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-arrows-to-dot"></i></div>
        <h4>Full lifecycle AI system</h4>
        <div class="media-placeholder">Video / Screenshot Placeholder</div>
      </article>
    </div>
  </div>
</section>

<section class="demo-section section" id="final-cta">
  <div class="demo-bg-orb demo-orb-1"></div>
  <div class="demo-bg-orb demo-orb-2"></div>
  <div class="container">
    <div class="demo-layout final-cta-layout">
      <div class="demo-content">
        <div class="section-tag">Free AI Revenue Audit</div>
        <h2 class="demo-title">Want to Find the Biggest Automation Opportunity in Your Business?</h2>
        <p class="demo-subtitle">
          Book a free AI revenue audit and we'll map where your business is losing time, leads, calls, or support capacity -
          then recommend the simplest AI system to fix it.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Clarify the highest-value workflow to automate first</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> See where speed and follow-up are breaking revenue flow</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Get a practical recommendation for one agent or a connected system</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free AI Revenue Audit</h3>
            <p>Start with the bottleneck that matters most.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Leads</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Calls</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Bookings</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Support</span></div>
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

export function renderHomePage() {
  return renderLayout({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: '/',
    body: `${renderNavbar()}
${HOME_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
