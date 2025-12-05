import React from 'react';

const Footer = ({ onOpenModal }) => {
  return (
    <footer id="support">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img className="footer-logo" src="/images/logo.png" alt="App Logo" />
            <p className="footer-tagline">Connecting college communities through the power of helping each other find what matters most.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#download">Download</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><button onClick={() => onOpenModal('privacy')} className="text-btn">Privacy Policy</button></li>
              <li><button onClick={() => onOpenModal('terms')} className="text-btn">Terms & Conditions</button></li>
              <li><button onClick={() => onOpenModal('developer')} className="text-btn">Developer Team</button></li>
              <li><button onClick={() => onOpenModal('contact')} className="text-btn">Contact Us</button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-credits">
            <p>
              &copy; 2025 FindIT. Made with <span></span>
              <span className="glow-heart">❤️</span>
              <span></span> by college students, for college students.
            </p>
            <div className="developer-tag">
              Developed by <span>Rudra Gupta & Pratham Khanduja</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;