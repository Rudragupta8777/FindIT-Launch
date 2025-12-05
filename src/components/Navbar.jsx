import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      background: isScrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.9)",
      backdropFilter: isScrolled ? "blur(25px)" : "blur(20px)",
      boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "none"
    }}>
      <div className="container">
        <div className="header-content">
          <img className="logo" src="/images/logo.png" alt="App Logo" />
          
          <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#download" onClick={() => setIsMenuOpen(false)}>Download</a>
            <a href="#support" onClick={() => setIsMenuOpen(false)}>Support</a>
          </nav>

          <div 
            className={`hamburger ${isMenuOpen ? "active" : ""}`} 
            id="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;