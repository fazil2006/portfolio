import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { TrophyIcon, FileTextIcon, UsersIcon, ShieldCheckIcon } from './Icons';

export default function Achievements() {
  const getBadgeIcon = (type) => {
    switch (type) {
      case 'trophy': return <div className="cert-icon icon-blue"><TrophyIcon size={20} /></div>;
      case 'paper': return <div className="cert-icon icon-blue"><FileTextIcon size={20} /></div>;
      case 'leadership': return <div className="cert-icon icon-blue"><UsersIcon size={20} /></div>;
      default: return <div className="cert-icon icon-blue"><ShieldCheckIcon size={20} /></div>;
    }
  };

  return (
    <section 
      className="section" 
      id="certifications" 
      style={{ backgroundColor: '#090e17', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Honors & Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-desc">
            Recognition in competitive coding, technical research, professional credentials, and student community leadership.
          </p>
        </div>

        <div className="certs-grid">
          {achievementsData.map((item) => (
            <div className="cert-card" key={item.id}>
              <div>
                <div className="cert-top">
                  {getBadgeIcon(item.type)}
                  <span className="cert-badge">{item.award}</span>
                </div>
                <h3 className="cert-title">{item.title}</h3>
                <div className="cert-issuer">{item.issuer}</div>
                <p className="cert-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
