export function renderFooter() {
  return `<!-- ======== FOOTER ======== -->
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="/static/hivien-logo.png" alt="Hivien" class="footer-logo" />
        <p class="footer-tagline">Live AI agents for the full customer lifecycle: leads, calls, bookings, support, and automation.</p>
        <div class="footer-social">
          <span class="footer-social-item" aria-hidden="true"><i class="fab fa-linkedin-in"></i></span>
          <span class="footer-social-item" aria-hidden="true"><i class="fab fa-twitter"></i></span>
          <span class="footer-social-item" aria-hidden="true"><i class="fab fa-youtube"></i></span>
          <span class="footer-social-item" aria-hidden="true"><i class="fab fa-instagram"></i></span>
        </div>
      </div>
      <div class="footer-links-group">
        <h5>Offers</h5>
        <ul>
          <li><a href="/voice-receptionist">Voice Receptionist</a></li>
          <li><a href="/lead-gen-follow-up">Lead Gen + Follow-Up</a></li>
          <li><a href="/support-agent">Support Agent</a></li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h5>Systems</h5>
        <ul>
          <li><a href="/full-ai-system">Full AI System</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h5>Connect</h5>
        <ul>
          <li><a href="/contact">Contact</a></li>
          <li><a href="BOOKING_LINK_HERE">Book a Call</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h5>Contact</h5>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:hello@hivien.com">hello@hivien.com</a>
        </div>
        <a href="BOOKING_LINK_HERE" class="btn btn-primary btn-sm footer-cta">Book a Call</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>(c) 2025 Hivien. All rights reserved.</p>
      <div class="footer-legal">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookie Policy</span>
        <span>Security</span>
      </div>
    </div>
  </div>
</footer>`
}
