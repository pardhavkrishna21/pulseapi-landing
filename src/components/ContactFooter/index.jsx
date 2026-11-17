import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.company.trim()) newErrors.company = 'Company or project name is required.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', message: '' })
    setSubmitted(false)
  }

  return (
    <footer id="contact" className="contact-footer">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-badge">Get in Touch</span>
            <h2>Ready to Eliminate API Blind Spots?</h2>
            <p>
              Schedule a personalized walkthrough with our solutions engineers or drop us a
              question about custom SLA requirements.
            </p>
            <div className="contact-details">
              <div>
                <strong>Email:</strong> support@pulseapi.dev
              </div>
              <div>
                <strong>Status Page:</strong> status.pulseapi.dev (100% Up)
              </div>
              <div>
                <strong>Headquarters:</strong> Hyderabad, Telangana, India
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <h3>Demo Request Received!</h3>
                <p>
                  Thanks, <strong>{formData.name}</strong>. We have sent a calendar invite
                  link to <strong>{formData.email}</strong>.
                </p>
                <button className="btn btn-outline" onClick={handleReset}>
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3>Request a Product Demo</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Team Name *</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Tech"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  {errors.company && <span className="error-text">{errors.company}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Notes (Optional)</label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Tell us how many endpoints you monitor..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary full-width">
                  Request Demo
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PulseAPI Inc. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactFooter