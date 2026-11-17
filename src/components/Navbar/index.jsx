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
  <div className="navbar-container">
    <a href="/" className="navbar-logo">
      <span className="status-dot"></span> Pulse <span>API</span>
    </a>

    {/* Desktop links */}
    <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
      <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
      <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
    </nav>

    {/* Right-side action group */}
    <div className="nav-actions">
      <button className="btn-signup" onClick={onOpenModal}>
        Sign Up Free
      </button>
      <button
        className="hamburger-btn"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </div>
  </div>
</header>
  )
}

export default Navbar