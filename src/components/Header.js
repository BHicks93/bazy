"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <header className="site-header">
        <Link href="/" className="logo">Bazy</Link>
        <nav className="main-nav">
          <Link href="/">Work</Link>
          <Link href="/info">Info</Link>
        </nav>
      </header>
    </div>
  );
}