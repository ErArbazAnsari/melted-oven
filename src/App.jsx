import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page-container">
      {/* HEADER */}
      <header className="header">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="logo"
        />
        <h1 className="company-name"><i>MELTED OVEN</i></h1>
        <p className="tagline">Automated Customer Welcome System</p>

      </header>

      {/* CENTER VIDEO */}
      <div className="video-section">
        <video
          className="center-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <a
    href="https://wa.me/911234567890"
    target="_blank"
    rel="noreferrer"
    className="whatsapp-btn"
  >
    Chat on WhatsApp
  </a>


      {/* CONTACT FORM */}
      <div className="form-box">
        <h2>Get Offers</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Phone Number" />
        <button>Submit</button>
      </div>

      {/* SOCIAL LINKS */}
      <div className="social-links">

  {/* WhatsApp */}
  <a href="https://wa.me/911234567890" className="social-btn whatsapp" target="_blank">
    <svg viewBox="0 0 32 32" className="icon">
      <path fill="currentColor"
        d="M16 .3C7.3.3.3 7.3.3 16c0 3 .8 5.7 2.3 8.1L.3 32l8.1-2.3A15.7 15.7 0 0 0 16 31.7c8.7 0 15.7-7 15.7-15.7S24.7.3 16 .3zm0 28.6c-2.7 0-5.3-.8-7.5-2.3l-.5-.3-4.8 1.4 1.4-4.7-.3-.6A13.4 13.4 0 1 1 29.4 16c0 7.4-6 13-13.4 13zm7.1-9.8c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.9.2-.3.4-1 1.2-1.3 1.4-.2.2-.5.2-.9 0s-1.7-.6-3.2-2a12.4 12.4 0 0 1-2.3-3c-.2-.4 0-.7.2-.9l.7-.9c.2-.3.3-.5.5-.8.2-.2.1-.5 0-.7L12 9.5c-.2-.4-.5-.4-.9-.4h-.8c-.3 0-.7.1-1 .4-.3.3-1.3 1.2-1.3 3 0 1.7 1.3 3.4 1.5 3.6.2.2 2.5 3.8 6 5.3.8.3 1.5.6 2 .8.8.3 1.5.3 2 .2.6-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.3-1.7 0-.2-.3-.2-.7-.4z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://instagram.com" className="social-btn instagram" target="_blank">
    <svg viewBox="0 0 24 24" className="icon">
      <path fill="currentColor"
        d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
        5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 
        1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 
        3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 
        1 0 0-10zm0 2a3 3 0 1 
        1 0 6 3 3 0 1 1 0-6zm4.8-.9a1.1 1.1 0 
        1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com" className="social-btn facebook" target="_blank">
    <svg viewBox="0 0 24 24" className="icon">
      <path fill="currentColor"
        d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2c0-2 
        1.2-3.1 3-3.1.9 0 1.9.2 1.9.2v2h-1c-1 0-1.3.6-1.3 
        1.2v1.7h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
    </svg>
  </a>

  {/* Website */}
  <a href="https://your-website.com" className="social-btn website" target="_blank">
    <svg viewBox="0 0 24 24" className="icon">
      <path fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2a15.6 15.6 0 0 0-1.1-5 
        8.1 8.1 0 0 1 4.3 5zm-6.1 0h-3.6a13.8 13.8 0 0 1 1.8-5.4 
        13.8 13.8 0 0 1 1.8 5.4zm-5.8 0H4.2a8.1 8.1 0 0 1 4.3-5 
        15.6 15.6 0 0 0-1.1 5zm0 2a15.6 15.6 0 0 0 1.1 5 8.1 8.1 0 0 1-4.3-5h3.2zm5.8 0a13.8 13.8 0 0 1-1.8 5.4 
        13.8 13.8 0 0 1-1.8-5.4h3.6zm1.8 0h3.2a8.1 8.1 0 0 1-4.3 5 
        15.6 15.6 0 0 0 1.1-5z" />
    </svg>
  </a>

</div>

       {/* ANIMATED TEXT */}
       <div className="animated-text">
      <p className="line1">Win free gifts on your birthday & special moments!</p>
        <p className="line2">Get up to 80% OFF on your shopping</p>
      </div>


      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Your Company — All Rights Reserved</p>
      </footer>
    </div>
  );
}
