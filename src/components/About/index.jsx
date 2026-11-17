import React from 'react'
import './index.css'

const steps = [
  {
    step: '01',
    title: 'Paste Your Endpoint URL',
    description:
      'Add any REST or GraphQL URL along with custom headers, auth tokens, or expected JSON assertions.'
  },
  {
    step: '02',
    title: 'Configure Alert Channels',
    description:
      'Connect your Slack workspace or team email and set latency thresholds that match your SLA.'
  },
  {
    step: '03',
    title: 'Diagnose & Resolve Faster',
    description:
      'Receive full stack traces, response headers, and regional latency breakdowns the moment an anomaly hits.'
  }
]

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About & How It Works</span>
          <h2 className="section-title">From Zero to Full API Coverage in 3 Steps</h2>
          <p className="section-subtitle">
            PulseAPI eliminates complex agent installations. Our cloud workers verify your
            services externally—just like real users experience them.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((item) => (
            <div key={item.step} className="step-card">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About