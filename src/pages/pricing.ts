import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const PAGE_TITLE = 'AI Agent Pricing | Hivien'
const PAGE_DESCRIPTION =
  "View starting prices for Hivien's AI voice receptionist, lead gen and follow-up system, support agent, and full customer lifecycle AI system."

const PAGE_CONTENT = `
<section class="hero" id="pricing-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Starting At Pricing
        </div>
        <h1 class="hero-title">Pricing for Live AI Agent Systems</h1>
        <p class="hero-subtitle">
          Start with one high-value workflow or connect multiple agents into a full customer lifecycle system.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-chart-line"></i>
            Book Free AI Revenue Audit
          </a>
          <a href="#pricing" class="btn btn-ghost btn-lg">
            <i class="fas fa-table-columns"></i>
            Compare Systems
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card pricing-hero-board">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>System Pricing Snapshot</span>
            </div>
            <div class="dashboard-time">Custom Scope</div>
          </div>
          <div class="pricing-snippet-grid">
            <div class="pricing-snippet">
              <span class="pricing-snippet-label">Voice Receptionist</span>
              <strong>$750 + $300/mo</strong>
            </div>
            <div class="pricing-snippet">
              <span class="pricing-snippet-label">Lead Gen + Follow-Up</span>
              <strong>$1,000 + $400/mo</strong>
            </div>
            <div class="pricing-snippet">
              <span class="pricing-snippet-label">Support Agent</span>
              <strong>$1,000 + $400/mo</strong>
            </div>
            <div class="pricing-snippet pricing-snippet-premium">
              <span class="pricing-snippet-label">Full AI System</span>
              <strong>$2,500 + $900/mo</strong>
            </div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">Pricing Factors</span>
              <div class="signal-item"><span class="signal-copy">Call volume and lead volume</span></div>
              <div class="signal-item"><span class="signal-copy">CRM and calendar complexity</span></div>
              <div class="signal-item"><span class="signal-copy">Workflow depth and human handoff rules</span></div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">Audit Outcome</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Simplest recommended scope</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Clear setup baseline</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Expansion path if needed</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-sliders"></i>
          <span>Scope Adjusted</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-layer-group"></i>
          <span>Multi-Agent Ready</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="use-cases section" id="pricing">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Pricing</div>
      <h2 class="section-title">Choose the System That Fits Your Current Bottleneck</h2>
      <p class="section-subtitle">
        These starting prices set the baseline for a deployment-ready system. Final scope depends on workflow complexity,
        integrations, and the level of ongoing support your business needs.
      </p>
    </div>
    <div class="pricing-grid">
      <article class="pricing-card">
        <div class="pricing-card-top">
          <div class="pricing-card-head">
            <div class="pricing-card-label">AI Voice Receptionist</div>
            <div class="pricing-card-price">Starting at $750 setup + $300/month</div>
          </div>
          <p class="pricing-card-bestfor">
            Best for businesses that want 24/7 call answering, lead capture, appointment booking, FAQs, summaries,
            and simple CRM or sheet updates.
          </p>
        </div>
        <div class="pricing-card-includes">Includes</div>
        <ul class="pricing-card-list">
          <li><i class="fas fa-check-circle"></i><span>Call flow design</span></li>
          <li><i class="fas fa-check-circle"></i><span>AI voice receptionist setup</span></li>
          <li><i class="fas fa-check-circle"></i><span>FAQ handling</span></li>
          <li><i class="fas fa-check-circle"></i><span>Lead capture</span></li>
          <li><i class="fas fa-check-circle"></i><span>Appointment request handling</span></li>
          <li><i class="fas fa-check-circle"></i><span>Email/SMS summaries</span></li>
          <li><i class="fas fa-check-circle"></i><span>Google Sheet or CRM update</span></li>
          <li><i class="fas fa-check-circle"></i><span>Testing and launch support</span></li>
        </ul>
        <a href="BOOKING_LINK_HERE" class="btn btn-ghost btn-full">
          <i class="fas fa-calendar-check"></i>
          Book Call Flow Audit
        </a>
      </article>

      <article class="pricing-card">
        <div class="pricing-card-top">
          <div class="pricing-card-head">
            <div class="pricing-card-label">AI Lead Gen + Follow-Up</div>
            <div class="pricing-card-price">Starting at $1,000 setup + $400/month</div>
          </div>
          <p class="pricing-card-bestfor">
            Best for businesses that want to find prospects, clean and enrich lead data, score leads, prepare outreach,
            and follow up faster.
          </p>
        </div>
        <div class="pricing-card-includes">Includes</div>
        <ul class="pricing-card-list">
          <li><i class="fas fa-check-circle"></i><span>Lead sourcing workflow</span></li>
          <li><i class="fas fa-check-circle"></i><span>Data cleaning</span></li>
          <li><i class="fas fa-check-circle"></i><span>Data enrichment</span></li>
          <li><i class="fas fa-check-circle"></i><span>Lead scoring</span></li>
          <li><i class="fas fa-check-circle"></i><span>Outreach generation</span></li>
          <li><i class="fas fa-check-circle"></i><span>Follow-up workflow</span></li>
          <li><i class="fas fa-check-circle"></i><span>CRM or sheet updates</span></li>
          <li><i class="fas fa-check-circle"></i><span>Human review option</span></li>
        </ul>
        <a href="BOOKING_LINK_HERE" class="btn btn-ghost btn-full">
          <i class="fas fa-filter-circle-dollar"></i>
          Build My Lead Pipeline
        </a>
      </article>

      <article class="pricing-card">
        <div class="pricing-card-top">
          <div class="pricing-card-head">
            <div class="pricing-card-label">AI Support Agent</div>
            <div class="pricing-card-price">Starting at $1,000 setup + $400/month</div>
          </div>
          <p class="pricing-card-bestfor">
            Best for businesses that want to reduce repetitive support tasks, answer FAQs, check information,
            create tickets, and hand off complex requests.
          </p>
        </div>
        <div class="pricing-card-includes">Includes</div>
        <ul class="pricing-card-list">
          <li><i class="fas fa-check-circle"></i><span>Support workflow mapping</span></li>
          <li><i class="fas fa-check-circle"></i><span>FAQ and knowledge setup</span></li>
          <li><i class="fas fa-check-circle"></i><span>Help center search</span></li>
          <li><i class="fas fa-check-circle"></i><span>Ticket creation</span></li>
          <li><i class="fas fa-check-circle"></i><span>Customer updates</span></li>
          <li><i class="fas fa-check-circle"></i><span>Human handoff</span></li>
          <li><i class="fas fa-check-circle"></i><span>Post-call or post-chat summaries</span></li>
          <li><i class="fas fa-check-circle"></i><span>Testing and launch support</span></li>
        </ul>
        <a href="BOOKING_LINK_HERE" class="btn btn-ghost btn-full">
          <i class="fas fa-headset"></i>
          Automate Support
        </a>
      </article>

      <article class="pricing-card pricing-card-premium">
        <div class="pricing-premium-badge">Premium System</div>
        <div class="pricing-card-top">
          <div class="pricing-card-head">
            <div class="pricing-card-label">Full Customer Lifecycle AI System</div>
            <div class="pricing-card-price">Starting at $2,500 setup + $900/month</div>
          </div>
          <p class="pricing-card-bestfor">
            Best for businesses that want lead generation, lead follow-up, AI call answering, booking, CRM updates,
            and support automation connected into one system.
          </p>
        </div>
        <div class="pricing-card-includes">Includes</div>
        <ul class="pricing-card-list">
          <li><i class="fas fa-check-circle"></i><span>Customer journey mapping</span></li>
          <li><i class="fas fa-check-circle"></i><span>Lead gen and follow-up system</span></li>
          <li><i class="fas fa-check-circle"></i><span>AI voice receptionist</span></li>
          <li><i class="fas fa-check-circle"></i><span>Support agent workflow</span></li>
          <li><i class="fas fa-check-circle"></i><span>CRM/calendar integrations</span></li>
          <li><i class="fas fa-check-circle"></i><span>Reporting</span></li>
          <li><i class="fas fa-check-circle"></i><span>Ongoing optimization</span></li>
          <li><i class="fas fa-check-circle"></i><span>Multi-agent workflow design</span></li>
        </ul>
        <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-full">
          <i class="fas fa-diagram-project"></i>
          Map My AI System
        </a>
      </article>
    </div>
  </div>
</section>

<section class="benefits-section section" id="pricing-note">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Pricing Note</div>
      <h2 class="section-title">Why Pricing Varies</h2>
      <p class="section-subtitle">
        Every business has different tools, workflows, call volume, data quality, and integration needs. The starting
        prices above give a baseline. After the audit, Hivien recommends the simplest system that can create value without overbuilding.
      </p>
    </div>
    <div class="compare-card pricing-note-card">
      <div class="pricing-note-list">
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Number of agents and workflows</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Call volume or lead volume</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>CRM and calendar complexity</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Knowledge base or FAQ depth</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Human handoff rules</span></div>
        <div class="pricing-note-item"><i class="fas fa-circle-check"></i><span>Reporting and optimization needs</span></div>
      </div>
    </div>
  </div>
</section>

<section class="trust-section section" id="add-ons">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Add-Ons</div>
      <h2 class="section-title">Available Add-Ons</h2>
      <p class="section-subtitle">
        If the core system is working well, additional layers can be added to extend workflow depth, reporting, or channel coverage.
      </p>
    </div>
    <div class="addon-grid">
      <article class="trust-card"><h4>Extra agent workflows</h4><p>Add another structured workflow to the same system once the first one is stable.</p></article>
      <article class="trust-card"><h4>Outbound voice follow-up</h4><p>Extend follow-up into voice-based reminders, check-ins, or routing flows.</p></article>
      <article class="trust-card"><h4>SMS/email campaigns</h4><p>Connect messaging sequences around lead follow-up or support updates.</p></article>
      <article class="trust-card"><h4>Advanced CRM integration</h4><p>Support deeper field mapping, multi-stage routing, or custom workflow logic.</p></article>
      <article class="trust-card"><h4>Multi-location setup</h4><p>Coordinate routing, calendars, and workflows across more than one location.</p></article>
      <article class="trust-card"><h4>Custom reporting dashboard</h4><p>Build cleaner visibility into pipeline movement, calls, bookings, or support activity.</p></article>
      <article class="trust-card"><h4>Knowledge base setup</h4><p>Organize support answers and reference material into a cleaner system.</p></article>
      <article class="trust-card"><h4>Call transcript analysis</h4><p>Review call patterns and summaries to refine scripts, prompts, and handoffs.</p></article>
      <article class="trust-card"><h4>Workflow optimization</h4><p>Iterate on prompts, logic, routing, and failure handling after launch.</p></article>
    </div>
  </div>
</section>

<section class="roi-section section" id="how-to-choose">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">How to Choose</div>
      <h2 class="section-title">Not Sure Which System Fits?</h2>
      <p class="section-subtitle">
        Start with the bottleneck that creates the most operational drag, then expand only if the next workflow is worth connecting.
      </p>
    </div>
    <div class="decision-list">
      <article class="decision-row">
        <div class="decision-label">Choose AI Voice Receptionist if:</div>
        <p>Your biggest issue is missed calls, after-hours inquiries, or appointment booking.</p>
      </article>
      <article class="decision-row">
        <div class="decision-label">Choose AI Lead Gen + Follow-Up if:</div>
        <p>You need a cleaner prospect pipeline and faster follow-up.</p>
      </article>
      <article class="decision-row">
        <div class="decision-label">Choose AI Support Agent if:</div>
        <p>Your team spends too much time answering repetitive customer questions.</p>
      </article>
      <article class="decision-row">
        <div class="decision-label">Choose Full Customer Lifecycle AI System if:</div>
        <p>You want multiple parts of the customer journey connected into one AI-powered workflow.</p>
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
        <div class="section-tag">Before You Choose</div>
        <h2 class="demo-title">Book the Audit Before Choosing a Package</h2>
        <p class="demo-subtitle">
          The goal is not to overbuild. The goal is to identify the simplest AI system that can help your business save time,
          recover missed opportunities, or improve customer handling.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Compare the real bottleneck against the available systems</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Clarify the simplest scope that makes sense first</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> See what should stay manual and what should be automated</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free AI Revenue Audit</h3>
            <p>Review pricing, scope, and the cleanest starting point for your business.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Calls</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Leads</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Support</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Workflow scope</span></div>
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
    path: '/pricing',
    body: `${renderNavbar()}
${PAGE_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
