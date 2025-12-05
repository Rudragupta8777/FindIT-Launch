import React from 'react';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title fade-in">Why Choose FindIT?</h2>
        <div className="features-grid">
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <img src="/images/phone.svg" alt="Phone Logo" />
            </div>
            <h3>Easy to Use</h3>
            <p>Simple, intuitive interface designed for quick reporting and claiming of lost items with just a few taps.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <img src="/images/verify.svg" alt="Verify Logo" />
            </div>
            <h3>Verified College Identity</h3>
            <p>Only students with valid college emails can report or claim items ensuring trust through real identities.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <img src="/images/pic.svg" alt="Photo Logo" />
            </div>
            <h3>Photo Verification</h3>
            <p>Upload photos to help identify and verify lost items quickly.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <img src="/images/QR.svg" alt="QR Logo" />
            </div>
            <h3>Secure QR-Based Claiming</h3>
            <p>Generate and scan a QR code to claim an item securely in person. No false handoffs everything is verified.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <img src="/images/Claim.svg" alt="Claim Logo" />
            </div>
            <h3>Claim Dispute Reporting</h3>
            <p>If someone falsely claims your item, you can flag it from the claimed list. Admins review and take action fast.</p>
          </div>
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <img src="/images/Community.svg" alt="Community Logo" />
            </div>
            <h3>Community Driven</h3>
            <p>Built by students, for students. Help your college community stay connected and supportive.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;