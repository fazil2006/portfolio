import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPinIcon, PhoneIcon, MailIcon, ArrowRightIcon } from './Icons';

export default function Hero({ onCopy }) {
  return (
    <section className="section hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Text & Actions */}
          <div className="hero-content">
            
            {/* Live Status Badge */}
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>{personalInfo.status}</span>
            </div>

            <h1 className="hero-name">{personalInfo.name}</h1>
            <div className="hero-role">{personalInfo.role}</div>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* Quick Contact Pills */}
            <div className="contact-pills">
              {/* Location */}
              <div className="pill-item" title="Based in">
                <span className="pill-icon">
                  <MapPinIcon size={15} />
                </span>
                <span>{personalInfo.location}</span>
              </div>

              {/* Phone */}
              <button 
                type="button"
                className="pill-item clickable" 
                onClick={() => onCopy(personalInfo.phone, 'Phone number')} 
                title="Click to copy phone"
              >
                <span className="pill-icon">
                  <PhoneIcon size={15} />
                </span>
                <span>{personalInfo.phone}</span>
                <span className="copy-chip">copy</span>
              </button>

              {/* Email */}
              <button 
                type="button"
                className="pill-item clickable" 
                onClick={() => onCopy(personalInfo.email, 'Email address')} 
                title="Click to copy email"
              >
                <span className="pill-icon">
                  <MailIcon size={15} />
                </span>
                <span>{personalInfo.email}</span>
                <span className="copy-chip">copy</span>
              </button>
            </div>

            {/* CTA Actions */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Featured Projects</span>
                <ArrowRightIcon size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Let's Connect</span>
              </a>
            </div>

          </div>

          {/* Right Column: User Photo Showcase in Circular Border (NO overlay details) */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-card">
              <div className="hero-photo-inner">
                <img 
                  src={personalInfo.photo} 
                  alt="Fazil A R" 
                  className="hero-photo-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/fazil.jpg";
                  }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
