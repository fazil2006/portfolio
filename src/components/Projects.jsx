import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { CheckIcon, ExternalLinkIcon } from './Icons';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Web Apps'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section 
      className="section" 
      id="projects" 
      style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}
    >
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">Projects & Applications</h2>
          <p className="section-desc">
            Practical web solutions solving real-world problems through user-focused design, modern state management, and clean architecture.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div>
                <div className="project-badge-row">
                  <span className="project-tag">{project.tag}</span>
                  <a 
                    href="#contact" 
                    className="project-icon-btn" 
                    aria-label={`Inquire about ${project.title}`} 
                    title={`Inquire about ${project.title}`}
                  >
                    <ExternalLinkIcon size={15} />
                  </a>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckIcon size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-pill">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
