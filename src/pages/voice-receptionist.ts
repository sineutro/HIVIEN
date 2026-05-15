import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const PAGE_TITLE = 'AI Voice Receptionist for Service Businesses | Hivien'
const PAGE_DESCRIPTION =
  'Hivien builds AI voice receptionists that answer calls, qualify callers, book appointments, update systems, and send summaries 24/7.'

const PAGE_CONTENT = `
<section class="hero" id="voice-receptionist-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Live AI Voice Receptionist
        </div>
        <h1 class="hero-title">AI Voice Receptionist That Answers Calls and Books Appointments 24/7</h1>
        <p class="hero-subtitle">
          Hivien builds live AI voice receptionists that answer inbound calls, qualify callers, handle FAQs,
          book appointments, send summaries, and update your systems.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i>
            Book Free Call Flow Audit
          </a>
          <a href="#preview" class="btn btn-ghost btn-lg">
            <i class="fas fa-play-circle"></i>
            See It In Action
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card lifecycle-dashboard">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>Live Call Flow</span>
            </div>
            <div class="dashboard-time">Always On</div>
          </div>
          <div class="lifecycle-track lifecycle-track-compact">
            <div class="lifecycle-node">Incoming Call</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">AI Answers</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Qualifies Caller</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Books Appointment</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Updates CRM</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Sends Summary</div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">Leak Example</span>
              <div class="signal-item">
                <span class="signal-amount">-$850</span>
                <span class="signal-copy">Missed after-hours call</span>
              </div>
              <div class="signal-item">
                <span class="signal-amount">-$500</span>
                <span class="signal-copy">Call not answered fast enough</span>
              </div>
              <div class="signal-item">
                <span class="signal-amount">-$300</span>
                <span class="signal-copy">Appointment request not booked</span>
              </div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">System Response</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>AI answered instantly</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Caller qualified</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Appointment booked</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Team notified</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-phone-volume"></i>
          <span>Call Answered</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-calendar-check"></i>
          <span>Booking Captured</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="pain">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Missed Call Problem</div>
      <h2 class="section-title">Every Unanswered Call Can Become a Lost Job</h2>
      <p class="section-subtitle">
        When customers cannot reach you, they often call the next business. Hivien's AI Voice Receptionist answers instantly,
        collects the right details, books or routes the request, and sends your team a clean summary.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-phone-slash"></i></div>
        <h3>Missed calls during busy hours</h3>
        <p>Calls get answered even when your team is on another line, on-site, or away from the phone.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-moon"></i></div>
        <h3>After-hours inquiries with no response</h3>
        <p>The AI receptionist keeps working after hours so urgent callers are not stuck waiting until morning.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-calendar-xmark"></i></div>
        <h3>Manual appointment booking slowing your team down</h3>
        <p>Booking logic, availability checks, and follow-up details can be handled automatically within the call flow.</p>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="capabilities">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Capabilities</div>
      <h2 class="section-title">What the AI Voice Receptionist Can Handle</h2>
      <p class="section-subtitle">
        The system is built to manage routine call workflows, capture details cleanly, and route edge cases based on your rules.
      </p>
    </div>
    <div class="capability-grid">
      <article class="trust-card capability-card"><h4>New customer calls</h4><p>Capture intent, contact details, and next steps from first-time callers.</p></article>
      <article class="trust-card capability-card"><h4>Existing appointment lookup</h4><p>Check booking details and confirm what is already scheduled.</p></article>
      <article class="trust-card capability-card"><h4>Appointment booking</h4><p>Guide the caller, check availability, and lock in the appointment.</p></article>
      <article class="trust-card capability-card"><h4>Rescheduling</h4><p>Move appointments based on your business rules and calendar access.</p></article>
      <article class="trust-card capability-card"><h4>Cancellations</h4><p>Log canceled appointments and capture any relevant notes.</p></article>
      <article class="trust-card capability-card"><h4>FAQs</h4><p>Answer common service, location, timing, and pricing-related questions.</p></article>
      <article class="trust-card capability-card"><h4>Urgent alerts</h4><p>Flag urgent scenarios and escalate them to the right person quickly.</p></article>
      <article class="trust-card capability-card"><h4>Human handoff requests</h4><p>Transfer or queue callers when they need a person instead of the agent.</p></article>
      <article class="trust-card capability-card"><h4>CRM or Google Sheet updates</h4><p>Write the call outcome into the systems your team already uses.</p></article>
      <article class="trust-card capability-card"><h4>End-of-call summaries</h4><p>Send a clean summary so your team knows what happened and what to do next.</p></article>
    </div>
  </div>
</section>

<section class="product-section section" id="workflow">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Call Flow</div>
      <h2 class="section-title">From Phone Call to Booked Appointment</h2>
      <p class="section-subtitle">
        The agent follows your business rules, asks the right questions, and routes calls based on urgency, service type,
        availability, and customer needs.
      </p>
    </div>
    <div class="workflow-flow">
      <div class="workflow-step">Call Comes In</div>
      <div class="workflow-step">AI Answers</div>
      <div class="workflow-step">Qualifies Caller</div>
      <div class="workflow-step">Checks Availability</div>
      <div class="workflow-step">Books Appointment</div>
      <div class="workflow-step">Updates CRM</div>
      <div class="workflow-step">Sends Summary</div>
    </div>
  </div>
</section>

<section class="use-cases section" id="best-for">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Use Cases</div>
      <h2 class="section-title">Built for Appointment-Based and Service Businesses</h2>
      <p class="section-subtitle">
        The strongest fit is a business where missing a call, delaying a response, or manually booking every appointment creates drag.
      </p>
    </div>
    <div class="trust-grid">
      <article class="trust-card"><h4>Roofing companies</h4><p>Capture inspection requests, storm damage calls, urgent leaks, and estimate bookings.</p></article>
      <article class="trust-card"><h4>HVAC companies</h4><p>Handle repair requests, emergency calls, maintenance bookings, and after-hours inquiries.</p></article>
      <article class="trust-card"><h4>Plumbing companies</h4><p>Answer urgent service calls, collect problem details, and route high-priority jobs fast.</p></article>
      <article class="trust-card"><h4>Spas and medspas</h4><p>Answer service questions, book appointments, collect client details, and route consultation requests.</p></article>
      <article class="trust-card"><h4>Auto detailing businesses</h4><p>Capture booking requests, answer package questions, and organize service scheduling.</p></article>
      <article class="trust-card"><h4>Clinics</h4><p>Handle inbound appointment requests, scheduling updates, and routine intake-style questions.</p></article>
      <article class="trust-card"><h4>Home service businesses</h4><p>Qualify job requests, capture addresses, and route calls by urgency or service type.</p></article>
      <article class="trust-card"><h4>Appointment-based businesses</h4><p>Reduce front-desk load while keeping inbound demand answered and organized.</p></article>
    </div>
  </div>
</section>

<section class="roi-section section" id="preview">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">System Preview</div>
      <h2 class="section-title">See the Voice Receptionist in Action</h2>
      <p class="section-subtitle">
        Add your call recording, workflow screenshots, and booking proof here so prospects can see how the system works before booking a call.
      </p>
    </div>
    <div class="live-systems-grid">
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-phone"></i></div>
        <h4>Phone call recording</h4>
        <div class="media-placeholder">Recording Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-calendar-days"></i></div>
        <h4>Booking calendar screenshot</h4>
        <div class="media-placeholder">Calendar Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-table"></i></div>
        <h4>CRM or Google Sheet update</h4>
        <div class="media-placeholder">CRM / Sheet Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-file-lines"></i></div>
        <h4>End-of-call report</h4>
        <div class="media-placeholder">Summary Placeholder</div>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="integrations">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Integrations</div>
      <h2 class="section-title">Connects With the Tools You Already Use</h2>
      <p class="section-subtitle">
        Hivien can connect your AI receptionist to calendars, CRMs, spreadsheets, support tools, notifications, and automation platforms.
      </p>
    </div>
    <div class="integrations-bar">
      <p>Works with:</p>
      <div class="int-logos">
        <span>Google Calendar</span>
        <span>Google Sheets</span>
        <span>GoHighLevel</span>
        <span>HubSpot</span>
        <span>Zapier</span>
        <span>Make</span>
        <span>n8n</span>
        <span>Webhooks</span>
        <span>SMS</span>
        <span>Email</span>
        <span>Support tools</span>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="handoff">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Human Handoff</div>
      <h2 class="section-title">AI When It Helps. Human Handoff When It Matters.</h2>
      <p class="section-subtitle">
        The AI receptionist can handle routine calls automatically, but urgent requests, edge cases, or high-value conversations can be routed to a human based on your rules.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-bell"></i></div>
        <h3>Urgent service request</h3>
        <p>Notify the owner or team immediately when a call matches your emergency conditions.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-user-clock"></i></div>
        <h3>Complex question</h3>
        <p>Collect the details cleanly and trigger a request for human follow-up when the answer needs context.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-sitemap"></i></div>
        <h3>Existing customer issue</h3>
        <p>Route the caller to support or operations based on the type of problem and the workflow you define.</p>
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
        <div class="section-tag">Call Flow Audit</div>
        <h2 class="demo-title">Ready to Stop Missing Calls?</h2>
        <p class="demo-subtitle">
          Book a free call flow audit and we'll map where an AI voice receptionist could fit inside your business.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Review where calls are leaking revenue</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Identify the booking and routing logic that matters most</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> See how a callable AI agent could fit into your operation</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free Call Flow Audit</h3>
            <p>See where a deployment-ready system could take pressure off your team.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Inbound calls</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Booking flow</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>System updates</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Human handoff</span></div>
          </div>
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg btn-full">
            <i class="fas fa-calendar-check"></i>
            Book Free Call Flow Audit
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
    path: '/voice-receptionist',
    body: `${renderNavbar()}
${PAGE_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
