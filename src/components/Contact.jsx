import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, PhoneIcon, LinkedinIcon, SendIcon } from './Icons';

export default function Contact({ onCopy, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    showToast(`Thank you, ${formData.name}! Opening your email client...`);

    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Fazil,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-desc">
            Whether you have an internship opportunity, a project collaboration, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-card-box">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-side">
            <h3 className="contact-heading">{personalInfo.name}</h3>
            <p className="contact-sub">
              Based in {personalInfo.location}. Open to software engineering roles, hackathons, and high-impact web development projects.
            </p>

            <div className="contact-methods">
              
              {/* Email */}
              <div 
                className="contact-row-item" 
                style={{ cursor: 'pointer' }}
                onClick={() => onCopy(personalInfo.email, 'Email address')}
                title="Click to copy email"
              >
                <div className="contact-row-icon">
                  <MailIcon size={18} />
                </div>
                <div className="contact-row-texts">
                  <span className="contact-row-label">College Email (Click to copy)</span>
                  <span className="contact-row-value">{personalInfo.email}</span>
                </div>
              </div>

              {/* Phone */}
              <div 
                className="contact-row-item" 
                style={{ cursor: 'pointer' }}
                onClick={() => onCopy(personalInfo.phone, 'Phone number')}
                title="Click to copy phone"
              >
                <div className="contact-row-icon">
                  <PhoneIcon size={18} />
                </div>
                <div className="contact-row-texts">
                  <span className="contact-row-label">Direct Phone (Click to copy)</span>
                  <span className="contact-row-value">{personalInfo.phone}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-row-item"
              >
                <div className="contact-row-icon">
                  <LinkedinIcon size={18} />
                </div>
                <div className="contact-row-texts">
                  <span className="contact-row-label">Professional Profile</span>
                  <span className="contact-row-value">LinkedIn Profile & Network</span>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label">Your Name</label>
              <input 
                type="text" 
                id="nameInput" 
                name="name"
                className="form-input" 
                placeholder="e.g. Alex Smith" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailInput" className="form-label">Your Email</label>
              <input 
                type="email" 
                id="emailInput" 
                name="email"
                className="form-input" 
                placeholder="alex@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="messageInput" className="form-label">Message</label>
              <textarea 
                id="messageInput" 
                name="message"
                className="form-textarea" 
                placeholder="Hi Fazil, I would love to connect regarding an engineering opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Direct Message'}</span>
              <SendIcon size={16} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

