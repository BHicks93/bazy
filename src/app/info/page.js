"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Info() {
  return (
    <>
      <main className="info-page">
        <motion.div 
          className="info-layout"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* LEFT SIDE: Studio Details */}
          <div className="info-text">
            <h1>We design digital experiences that elevate brands.</h1>
            <p>Based in New York, we partner with visionary companies to build scalable design systems, flagship websites, and engaging digital products.</p>
            
            <div className="contact-details">
              <a href="mailto:info@bazyinc.com">info@bazyinc.com</a>
              <a href="https://instagram.com" target="_blank">Instagram</a>
              <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="info-form-container">
            {/* The "action" URL is where the form sends data. We will update this later! */}
            <form action="https://formspree.io/f/xdaylzzr" method="POST" className="contact-form">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Jane Doe" />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="jane@company.com" />
              </div>

              <div className="input-group">
                <label htmlFor="project">Tell us about your project</label>
                <textarea id="project" name="project" required rows="5" placeholder="We are looking to redesign our website..."></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Inquiry</button>
            </form>
          </div>
        </motion.div>
      </main>
    </>
  );
}