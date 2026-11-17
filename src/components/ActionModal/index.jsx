import React, { useState, useEffect } from 'react'
import './index.css'

const ActionModal = ({ isOpen, mode, selectedPlan, onClose }) => {
  const [email, setEmail] = useState('')
  const [endpointUrl, setEndpointUrl] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setEmail('')
    setEndpointUrl('')
    setError('')
    setDone(false)
  }, [isOpen, selectedPlan])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid work email address.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {done ? (
          <div className="success-box">
            <div className="success-icon">✓</div>
            <h3>Workspace Ready!</h3>
            <p>
              Your <strong>{selectedPlan}</strong> workspace activation link has been sent to{' '}
              <strong>{email}</strong>.
            </p>
            <button className="btn btn-primary full-width" onClick={onClose}>
              Back to PulseAPI
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <span className="section-badge">{selectedPlan} Plan</span>
            <h3>
              {mode === 'demo' ? 'Book Your Enterprise Demo' : 'Create Your Free Account'}
            </h3>
            <p className="modal-subtext">
              Start monitoring your first API endpoint in less than 60 seconds.
            </p>

            <div className="form-group">
              <label htmlFor="modal-email">Work Email *</label>
              <input
                id="modal-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <span className="error-text">{error}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="modal-url">First Endpoint URL (Optional)</label>
              <input
                id="modal-url"
                type="url"
                placeholder="https://api.yourdomain.com/health"
                value={endpointUrl}
                onChange={(e) => setEndpointUrl(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary full-width">
              {mode === 'demo' ? 'Schedule Demo' : 'Launch Workspace'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ActionModal