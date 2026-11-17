import { useState, useEffect } from 'react';
import './index.css';

const ActionModal = ({ isOpen, mode, selectedPlan, onClose }) => {
  const [plan, setPlan] = useState(selectedPlan || 'Starter');
  const [email, setEmail] = useState('');
  const [endpointUrl, setEndpointUrl] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync whenever user clicks a different plan card on the page
  useEffect(() => {
    if (selectedPlan) {
      if (selectedPlan.includes('Enterprise')) setPlan('Enterprise');
      else if (selectedPlan.includes('Pro')) setPlan('Pro');
      else setPlan('Starter');
    }
    setSubmitted(false);
    setError('');
  }, [selectedPlan, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Workspace Ready!</h3>
            <p>
              Selected Plan: <strong>{plan}</strong>
            </p>
            <p>
              Confirmation details sent to <strong>{email}</strong>.
            </p>
            {endpointUrl && (
              <p className="endpoint-confirm">
                Active Monitor: <code>{endpointUrl}</code>
              </p>
            )}
            <button className="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <h3>{mode === 'demo' ? 'Request a Live Demo' : 'Create Your PulseAPI Account'}</h3>

            <label className="form-label">
              Select Plan
              <select
                className="form-input"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              >
                <option value="Starter">Starter — $0/mo (Free)</option>
                <option value="Pro">Pro — $29/mo (14-Day Free Trial)</option>
                <option value="Enterprise">Enterprise — $99/mo (Custom SLA)</option>
              </select>
            </label>

            <label className="form-label">
              Work Email *
              <input
                type="email"
                className="form-input"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="form-label">
              First Endpoint URL (Optional)
              <input
                type="url"
                className="form-input"
                placeholder="https://api.yourdomain.com/health"
                value={endpointUrl}
                onChange={(e) => setEndpointUrl(e.target.value)}
              />
            </label>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {mode === 'demo' ? 'Schedule Demo' : `Launch ${plan} Workspace`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ActionModal;