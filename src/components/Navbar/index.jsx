import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css'

const Navbar = ({ onOpenModal }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Features', path: '/features' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' }
  ]

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <span className="logo-dot"></span>
          Pulse<span>API</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'current' : ''}`}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-cta">
            <button
              className="btn btn-primary"
              onClick={() => {
                setMenuOpen(false)
                onOpenModal('signup', 'Starter')
              }}
            >
              Sign Up Free
            </button>
          </div>
        </nav>

        <div className="navbar-actions">
          <button
            className="btn btn-primary desktop-cta"
            onClick={() => onOpenModal('signup', 'Starter')}
          >
            Sign Up Free
          </button>

          <button
            className="hamburger-btn"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar