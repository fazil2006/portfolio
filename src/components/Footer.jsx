import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="footer-brand">{personalInfo.name}</span>
          <span className="footer-copy">
            © {currentYear} {personalInfo.name}. Engineered with React, Vite & modern clean aesthetics.
          </span>
        </div>

        <div className="footer-links">
          <a href="#hero" className="footer-link">Home</a>
          <a href="#education" className="footer-link">Education</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#certifications" className="footer-link">Achievements</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href={`mailto:${personalInfo.email}`} className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}

