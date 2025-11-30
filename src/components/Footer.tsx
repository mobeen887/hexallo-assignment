import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-inner">
        <div className="footer-left">
          <div className="copyright">© All rights reserved Hexallo LLC 2023</div>

          <nav className="footer-links" aria-label="footer">
            <a href="#" className="footer-link">Privacy policy</a>
            <a href="#" className="footer-link">Terms of service</a>
            <a href="#" className="footer-link">Contact us</a>
          </nav>
        </div>

        <div className="footer-right" aria-hidden>
          <a className="social" href="#" aria-label="X (Twitter)">
            <img src="/icons/x.svg" alt="X" />
          </a>

          <a className="social" href="#" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>

          <a className="social" href="#" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>

          <a className="social" href="#" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>

          <a className="social" href="#" aria-label="WhatsApp">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  )
}
