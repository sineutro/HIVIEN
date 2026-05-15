export function renderNavbar() {
  return `<!-- ======== NAVIGATION ======== -->
<nav id="navbar" class="navbar">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <img src="/static/hivien-logo.png" alt="Hivien Logo" class="nav-logo-img" />
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="/">Home</a></li>
      <li><a href="/voice-receptionist">Voice Receptionist</a></li>
      <li><a href="/lead-gen-follow-up">Lead Gen + Follow-Up</a></li>
      <li><a href="/support-agent">Support Agent</a></li>
      <li><a href="/full-ai-system">Full AI System</a></li>
      <li><a href="/pricing">Pricing</a></li>
    </ul>
    <div class="nav-cta">
      <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-sm">Book a Call</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`
}
