import React, { useState } from 'react';

const Download = () => {
  const [downloadState, setDownloadState] = useState('idle'); // idle, preparing, success

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloadState('preparing');

    // Step 1: Preparing delay
    setTimeout(() => {
      // Step 2: Trigger download
      const a = document.createElement("a");
      a.href = "/downloads/FindIT.apk"; // Matches public folder path
      a.download = "FindIT.apk";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setDownloadState('success');

      // Step 3: Reset
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="download" id="download">
      <div className="container">
        <div className="download-content fade-in">
          <h2>Ready to Find Your Lost Items?</h2>
          <p className="platform-text">
            Currently available on Android —
            <span className="blink-yellow"> iOS version dropping soon. Stay tuned!</span>
          </p>
          
          <button 
            className={`download-btn ${downloadState === 'success' ? 'green' : ''}`} 
            id="downloadApp"
            onClick={handleDownload}
            style={{ transform: downloadState === 'preparing' ? 'scale(0.98)' : downloadState === 'success' ? 'scale(1.02)' : 'scale(1)' }}
          >
            <img 
              src={
                downloadState === 'preparing' ? "/images/preparing.svg" : 
                downloadState === 'success' ? "/images/success.svg" : 
                "/images/androidicon.svg"
              } 
              alt="Android" 
              className="download-icon" 
            />
            <span>
              {downloadState === 'preparing' ? "Preparing Download..." : 
               downloadState === 'success' ? "Download Started!" : 
               "Download for Android"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;