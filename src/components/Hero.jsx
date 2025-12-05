import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Never Lose Anything Again</h1>
            <p>FindIT is the revolutionary lost and found app that connects our college community. Report lost items, claim found ones and reunite belongings with their owners effortlessly.</p>
            <a href="#download" className="cta-button">Get FindIT Now</a>
          </div>
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <img className="app-logo" src="/images/logo.png" alt="App Logo" />
                <div className="screen-buttons">
                  <div className="screen-button">Find Something I Lost</div>
                  <div className="screen-button">Report Something I Found</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;