import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const PAGE_TITLE = 'AI Support Agent for Customer Service | Hivien'
const PAGE_DESCRIPTION =
  'Hivien builds AI support agents that answer FAQs, look up information, create tickets, handle routine requests, and escalate complex issues.'

const PAGE_CONTENT = `
<section class="hero" id="support-agent-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          AI Support Workflow
        </div>
        <h1 class="hero-title">AI Support Agent That Handles Repetitive Customer Questions</h1>
        <p class="hero-subtitle">
          Hivien builds AI support agents that answer FAQs, check order or request status, create support tickets,
          send updates, and hand off complex issues to a human when needed.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-headset"></i>
            Automate Support Requests
          </a>
          <a href="#preview" class="btn btn-ghost btn-lg">
            <i class="fas fa-circle-play"></i>
            See Support Workflow
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card lifecycle-dashboard">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>Support Workflow View</span>
            </div>
            <div class="dashboard-time">Always Available</div>
          </div>
          <div class="lifecycle-track lifecycle-track-compact">
            <div class="lifecycle-node">Customer Question</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">AI Understands Issue</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Searches Knowledge Base</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Answers or Creates Ticket</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Escalates if Needed</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Sends Update</div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">Support Leak</span>
              <div class="signal-item"><span class="signal-copy">Repeated FAQ: team time lost</span></div>
              <div class="signal-item"><span class="signal-copy">Unanswered support request: frustrated customer</span></div>
              <div class="signal-item"><span class="signal-copy">Manual ticket creation: slower resolution</span></div>
              <div class="signal-item"><span class="signal-copy">No clear handoff: messy follow-up</span></div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">System Response</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Question answered</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Ticket created</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Customer updated</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Human notified</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Issue routed</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-ticket"></i>
          <span>Ticket Ready</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-envelope-open-text"></i>
          <span>Update Sent</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="pain">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Support Pain</div>
      <h2 class="section-title">Your Team Should Not Spend the Day Repeating the Same Answers</h2>
      <p class="section-subtitle">
        Support teams lose time answering the same questions over and over. Hivien's AI support agent handles routine
        requests, collects useful details, creates tickets when needed, and escalates when a human should step in.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-repeat"></i></div>
        <h3>Repetitive questions slowing the team down</h3>
        <p>Frequently repeated customer questions can be answered consistently without burning team time.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-code-branch"></i></div>
        <h3>Support requests scattered across channels</h3>
        <p>Structured intake and routing make email, chat, call, and form requests easier to manage.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-ticket-simple"></i></div>
        <h3>Manual ticket creation and follow-up wasting time</h3>
        <p>The agent can collect context, create the ticket, and notify the right person for the next step.</p>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="capabilities">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Capabilities</div>
      <h2 class="section-title">What the AI Support Agent Can Handle</h2>
      <p class="section-subtitle">
        The workflow is designed to handle routine customer support automation while keeping clean human handoff paths.
      </p>
    </div>
    <div class="capability-grid">
      <article class="trust-card capability-card"><h4>FAQ answering</h4><p>Respond to common questions using your documented policies and answers.</p></article>
      <article class="trust-card capability-card"><h4>Order lookup</h4><p>Check status details when that data is available in your systems.</p></article>
      <article class="trust-card capability-card"><h4>Product or service info</h4><p>Share helpful information without requiring a manual reply every time.</p></article>
      <article class="trust-card capability-card"><h4>Return eligibility</h4><p>Guide customers through structured policy checks and next steps.</p></article>
      <article class="trust-card capability-card"><h4>Return requests</h4><p>Collect the details needed before routing the request onward.</p></article>
      <article class="trust-card capability-card"><h4>Support ticket creation</h4><p>Create tickets with the relevant context already attached.</p></article>
      <article class="trust-card capability-card"><h4>Help center search</h4><p>Search knowledge base content to surface useful answers faster.</p></article>
      <article class="trust-card capability-card"><h4>Follow-up messages</h4><p>Keep customers updated when a request is waiting on the next action.</p></article>
      <article class="trust-card capability-card"><h4>Human handoff</h4><p>Escalate sensitive or complex issues to the right team member.</p></article>
      <article class="trust-card capability-card"><h4>Post-call or post-chat updates</h4><p>Log the interaction and summarize what happened for the team.</p></article>
    </div>
  </div>
</section>

<section class="product-section section" id="workflow">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Workflow</div>
      <h2 class="section-title">From Customer Question to Resolved or Escalated</h2>
      <p class="section-subtitle">
        The support agent can be configured around your policies, knowledge base, customer data, escalation rules,
        and support tools.
      </p>
    </div>
    <div class="workflow-flow">
      <div class="workflow-step">Customer Request</div>
      <div class="workflow-step">AI Understands Issue</div>
      <div class="workflow-step">Checks Info</div>
      <div class="workflow-step">Answers or Creates Ticket</div>
      <div class="workflow-step">Escalates if Needed</div>
      <div class="workflow-step">Sends Update</div>
    </div>
  </div>
</section>

<section class="use-cases section" id="best-for">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Use Cases</div>
      <h2 class="section-title">Built for Teams With Repetitive Support Work</h2>
      <p class="section-subtitle">
        This is a strong fit when your team handles the same support questions repeatedly and needs cleaner routing.
      </p>
    </div>
    <div class="trust-grid">
      <article class="trust-card"><h4>E-commerce</h4><p>Answer product questions, check order information, start return requests, and create support tickets.</p></article>
      <article class="trust-card"><h4>Service companies</h4><p>Handle FAQs, appointment questions, customer updates, and issue routing.</p></article>
      <article class="trust-card"><h4>SaaS teams</h4><p>Answer common product questions, search documentation, create tickets, and escalate technical issues.</p></article>
      <article class="trust-card"><h4>Clinics</h4><p>Handle routine customer questions, request updates, and structured follow-up.</p></article>
      <article class="trust-card"><h4>Agencies</h4><p>Reduce repetitive inbox work and route issues to the right account or ops contact.</p></article>
      <article class="trust-card"><h4>Local businesses</h4><p>Keep response times clean without requiring manual replies to every simple question.</p></article>
      <article class="trust-card"><h4>Businesses using help desks</h4><p>Add an AI customer support automation layer without removing human review where it matters.</p></article>
    </div>
  </div>
</section>

<section class="roi-section section" id="preview">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Live System Preview</div>
      <h2 class="section-title">See the Support Agent Workflow</h2>
      <p class="section-subtitle">
        Add workflow screenshots, support ticket examples, help center search previews, and handoff examples here so prospects can see how the system works before booking a call.
      </p>
    </div>
    <div class="live-systems-grid">
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-book-open"></i></div>
        <h4>Help center search screenshot</h4>
        <div class="media-placeholder">Knowledge Search Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-magnifying-glass"></i></div>
        <h4>Order or request lookup</h4>
        <div class="media-placeholder">Lookup Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-ticket"></i></div>
        <h4>Support ticket creation</h4>
        <div class="media-placeholder">Ticket Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-file-lines"></i></div>
        <h4>Post-interaction update</h4>
        <div class="media-placeholder">Update Placeholder</div>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="integrations">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Integrations</div>
      <h2 class="section-title">Connects With Your Support Stack</h2>
      <p class="section-subtitle">
        Hivien can connect your support agent to help desks, CRMs, knowledge bases, spreadsheets, notifications, and automation platforms.
      </p>
    </div>
    <div class="integrations-bar">
      <p>Works with:</p>
      <div class="int-logos">
        <span>Zendesk</span>
        <span>Intercom</span>
        <span>Freshdesk</span>
        <span>HubSpot</span>
        <span>GoHighLevel</span>
        <span>Google Sheets</span>
        <span>Airtable</span>
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

<section class="benefits-section section" id="handoff">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Human Handoff</div>
      <h2 class="section-title">Automation Where It Makes Sense. Human Help When It Matters.</h2>
      <p class="section-subtitle">
        The AI support agent can handle routine questions and structured tasks, while routing sensitive, complex,
        or high-value issues to a human based on your rules.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-receipt"></i></div>
        <h3>Refund or policy exception</h3>
        <p>Route the case to human review when a policy edge case or approval is needed.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-screwdriver-wrench"></i></div>
        <h3>Complex technical issue</h3>
        <p>Create a ticket with full context so the support team can step in without repeating intake.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-face-frown"></i></div>
        <h3>Upset customer</h3>
        <p>Notify the support team quickly when tone or issue severity calls for direct human follow-up.</p>
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
        <div class="section-tag">AI Workflow Audit</div>
        <h2 class="demo-title">Ready to Reduce Repetitive Support Work?</h2>
        <p class="demo-subtitle">
          Book a free AI workflow audit and we'll map which support tasks can be automated safely inside your business.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Identify the repetitive support work first</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Define where human handoff should stay in place</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Turn support questions into a cleaner workflow</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free AI Workflow Audit</h3>
            <p>Find the safest place to start with AI customer support automation.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>FAQs</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Tickets</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Escalations</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Updates</span></div>
          </div>
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg btn-full">
            <i class="fas fa-calendar-check"></i>
            Book Free AI Workflow Audit
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
    path: '/support-agent',
    body: `${renderNavbar()}
${PAGE_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
