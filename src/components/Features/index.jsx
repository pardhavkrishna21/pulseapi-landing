import React from 'react'
import './index.css'

const featuresData = [
  {
    icon: '⚡',
    title: '30-Second Global Checks',
    description:
      'Probe your API endpoints continuously from 14 locations across North America, Europe, and Asia-Pacific.'
  },
  {
    icon: '🔔',
    title: 'Zero-Noise Instant Alerts',
    description:
      'Double-verification prevents false positives before sending instant alerts via Slack, Discord, PagerDuty, or Email.'
  },
  {
    icon: '🔍',
    title: 'Deep Payload Assertions',
    description:
      'Validate HTTP status codes, JSON response keys, SSL certificate expiry, and response time thresholds.'
  },
  {
    icon: '📊',
    title: 'Branded Public Status Pages',
    description:
      'Keep customers informed during incidents with hosted status pages mapped to your custom domain.'
  }
]

const Features = () => {
  return (
    <section id="features" className="section-padding features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Core Capabilities</span>
          <h2 className="section-title">Everything You Need to Ship Reliable APIs</h2>
          <p className="section-subtitle">
            Built for backend teams who want actionable observability without bloated dashboards.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features