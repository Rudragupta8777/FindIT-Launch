import React from 'react';

const Modals = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const handleBackdropClick = (e) => {
    const backdropClasses = ['terms-modal', 'developer-modal'];
    if (backdropClasses.includes(e.target.className)) {
        onClose();
    }
  };

  return (
    <>
      {/* --- TERMS & CONDITIONS MODAL --- */}
      {activeModal === 'terms' && (
        <div className="terms-modal" style={{ display: 'flex' }} onClick={handleBackdropClick}>
          <div className="terms-content">
            <span className="close-terms" onClick={onClose}>&times;</span>
            <h2>Terms & Conditions</h2>
            
            <div className="text-block">
                <h3>1. Introduction</h3>
                <p>Welcome to <strong>FindIT</strong>, a community platform developed to assist students and staff in locating lost items and reporting found items. By using this app, you agree to the terms outlined below.</p>

                <h3>2. Acceptance of Terms</h3>
                <p>By accessing or using FindIt, you agree to be bound by these Terms and Conditions. If you do not accept these terms, please refrain from using the app.</p>

                <h3>3. User Responsibilities</h3>
                <ul>
                <li><strong>Accurate Information:</strong> Ensure that all details provided about found items are truthful and complete.</li>
                <li><strong>Prohibited Listings:</strong> Do not post items that are illegal, unsafe, or against institutional policies.</li>
                <li><strong>Respectful Conduct:</strong> Maintain civility and professionalism when interacting with other users. Harassment and inappropriate behavior will not be tolerated.</li>
                </ul>

                <h3>4. Lost and Found Listings</h3>
                <ul>
                <li><strong>Found Items:</strong> Accurately detail the item and the location and date it was discovered.</li>
                <li><strong>Ownership Verification:</strong> The claimant may be asked to provide proof of ownership to confirm the rightful owner.</li>
                </ul>

                <h3>5. App Usage</h3>
                <ul>
                <li><strong>Non-Commercial Use:</strong> The app is for personal use only within the campus community. Commercial usage is strictly prohibited.</li>
                <li><strong>No Misuse:</strong> Posting false or misleading information is prohibited.</li>
                <li><strong>Account Responsibility:</strong> You are responsible for maintaining the security of your account credentials.</li>
                </ul>

                <h3>6. Privacy</h3>
                <p>We prioritize your privacy. Please review the Privacy Policy for information on how we collect, use, and protect your data.</p>

                <h3>7. Limitation of Liability</h3>
                <p>FindIt is provided "as is". We do not guarantee the recovery of lost items or the return of found items. We are not liable for any loss or damage resulting from the use of this app.</p>

                <h3>8. Changes to Terms</h3>
                <p>We may modify these Terms and Conditions at any time. Continued use of the app constitutes acceptance of any updated terms.</p>

                <h3>9. Termination</h3>
                <p>We reserve the right to suspend or terminate your access to FindIt if any terms are violated or inappropriate activity is identified.</p>

                <h3>10. Governing Law</h3>
                <p>These Terms are governed by the laws applicable in the jurisdiction of the affiliated institution. Disputes will be handled accordingly.</p>
            </div>
          </div>
        </div>
      )}

      {/* --- PRIVACY POLICY MODAL --- */}
      {activeModal === 'privacy' && (
        <div className="terms-modal" style={{ display: 'flex' }} onClick={handleBackdropClick}>
          <div className="terms-content">
            <span className="close-terms" onClick={onClose}>&times;</span>
            <h2>Privacy Policy</h2>
            <p className="intro-text">FindIT is committed to protect your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the FindIT app.</p>
            
            <div className="text-block">
                <h3>1. Information We Collect</h3>
                <ul>
                <li>College Email Verification</li>
                <li>Personal details (Name, Registration Number)</li>
                <li>Lost/Found item reports</li>
                <li>QR Code scans for claim tracking</li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <ul>
                <li>Authenticate your identity</li>
                <li>Secure item reports and claims</li>
                <li>Maintain transaction logs</li>
                <li>Improve app performance and support</li>
                </ul>

                <h3>3. Data Sharing</h3>
                <p>We do not sell or share your information. Limited data is visible to other users involved in claims for verification purposes only.</p>

                <h3>4. Data Security</h3>
                <p>We use secure authentication, encryption, and access restrictions to protect your data.</p>

                <h3>5. Retention</h3>
                <p>We retain data only while your account is active or as required by institutional policy.</p>

                <h3>6. Your Rights</h3>
                <ul>
                <li>Access, update or delete your reported item</li>
                <li>Report false claims</li>
                <li>Request support</li>
                </ul>

                <h3>7. Policy Updates</h3>
                <p>Any changes to this policy will be posted and announced via the app.</p>

                <h3>8. Contact</h3>
                <p>For any questions, contact us at: <span style={{color: '#ffeec3'}}>support@findit.college.edu</span></p>
            </div>
          </div>
        </div>
      )}

      {/* --- DEVELOPER MODAL --- */}
      {activeModal === 'developer' && (
        <div className="developer-modal" style={{ display: 'flex' }} onClick={handleBackdropClick}>
          <div className="developer-content">
            <h2 className="modal-heading">Developer Team</h2>
            <span className="close-developer" onClick={onClose}>&times;</span>

            <div className="developer-block">
                <div className="developer-img-border">
                    <img src="/images/pratham.png" alt="Pratham Khanduja" />
                </div>
                <h3>Pratham Khanduja</h3>
                <p>App & Backend Developer</p>
                <div className="developer-buttons">
                    <a href="https://www.linkedin.com/in/pratham-khanduja/" target="_blank" className="dev-btn">
                    <img src="/images/linkedin.svg" alt="LinkedIn" /> LinkedIn
                    </a>
                    <a href="https://github.com/pratham-developer" target="_blank" className="dev-btn">
                    <img src="/images/github.svg" alt="GitHub" /> GitHub
                    </a>
                </div>
            </div>

            <div className="developer-block">
                <div className="developer-img-border">
                    <img src="/images/rudra.png" alt="Rudra Gupta" />
                </div>
                <h3>Rudra Gupta</h3>
                <p>App & Website Developer</p>
                <div className="developer-buttons">
                    <a href="https://www.linkedin.com/in/rudra-gupta-36827828b/" target="_blank" className="dev-btn">
                    <img src="/images/linkedin.svg" alt="LinkedIn" /> LinkedIn
                    </a>
                    <a href="https://github.com/Rudragupta8777" target="_blank" className="dev-btn">
                    <img src="/images/github.svg" alt="GitHub" /> GitHub
                    </a>
                </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CONTACT MODAL --- */}
      {activeModal === 'contact' && (
        <div className="terms-modal" id="contactModal" style={{ display: 'flex' }} onClick={handleBackdropClick}>
            <div className="terms-content">
                <span className="close-terms" onClick={onClose}>&times;</span>
                <h2 className="modal-heading">Need Assistance</h2>
                <p style={{ marginTop: '20px', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                    For any questions, issues, or support, feel free to contact us directly:
                </p>
                <p style={{ marginTop: '10px', fontSize: '1.2rem', fontWeight: '600', color: '#ffeec3', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="/images/email.svg" alt="Email" style={{ height: '24px' }} />
                    support@finditapp.me
                </p>
            </div>
        </div>
      )}
    </>
  );
};

export default Modals;