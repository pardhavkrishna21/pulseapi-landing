import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = ({ onOpenModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleNavClick}>
          <span className="logo-dot"></span>
          Pulse <span>API</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link" onClick={handleNavClick}>
            Features
          </a>
          <a href="#how-it-works" className="nav-link" onClick={handleNavClick}>
            How It Works
          </a>
          <Link to="/pricing" className="nav-link" onClick={handleNavClick}>
            Pricing
          </Link>
          <Link to="/about" className="nav-link" onClick={handleNavClick}>
            About
          </Link>

          {/* Shows inside the mobile dropdown menu */}
          {isMobile && (
            <div className="mobile-cta" style={{ display: 'block', width: '100%' }}>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => {
                  setMenuOpen(false);
                  onOpenModal();
                }}
              >
                Sign Up Free
              </button>
            </div>
          )}
        </nav>

        {/* Desktop CTA: Completely removed from DOM on mobile so it CANNOT collide */}
        {!isMobile && (
          <button className="btn btn-primary desktop-cta" onClick={onOpenModal}>
            Sign Up Free
          </button>
        )}

        {/* Hamburger Menu: Rendered ONLY on mobile */}
        {isMobile && (
          <button
            className="hamburger-btn"
            style={{ display: 'flex' }}
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;