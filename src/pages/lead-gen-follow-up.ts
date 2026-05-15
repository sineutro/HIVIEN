import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

const PAGE_TITLE = 'AI Lead Gen and Follow-Up Automation | Hivien'
const PAGE_DESCRIPTION =
  'Hivien builds AI lead generation and follow-up systems that source, clean, enrich, score, organize, and follow up with prospects.'

const PAGE_CONTENT = `
<section class="hero" id="lead-gen-hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Lead Generation Workflow
        </div>
        <h1 class="hero-title">AI Lead Gen + Follow-Up System That Keeps Your Pipeline Moving</h1>
        <p class="hero-subtitle">
          Hivien builds AI workflows that find prospects, clean and enrich lead data, score opportunities,
          prepare outreach, and follow up with leads before they go cold.
        </p>
        <div class="hero-actions">
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg">
            <i class="fas fa-filter-circle-dollar"></i>
            Build My Lead Pipeline
          </a>
          <a href="#preview" class="btn btn-ghost btn-lg">
            <i class="fas fa-diagram-project"></i>
            See Workflow
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card lifecycle-dashboard">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>Pipeline Workflow</span>
            </div>
            <div class="dashboard-time">Always Moving</div>
          </div>
          <div class="lifecycle-track lifecycle-track-compact">
            <div class="lifecycle-node">Find Prospects</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Clean Data</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Enrich Records</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Score Fit</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Generate Outreach</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Follow Up</div>
            <div class="lifecycle-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="lifecycle-node">Update CRM</div>
          </div>
          <div class="dashboard-split">
            <div class="signal-panel signal-panel-loss">
              <span class="signal-panel-title">Pipeline Leak</span>
              <div class="signal-item">
                <span class="signal-copy">Unorganized lead list: lost focus</span>
              </div>
              <div class="signal-item">
                <span class="signal-copy">Slow follow-up: colder leads</span>
              </div>
              <div class="signal-item">
                <span class="signal-copy">No scoring: wasted outreach</span>
              </div>
              <div class="signal-item">
                <span class="signal-copy">Manual CRM updates: missed next steps</span>
              </div>
            </div>
            <div class="signal-panel signal-panel-fixed">
              <span class="signal-panel-title">Fixed Actions</span>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Leads organized</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Data enriched</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Best-fit prospects scored</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>Follow-up prepared</span></div>
              <div class="signal-check"><i class="fas fa-check-circle"></i><span>CRM updated</span></div>
            </div>
          </div>
        </div>
        <div class="hero-floating-card card-crm">
          <i class="fas fa-database"></i>
          <span>Data Enriched</span>
        </div>
        <div class="hero-floating-card card-notify">
          <i class="fas fa-paper-plane"></i>
          <span>Follow-Up Ready</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="benefits-section section" id="pain">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Pipeline Problem</div>
      <h2 class="section-title">A Lead List Is Not a Lead System</h2>
      <p class="section-subtitle">
        Most businesses do not need another messy spreadsheet. They need a repeatable system that finds prospects,
        cleans the data, enriches key details, scores fit, prepares outreach, and follows up consistently.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-table-cells-large"></i></div>
        <h3>Messy lead lists that are hard to act on</h3>
        <p>Without structure and cleanup, your team wastes time figuring out what is usable and what is not.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-hourglass-half"></i></div>
        <h3>Slow follow-up that lets opportunities go cold</h3>
        <p>When follow-up is delayed, high-intent prospects lose momentum before anyone engages them.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-arrows-rotate"></i></div>
        <h3>Manual outreach prep and CRM updates wasting time</h3>
        <p>Repetitive prep work and system updates create drag before the real selling even starts.</p>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="capabilities">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Capabilities</div>
      <h2 class="section-title">What the Lead Gen + Follow-Up System Can Handle</h2>
      <p class="section-subtitle">
        The workflow is built to take raw prospect inputs and turn them into a cleaner, outreach-ready pipeline.
      </p>
    </div>
    <div class="capability-grid">
      <article class="trust-card capability-card"><h4>Lead sourcing</h4><p>Collect prospects based on your market, offer, and targeting rules.</p></article>
      <article class="trust-card capability-card"><h4>Data cleaning</h4><p>Remove obvious clutter and standardize inconsistent records.</p></article>
      <article class="trust-card capability-card"><h4>Data normalization</h4><p>Format fields consistently so the pipeline is easier to review and route.</p></article>
      <article class="trust-card capability-card"><h4>Lead enrichment</h4><p>Fill in missing business details that help qualify and personalize outreach.</p></article>
      <article class="trust-card capability-card"><h4>Lead scoring</h4><p>Rank prospects based on the fit signals that matter to your team.</p></article>
      <article class="trust-card capability-card"><h4>Outreach generation</h4><p>Prepare message drafts and contact context for your next touchpoint.</p></article>
      <article class="trust-card capability-card"><h4>Lead follow-up</h4><p>Move prospects through a follow-up automation instead of leaving them untouched.</p></article>
      <article class="trust-card capability-card"><h4>Human review</h4><p>Keep a person in the loop before sending messages or routing leads forward.</p></article>
      <article class="trust-card capability-card"><h4>Dispatch preparation</h4><p>Organize the lead so a sales rep or operator can act on it quickly.</p></article>
      <article class="trust-card capability-card"><h4>CRM or sheet updates</h4><p>Write status changes and cleaned data back into the systems you use.</p></article>
      <article class="trust-card capability-card"><h4>Feedback loop</h4><p>Capture review outcomes so the workflow can improve over time.</p></article>
      <article class="trust-card capability-card"><h4>Follow-up sequences</h4><p>Support structured next-step logic instead of one-off manual reminders.</p></article>
    </div>
  </div>
</section>

<section class="product-section section" id="workflow">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Pipeline Flow</div>
      <h2 class="section-title">From Prospect List to Follow-Up Ready Pipeline</h2>
      <p class="section-subtitle">
        The workflow can be configured around your target market, qualification rules, outreach style, review process,
        and CRM or spreadsheet setup.
      </p>
    </div>
    <div class="workflow-flow workflow-flow-9">
      <div class="workflow-step">Source Leads</div>
      <div class="workflow-step">Clean Data</div>
      <div class="workflow-step">Enrich Records</div>
      <div class="workflow-step">Score Fit</div>
      <div class="workflow-step">Generate Outreach</div>
      <div class="workflow-step">Follow Up</div>
      <div class="workflow-step">Human Review</div>
      <div class="workflow-step">Update CRM</div>
      <div class="workflow-step">Feedback Loop</div>
    </div>
  </div>
</section>

<section class="use-cases section" id="example-workflow">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Example Workflow</div>
      <h2 class="section-title">Example Workflow: Roofing Businesses in Chicago</h2>
      <p class="section-subtitle">
        A lead generation workflow can be configured to find roofing businesses in a specific market, clean and structure
        the data, enrich missing details, score the best-fit prospects, and prepare follow-up outreach.
      </p>
    </div>
    <div class="capability-grid">
      <article class="trust-card capability-card"><h4>Roofing company name and website</h4><p>Structured business identity fields for quick review.</p></article>
      <article class="trust-card capability-card"><h4>Location and service area</h4><p>Geographic coverage details used for targeting and routing.</p></article>
      <article class="trust-card capability-card"><h4>Contact details when available</h4><p>Relevant contact information attached to the lead record.</p></article>
      <article class="trust-card capability-card"><h4>Lead quality score</h4><p>A fit signal that helps prioritize which prospects deserve attention first.</p></article>
      <article class="trust-card capability-card"><h4>Suggested outreach angle</h4><p>Context for how the first touchpoint could be framed.</p></article>
      <article class="trust-card capability-card"><h4>Follow-up status</h4><p>A simple view of where the prospect sits in the next-step workflow.</p></article>
    </div>
  </div>
</section>

<section class="trust-section section" id="best-for">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Use Cases</div>
      <h2 class="section-title">Built for Businesses That Need a Cleaner Pipeline</h2>
      <p class="section-subtitle">
        The best fit is a business that wants a more organized prospecting process and faster follow-up without more manual operations.
      </p>
    </div>
    <div class="trust-grid">
      <article class="trust-card"><h4>Local service businesses</h4><p>Build a market-specific prospect list and prepare follow-up for high-fit opportunities.</p></article>
      <article class="trust-card"><h4>Agencies</h4><p>Create cleaner prospect pipelines for niche outreach campaigns.</p></article>
      <article class="trust-card"><h4>B2B service providers</h4><p>Find, qualify, and organize companies that match your ideal customer profile.</p></article>
      <article class="trust-card"><h4>Home improvement companies</h4><p>Structure market research and follow-up for regional growth efforts.</p></article>
      <article class="trust-card"><h4>Sales teams</h4><p>Reduce admin work before outreach and focus attention on the best-fit prospects.</p></article>
      <article class="trust-card"><h4>Appointment-based businesses</h4><p>Organize potential demand before it reaches your booking workflow.</p></article>
    </div>
  </div>
</section>

<section class="roi-section section" id="preview">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Workflow Preview</div>
      <h2 class="section-title">See the Lead Gen + Follow-Up Workflow</h2>
      <p class="section-subtitle">
        Add workflow screenshots, lead sheet examples, and follow-up sequence previews here so prospects can see how the system works before booking a call.
      </p>
    </div>
    <div class="live-systems-grid">
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-magnifying-glass-chart"></i></div>
        <h4>Lead sourcing workflow screenshot</h4>
        <div class="media-placeholder">Workflow Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-broom"></i></div>
        <h4>Data cleaning workflow screenshot</h4>
        <div class="media-placeholder">Cleaning Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-ranking-star"></i></div>
        <h4>Lead scoring view</h4>
        <div class="media-placeholder">Scoring Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-table-list"></i></div>
        <h4>Final lead sheet</h4>
        <div class="media-placeholder">Lead Sheet Placeholder</div>
      </article>
      <article class="trust-card live-system-card">
        <div class="trust-icon"><i class="fas fa-envelope-open-text"></i></div>
        <h4>Follow-up sequence preview</h4>
        <div class="media-placeholder">Sequence Placeholder</div>
      </article>
    </div>
  </div>
</section>

<section class="trust-section section" id="integrations">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Integrations</div>
      <h2 class="section-title">Connects With Your Sales Stack</h2>
      <p class="section-subtitle">
        Hivien can connect your lead pipeline to CRMs, spreadsheets, inboxes, messaging tools, and automation platforms.
      </p>
    </div>
    <div class="integrations-bar">
      <p>Works with:</p>
      <div class="int-logos">
        <span>Google Sheets</span>
        <span>Airtable</span>
        <span>HubSpot</span>
        <span>GoHighLevel</span>
        <span>Pipedrive</span>
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

<section class="benefits-section section" id="human-review">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Human Review</div>
      <h2 class="section-title">Automation With Human Control</h2>
      <p class="section-subtitle">
        The workflow can prepare leads and outreach automatically, while keeping a human review step before messages are sent or prospects are moved into a live campaign.
      </p>
    </div>
    <div class="benefits-grid">
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-list-check"></i></div>
        <h3>Review scored leads before outreach</h3>
        <p>Keep qualification oversight in place before a prospect enters the next step.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-envelope-circle-check"></i></div>
        <h3>Approve generated messages before sending</h3>
        <p>Make sure the outreach tone and angle align with your team before anything goes out.</p>
      </article>
      <article class="benefit-card">
        <div class="benefit-icon"><i class="fas fa-user-tie"></i></div>
        <h3>Route high-fit prospects to a sales rep</h3>
        <p>Push the strongest opportunities toward a human when it is time for direct follow-up.</p>
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
        <div class="section-tag">Lead Pipeline Audit</div>
        <h2 class="demo-title">Want a Cleaner Pipeline and Faster Follow-Up?</h2>
        <p class="demo-subtitle">
          Book a free AI lead pipeline audit and we'll map how your business can source, organize, and follow up with better prospects.
        </p>
        <div class="demo-benefits-list">
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Review where pipeline quality breaks down</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> Identify what should be automated versus reviewed by a human</div>
          <div class="demo-benefit"><i class="fas fa-check-circle"></i> See how an outreach-ready pipeline could fit your workflow</div>
        </div>
      </div>
      <div class="demo-form-wrap">
        <div class="demo-form-card final-cta-card">
          <div class="form-header">
            <h3>Book Free Lead Pipeline Audit</h3>
            <p>Start with the lead workflow that creates the most drag.</p>
          </div>
          <div class="final-cta-points">
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Sourcing</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Scoring</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>Follow-Up</span></div>
            <div class="signal-check"><i class="fas fa-check-circle"></i><span>CRM updates</span></div>
          </div>
          <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-lg btn-full">
            <i class="fas fa-calendar-check"></i>
            Book Free Lead Pipeline Audit
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
    path: '/lead-gen-follow-up',
    body: `${renderNavbar()}
${PAGE_CONTENT}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
