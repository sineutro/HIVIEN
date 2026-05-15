import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

import { renderPage as renderContactPage } from './pages/contact'
import { renderPage as renderFullAiSystemPage } from './pages/full-ai-system'
import { renderHomePage } from './pages/home'
import { renderPage as renderLeadGenFollowUpPage } from './pages/lead-gen-follow-up'
import { renderPage as renderPricingPage } from './pages/pricing'
import { renderPage as renderSupportAgentPage } from './pages/support-agent'
import { renderPage as renderVoiceReceptionistPage } from './pages/voice-receptionist'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(renderHomePage())
})

app.get('/voice-receptionist', (c) => {
  return c.html(renderVoiceReceptionistPage())
})

app.get('/lead-gen-follow-up', (c) => {
  return c.html(renderLeadGenFollowUpPage())
})

app.get('/support-agent', (c) => {
  return c.html(renderSupportAgentPage())
})

app.get('/full-ai-system', (c) => {
  return c.html(renderFullAiSystemPage())
})

app.get('/pricing', (c) => {
  return c.html(renderPricingPage())
})

app.get('/contact', (c) => {
  return c.html(renderContactPage())
})

export default app
