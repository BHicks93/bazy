import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* TOP SECTION: The Giant Call to Action */}
        <div className="footer-cta">
          <h2>Let's create something together</h2>
          {/* We link this to your custom form page! */}
          <Link href="/info" className="lets-talk-btn">
            Contact
          </Link>
        </div>
        
        {/* BOTTOM SECTION: Grid Navigation & Copyright */}
        <div className="footer-bottom">
          {/*<div className="footer-links-grid">
            <div className="footer-nav-column">
              <Link href="/">Work</Link>
              <Link href="/info">Info</Link>
              <Link href="/info">Contact</Link>
              <a href="https://www.linkedin.com/company/bazy-inc" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            
            <div className="footer-nav-column">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>*/}

          <div className="footer-copyright">
            <p>© {currentYear} Bazy Inc. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}