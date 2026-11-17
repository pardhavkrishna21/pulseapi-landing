import { useState } from 'react';
import './index.css';

const Pricing = ({ onOpenModal }) => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const plans = [
    {
      name: 'Starter',
      badge: 'Free Forever',
      monthlyPrice: '$0',
      annualPrice: '$0',
      description: 'Ideal for hobby projects, MVPs, and solo developers.',
      features: [
        'Up to 5 API endpoints',
        '3-minute check intervals',
        'Email outage alerts',
        '7-day latency history',
      ],
      ctaText: 'Start with Starter',
      mode: 'signup',
      popular: false,
    },
    {
      name: 'Pro',
      badge: 'Most Popular',
      monthlyPrice: '$29',
      annualPrice: '$23',
      description: 'For growing engineering teams running production APIs.',
      features: [
        'Up to 50 API endpoints',
        '30-second check intervals',
        'Slack, Webhook & SMS alerts',
        '14 global monitoring regions',
        '90-day uptime & SLA reports',
      ],
      ctaText: 'Start 14-Day Pro Trial',
      mode: 'signup',
      popular: true,
    },
    {
      name: 'Enterprise',
      badge: 'Custom Scale',
      monthlyPrice: '$99',
      annualPrice: '$79',
      description: 'Dedicated infrastructure and custom SLAs for large orgs.',
      features: [
        'Unlimited API endpoints',
        '10-second check intervals',
        'PagerDuty & Opsgenie integration',
        'Custom private check locations',
        '24/7 dedicated solutions engineer',
      ],
      ctaText: 'Contact Sales / Demo',
      mode: 'demo',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Simple Pricing</span>
          <h2 className="section-title">Plans That Scale With Your Traffic</h2>
          <p className="section-subtitle">
            Start free and upgrade anytime as your API footprint grows.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="billing-toggle">
            <button
              type="button"
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="save-tag">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              <div className="plan-header">
                <span className="plan-badge">{plan.badge}</span>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  <span>/month</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feat) => (
                  <li key={feat}>✓ {feat}</li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} plan-btn`}
                onClick={() => onOpenModal(plan.mode, `${plan.name} (${billingCycle})`)}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;