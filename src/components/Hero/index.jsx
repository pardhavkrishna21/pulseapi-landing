import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Hero = ({ onOpenModal }) => {
  const navigate = useNavigate()
  const [pingStatus, setPingStatus] = useState('42ms')

  const simulatePing = () => {
    setPingStatus('Pinging...')
    setTimeout(() => {
      const randomLatency = Math.floor(Math.random() * (58 - 28 + 1)) + 28
      setPingStatus(`${randomLatency}ms`)
    }, 450)
  }

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="section-badge">99.99% Uptime Monitoring</span>
          <h1 className="hero-title">
            Know Your APIs Are Down <span>Before Your Users Do.</span>
          </h1>
          <p className="hero-description">
            PulseAPI monitors your REST & GraphQL endpoints every 30 seconds from 14 global
            regions and alerts your engineering team on Slack or email in under 3 seconds.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => onOpenModal('signup', 'Pro')}
            >
              Start Free 14-Day Trial
            </button>
            <button
              className="btn btn-outline"
              onClick={() => navigate('/contact')}
            >
              Request Live Demo
            </button>
          </div>
          <p className="hero-note">No credit card required · Setup in under 60 seconds</p>
        </div>

        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="dashboard-label">Live Endpoint Monitor</span>
              <button className="ping-test-btn" onClick={simulatePing}>
                Test Ping
              </button>
            </div>

            <div className="endpoint-list">
              <div className="endpoint-row">
                <div>
                  <span className="method get">GET</span>
                  <code>/api/v1/payments/checkout</code>
                </div>
                <div className="status-group">
                  <span className="latency">{pingStatus}</span>
                  <span className="badge-ok">200 OK</span>
                </div>
              </div>

              <div className="endpoint-row">
                <div>
                  <span className="method post">POST</span>
                  <code>/api/v1/auth/token</code>
                </div>
                <div className="status-group">
                  <span className="latency">36ms</span>
                  <span className="badge-ok">200 OK</span>
                </div>
              </div>

              <div className="endpoint-row">
                <div>
                  <span className="method get">GET</span>
                  <code>/api/v1/users/profile</code>
                </div>
                <div className="status-group">
                  <span className="latency">51ms</span>
                  <span className="badge-ok">200 OK</span>
                </div>
              </div>
            </div>

            <div className="uptime-bars">
              <div className="uptime-header">
                <span>Last 30 Days Uptime</span>
                <span className="uptime-percent">99.98% Operational</span>
              </div>
              <div className="bar-strip">
                {Array.from({ length: 24 }).map((_, idx) => (
                  <span key={idx} className="uptime-tick"></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero