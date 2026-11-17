import React, { useState } from 'react'
import './index.css'

const Pricing = ({ onOpenModal }) => {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      price: annual ? '$0' : '$0',
      period: '/month',
      description: 'Ideal for side projects and solo developers.',
      features: [
        'Up to 5 API monitors',
        '3-minute check interval',
        'Email incident alerts',
        '7-day log retention'
      ],
      popular: false,
      cta: 'Get Started Free'
    },
    {
      name: 'Pro',
      price: annual ? '$24' : '$29',
      period: '/month',
      description: 'Built for growing engineering teams in production.',
      features: [
        'Up to 50 API monitors',
        '30-second check interval',
        'Slack, Discord & Webhook alerts',
        'Custom public status page',
        '90-day log retention'
      ],
      popular: true,
      cta: 'Start Pro Trial'
    },
    {
      name: 'Enterprise',
      price: annual ? '$79' : '$99',
      period: '/month',
      description: 'Dedicated infrastructure for high-volume platforms.',
      features: [
        'Unlimited API monitors',
        '10-second check interval',
        'PagerDuty & Opsgenie integration',
        'Multi-region private probes',
        '1-year log retention & SLA'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="section-padding pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Simple Pricing</span>
          <h2 className="section-title">Predictable Plans That Scale With Your Traffic</h2>
          <p className="section-subtitle">
            Start free and upgrade only when your production workload demands faster intervals.
          </p>

          <div className="billing-toggle">
            <span className={!annual ? 'active' : ''}>Monthly</span>
            <button
              className={`toggle-switch ${annual ? 'on' : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
            >
              <span className="toggle-knob"></span>
            </button>
            <span className={annual ? 'active' : ''}>
              Annual <em>(Save 20%)</em>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="popular-tag">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>
              <div className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>✓ {feat}</li>
                ))}
              </ul>
              <button
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} full-width`}
                onClick={() =>
                  onOpenModal(plan.name === 'Enterprise' ? 'demo' : 'signup', plan.name)
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing