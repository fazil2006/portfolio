import React from 'react';
import { educationData } from '../data/portfolioData';
import { GradCapIcon, BookOpenIcon, AwardIcon, MapPinIcon } from './Icons';

export default function Education() {
  const getIcon = (id) => {
    switch(id) {
      case 'be-cse': return <GradCapIcon size={24} />;
      case 'hsc': return <BookOpenIcon size={24} />;
      default: return <AwardIcon size={24} />;
    }
  };

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">Education Journey</h2>
          <p className="section-desc">
            Building strong theoretical fundamentals in computer engineering while actively practicing software craft and peer leadership.
          </p>
        </div>

        <div className="edu-timeline">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className={`edu-card ${item.featured ? 'featured' : ''}`}
            >
              <div className="edu-icon-box">
                {getIcon(item.id)}
              </div>
              <div className="edu-content-inner">
                <div className="edu-top-row">
                  <h3 className="edu-degree">{item.degree}</h3>
                  <span className="edu-period">{item.period}</span>
                </div>
                <div className="edu-institution">{item.institution}</div>
                <div className="edu-location">
                  <MapPinIcon size={14} />
                  <span>{item.location}</span>
                </div>
                <p className="edu-desc">{item.description}</p>
                
                {item.highlights && item.highlights.length > 0 && (
                  <div className="edu-highlights">
                    {item.highlights.map((h, i) => (
                      <span key={i} className="edu-highlight-pill">{h}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

