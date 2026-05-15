import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const PAGE_TITLE = 'Full Customer Lifecycle AI System | Hivien'
const PAGE_DESCRIPTION =
  'Hivien builds full customer lifecycle AI systems that combine lead generation, follow-up, AI voice receptionists, appointment booking, CRM updates, and support automation.'

const PAGE_CONTENT = `
<section class="hero" id="full-ai-system-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Connected AI System
        </div>
        <h1 class="hero-title">Full Customer Lifecycle AI System</h1>
        <p class="hero-subtitle">
          One connected AI system to find leads, follow up, answer calls, book appointments, update your CRM,
          and support customers after they buy.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-diagram-project"></i>
            Map My AI System
          </a>
          <a href="#lifecycle" class="btn btn-ghost btn-lg">
            <i class="fas fa-route"></i>
            See Full Lifecycle
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card lifecycle-dashboard">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>Connected Lifecycle View</span>
            </div>
            <div class="dashboard-time">Deployment Ready</div>
          </div>
          <div class="lifecycle-track lifecycle-track-compact">
            <div class="lifecycle-node">Find Leads</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Follow Up</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Answer Calls</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Book Appointments</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Update CRM</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Support Customers</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Improve System</div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">Broken Journey</span>
              <div class="signal-item"><span class="signal-copy">Lead not followed up</span></div>
              <div class="signal-item"><span class="signal-copy">Call missed</span></div>
              <div class="signal-item"><span class="signal-copy">Appointment not booked</span></div>
              <div class="signal-item"><span class="signal-copy">Customer question delayed</span></div>
              <div class="signal-item"><span class="signal-copy">CRM not updated</span></div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">Connected by Hivien AI</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Lead captured</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Follow-up sent</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Call answered</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Appointment booked</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Support handled</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>CRM updated</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-link"></i>
          <span>Workflow Connected</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-bolt"></i>
          <span>Automation Active</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="pain">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Lifecycle Problem</div>
      <h2 class="section-title">Your Customer Journey Breaks in More Than One Place</h2>
      <p class="section-subtitle">
        Most businesses do not lose revenue from one single problem. Leads are not followed up with fast enough.
        Calls go unanswered. Appointments are handled manually. Support requests pile up. Hivien connects these
        pieces into one AI-powered customer lifecycle system.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-filter-circle-dollar"></i></div>
        <h3>Leads generated but not followed up with consistently</h3>
        <p>Demand gets wasted when follow-up speed and organization depend on manual effort.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-phone-slash"></i></div>
        <h3>Calls answered manually or missed during busy hours</h3>
        <p>Inbound demand becomes uneven when the phone is tied to whoever happens to be available.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-headset"></i></div>
        <h3>Customer support handled slowly across disconnected tools</h3>
        <p>Support work drags when ticketing, updates, and follow-up all live in separate systems.</p>
      </article>
    </div>
  </div>
</section>

<section class="use-cases section" id="system-overview">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">System Overview</div>
      <h2 class="section-title">One System. Three Core Agents.</h2>
      <p class="section-subtitle">
        The umbrella offer connects lead generation, follow-up, voice reception, booking, CRM updates, and support
        into one built and tested workflow.
      </p>
    </div>
    <div class="agent-system-grid">
      <article class="use-case-card agent-system-card">
        <div class="uc-icon-wrap"><i class="fas fa-user-plus"></i></div>
        <div class="uc-tag">Core Agent 01</div>
        <h3>AI Lead Gen + Follow-Up</h3>
        <p>Finds prospects, cleans and enriches data, scores fit, prepares outreach, and follows up.</p>
        <a href="/lead-gen-follow-up" class="btn btn-ghost">View Agent</a>
      </article>
      <article class="use-case-card agent-system-card">
        <div class="uc-icon-wrap"><i class="fas fa-phone-volume"></i></div>
        <div class="uc-tag">Core Agent 02</div>
        <h3>AI Voice Receptionist</h3>
        <p>Answers calls, qualifies callers, books appointments, routes urgent requests, and updates systems.</p>
        <a href="/voice-receptionist" class="btn btn-ghost">View Agent</a>
      </article>
      <article class="use-case-card agent-system-card">
        <div class="uc-icon-wrap"><i class="fas fa-headset"></i></div>
        <div class="uc-tag">Core Agent 03</div>
        <h3>AI Support Agent</h3>
        <p>Answers repetitive questions, checks information, creates tickets, sends updates, and hands off complex issues.</p>
        <a href="/support-agent" class="btn btn-ghost">View Agent</a>
      </article>
    </div>
    <div class="lifecycle-band agent-bridge">
      <div class="lifecycle-step"><span>Stage 01</span><strong>Generate Demand</strong></div>
      <div class="lifecycle-step"><span>Stage 02</span><strong>Capture &amp; Book</strong></div>
      <div class="lifecycle-step"><span>Stage 03</span><strong>Support &amp; Retain</strong></div>
    </div>
  </div>
</section>

<section class="product-section section" id="lifecycle">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Full Workflow</div>
      <h2 class="section-title">From First Prospect to Supported Customer</h2>
      <p class="section-subtitle">
        The system can start with one agent and expand over time, or be designed as a connected workflow from the beginning.
      </p>
    </div>
    <div class="workflow-flow workflow-flow-11">
      <div class="workflow-step">Source Leads</div>
      <div class="workflow-step">Enrich &amp; Score</div>
      <div class="workflow-step">Generate Outreach</div>
      <div class="workflow-step">Follow Up</div>
      <div class="workflow-step">Answer Calls</div>
      <div class="workflow-step">Book Appointment</div>
      <div class="workflow-step">Update CRM</div>
      <div class="workflow-step">Send Summary</div>
      <div class="workflow-step">Handle Support</div>
      <div class="workflow-step">Escalate When Needed</div>
      <div class="workflow-step">Improve System</div>
    </div>
  </div>
</section>

<section class="trust-section section" id="capabilities">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">System Components</div>
      <h2 class="section-title">What the Full AI System Can Include</h2>
      <p class="section-subtitle">
        The full lifecycle offer is designed to connect demand generation, booking, customer updates, and support in one system.
      </p>
    </div>
    <div class="capability-grid">
      <article class="trust-card capability-card"><h4>Lead sourcing</h4><p>Collect target prospects based on your market and offer.</p></article>
      <article class="trust-card capability-card"><h4>Lead enrichment</h4><p>Add useful business details before follow-up begins.</p></article>
      <article class="trust-card capability-card"><h4>Lead scoring</h4><p>Prioritize prospects based on fit and routing rules.</p></article>
      <article class="trust-card capability-card"><h4>Outreach generation</h4><p>Prepare outreach and next-step context for the pipeline.</p></article>
      <article class="trust-card capability-card"><h4>Lead follow-up</h4><p>Keep demand moving instead of letting leads go cold.</p></article>
      <article class="trust-card capability-card"><h4>AI call answering</h4><p>Handle inbound calls consistently even during busy hours.</p></article>
      <article class="trust-card capability-card"><h4>Appointment booking</h4><p>Turn qualified demand into scheduled next steps.</p></article>
      <article class="trust-card capability-card"><h4>Calendar integration</h4><p>Sync booking logic with availability and scheduling rules.</p></article>
      <article class="trust-card capability-card"><h4>CRM updates</h4><p>Write call, lead, and support outcomes into your CRM.</p></article>
      <article class="trust-card capability-card"><h4>Google Sheet updates</h4><p>Keep structured operational views current for the team.</p></article>
      <article class="trust-card capability-card"><h4>Support ticket creation</h4><p>Open tickets when a request needs follow-through or escalation.</p></article>
      <article class="trust-card capability-card"><h4>Help center search</h4><p>Support answers can reference your documentation and policies.</p></article>
      <article class="trust-card capability-card"><h4>Human handoff</h4><p>Escalate high-value or sensitive cases to the right person.</p></article>
      <article class="trust-card capability-card"><h4>Reporting</h4><p>Track how the system moves work across the lifecycle.</p></article>
      <article class="trust-card capability-card"><h4>Workflow optimization</h4><p>Improve prompts, routing, and automation logic as the system matures.</p></article>
    </div>
  </div>
</section>

<section class="use-cases section" id="best-for">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Best Fit</div>
      <h2 class="section-title">Best for Businesses That Want More Than One Automation</h2>
      <p class="section-subtitle">
        This offer fits teams that want the parts of the customer journey to stop operating like separate disconnected projects.
      </p>
    </div>
    <div class="trust-grid">
      <article class="trust-card"><h4>Growing service businesses</h4><p>Connect lead handling, call answering, booking, and customer support into one smoother system.</p></article>
      <article class="trust-card"><h4>Agencies</h4><p>Build repeatable lead, follow-up, and support workflows for internal operations or client delivery.</p></article>
      <article class="trust-card"><h4>Clinics and appointment-based businesses</h4><p>Answer calls, book appointments, send summaries, and handle routine customer questions.</p></article>
      <article class="trust-card"><h4>Home service companies</h4><p>Coordinate demand generation, call answering, booking, and after-service support in one flow.</p></article>
      <article class="trust-card"><h4>Sales teams</h4><p>Create a cleaner handoff between sourced demand, follow-up, and booked conversations.</p></article>
      <article class="trust-card"><h4>Businesses with missed calls and slow follow-up</h4><p>Reduce gaps between prospect interest, response speed, and booking capture.</p></article>
      <article class="trust-card"><h4>Businesses with repetitive support</h4><p>Connect post-sale support into the same operating system instead of treating it separately.</p></article>
    </div>
  </div>
</section>

<section class="roi-section section" id="preview">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Live System Preview</div>
      <h2 class="section-title">See the Full Lifecycle System in Action</h2>
      <p class="section-subtitle">
        Add workflow videos, call recordings, lead pipeline screenshots, CRM updates, and support ticket examples here so prospects can see how the connected system works before booking a call.
      </p>
    </div>
    <div class="live-systems-grid">
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-play"></i></div>
        <h4>Lead gen workflow video</h4>
        <div class="media-placeholder">Workflow Video Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-paper-plane"></i></div>
        <h4>Follow-up workflow screenshot</h4>
        <div class="media-placeholder">Follow-Up Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-phone"></i></div>
        <h4>Voice receptionist call recording</h4>
        <div class="media-placeholder">Call Recording Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-calendar-days"></i></div>
        <h4>Calendar or CRM update</h4>
        <div class="media-placeholder">Calendar / CRM Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-ticket"></i></div>
        <h4>Support ticket workflow</h4>
        <div class="media-placeholder">Ticket Workflow Placeholder</div>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="integrations">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Integration Layer</div>
      <h2 class="section-title">Designed to Connect With Your Existing Tools</h2>
      <p class="section-subtitle">
        Hivien can connect the system to the tools your business already uses for leads, calls, calendars, CRM, support, notifications, and reporting.
      </p>
    </div>
    <div class="integrations-bar">
      <p>Works with:</p>
      <div class="int-logos">
        <span>Google Calendar</span>
        <span>Google Sheets</span>
        <span>Airtable</span>
        <span>HubSpot</span>
        <span>GoHighLevel</span>
        <span>Pipedrive</span>
        <span>Zendesk</span>
        <span>Intercom</span>
        <span>Zapier</span>
        <span>Make</span>
        <span>n8n</span>
        <span>Webhooks</span>
        <span>Email</span>
        <span>SMS</span>
        <span>Slack</span>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="build-path">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Build Path</div>
      <h2 class="section-title">Start With One Agent or Build the Full System</h2>
      <p class="section-subtitle">
        The right rollout depends on where your biggest bottleneck lives today and how connected you want the workflow to be from the start.
      </p>
    </div>
    <div class="leak-compare">
      <article class="compare-card">
        <div class="compare-card-label">Start Focused</div>
        <p class="service-compare-copy">
          Begin with the highest-value bottleneck, like missed calls, slow follow-up, or repetitive support.
          Once the first workflow is stable, expand from there.
        </p>
      </article>
      <article class="compare-card compare-card-dark">
        <div class="compare-card-label">Build Connected</div>
        <p class="service-compare-copy service-compare-copy-dark">
          Map the full customer journey from lead generation to booking and support, then design the AI system around the entire flow.
        </p>
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
        <div class="section-tag">AI System Audit</div>
        <h2 class="demo-title">Ready to Build Your AI Customer Lifecycle?</h2>
        <p class="demo-subtitle">
          Book a free AI system audit and we'll map the highest-value automation opportunities across your leads, calls, appointments, and support.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Identify where disconnected workflows are creating drag</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Decide whether to start with one agent or design the connected system</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> See how the lifecycle can be mapped into one deployment-ready workflow</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free AI System Audit</h3>
            <p>Clarify the next automation layer across leads, calls, bookings, and support.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Lead flow</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Call flow</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Booking flow</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Support flow</span></div>
          </div>
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg btn-full">
            <i class="fas fa-calendar-check"></i>
            Book Free AI System Audit
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
    path: '/full-ai-system',
    body: `${renderNavbar()}
${PAGE_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
