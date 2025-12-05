import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title fade-in">How FindIT Works</h2>
        <div className="steps">
          <div className="step fade-in">
            <div className="step-number">1</div>
            <h3>Report</h3>
            <p>Found something? Report it with details and photos to help others find their belongings.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">2</div>
            <h3>Browse Lost Items</h3>
            <p>View a list of items that students have reported in real-time. Search by category or location to quickly find matches.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">3</div>
            <h3>Claim with QR</h3>
            <p>Found your item? Meet the reporter and scan the QR code they generate to securely confirm the handoff.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">4</div>
            <h3>Verified & Tracked</h3>
            <p>Both parties are logged. If someone falsely claims an item, you can report it from the Claimed Items list.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;