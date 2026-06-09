import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_COUNT = 3;

function formatDescPoint(text) {
  const match = text.match(/^\*\*(.*?)\*\*:\s*(.*)/);
  if (match) {
    return (
      <>
        <strong>{match[1]}</strong>: {match[2]}
      </>
    );
  }
  return text;
}

export default function Projects({ projects }) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useScrollReveal({}, [expanded]);

  const visibleProjects = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section" ref={containerRef}>
      <p className="section-label reveal">Projects</p>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={`project-card reveal reveal-delay-${(index % 4) + 1}`}
          >
            <h3 className="project-title">{project.title}</h3>
            {project.subtitle && (
              <p className="project-subtitle">{project.subtitle}</p>
            )}

            {Array.isArray(project.description) ? (
              <ul className="project-desc-list">
                {project.description.map((point, i) => (
                  <li key={i} className="project-desc-item">
                    {formatDescPoint(point)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="project-desc">{project.description}</p>
            )}

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          className="projects-toggle"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? (
            <>View Less <ChevronUp size={16} /></>
          ) : (
            <>View More ({projects.length - INITIAL_COUNT}) <ChevronDown size={16} /></>
          )}
        </button>
      )}
    </section>
  );
}
