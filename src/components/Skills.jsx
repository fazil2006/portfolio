import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { CodeIcon, CpuIcon, WrenchIcon, GlobeIcon } from './Icons';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (icon) => {
    switch(icon) {
      case 'code': return <CodeIcon size={20} />;
      case 'cpu': return <CpuIcon size={20} />;
      case 'wrench': return <WrenchIcon size={20} />;
      default: return <GlobeIcon size={20} />;
    }
  };

  const filteredData = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.level.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Technical Competencies</span>
          <h2 className="section-title">Skills & Tooling</h2>
          <p className="section-desc">
            A balanced mix of core programming languages, modern web engineering, developer tooling, and multilingual communication.
          </p>

          {/* Quick search input */}
          <div style={{ marginTop: '20px', maxWidth: '340px' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search skills (e.g. React, Java, Git)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontSize: '0.875rem', padding: '10px 14px' }}
            />
          </div>
        </div>

        <div className="skills-wrapper">
          {filteredData.map((category, idx) => (
            <div className="skill-category-card" key={idx}>
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              
              <div className="skills-chips">
                {category.skills.map((skill, sIdx) => (
                  <span className="skill-chip" key={sIdx}>
                    <span>{skill.name}</span>
                    <span className="skill-level-tag">({skill.level})</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

