import React from 'react';


const Footer = () => {
  return (
    <div className="footer" style={{backgroundColor: "black !important"}}>
      <div className="continer">
        <div className="row">
          {/* Footer Column 1 */}
          <div className="footer-col footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and iOS mobile phone.</p>
            <div className="app-logo">
              <img src="images/play-store.png" alt="Play Store" />
              <img src="images/app-store.png" alt="App Store" />
            </div>
          </div>
          {/* Footer Column 2 */}
          <div className="footer-col footer-col-2">
            <img src="/images/logo-white.png" alt="Logo" />
            <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
          </div>
          {/* Footer Column 3 */}
          <div className="footer-col footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          {/* Footer Column 4 */}
          <div className="footer-col footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">© 2024 UzeFa's Store - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
