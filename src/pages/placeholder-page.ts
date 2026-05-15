import { renderFooter } from '../components/footer'
import { renderLayout } from '../layout'
import { renderNavbar } from '../components/nav'

type PlaceholderPageOptions = {
  title: string
  description: string
  heading: string
  summary: string
  eyebrow: string
}

const BOOKING_LINK = 'BOOKING_LINK_HERE'

export function renderPlaceholderPage({ title, description, heading, summary, eyebrow }: PlaceholderPageOptions) {
  const body = `
<section class="hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          ${eyebrow}
        </div>
        <h1 class="hero-title">${heading}</h1>
        <p class="hero-subtitle">${summary}</p>
        <div class="hero-actions">
          <a href="${BOOKING_LINK}" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-check"></i>
            Book a Strategy Call
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="dashboard-card">
          <div class="dashboard-header">
            <div class="dashboard-title">
              <div class="status-dot active"></div>
              <span>HIVIEN Planning Preview</span>
            </div>
            <div class="dashboard-time">Coming Soon</div>
          </div>
          <div class="transcript-box">
            <div class="transcript-line agent">
              <span class="t-label">Status</span>
              <span class="t-text">This page is scaffolded and ready for service-specific copy, proof, workflow examples, and conversion sections.</span>
            </div>
            <div class="transcript-line customer">
              <span class="t-label">Next Step</span>
              <span class="t-text">We can now build out the final page content on the shared Hivien layout without redoing structure.</span>
            </div>
          </div>
          <div class="dashboard-metrics">
            <div class="metric">
              <i class="fas fa-layer-group"></i>
              <span>Shared layout</span>
            </div>
            <div class="metric">
              <i class="fas fa-route"></i>
              <span>Live route</span>
            </div>
            <div class="metric">
              <i class="fas fa-bolt"></i>
              <span>Ready to expand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="trusted-section">
  <div class="container">
    <p class="trusted-label">Placeholder Page</p>
  </div>
</section>
`

  return renderLayout({
    title,
    description,
    body: `${renderNavbar()}
${body}
${renderFooter()}`,
    scripts: ['/static/app.js']
  })
}
