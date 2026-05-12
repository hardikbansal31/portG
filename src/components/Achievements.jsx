import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Achievements({ achievements }) {
  const containerRef = useScrollReveal();

  return (
    <section id="achievements" className="section" ref={containerRef}>
      <p className="section-label reveal">Achievements</p>

      <div className="achievements-list">
        {achievements.map((ach, index) => (
          <div key={index} className={`achievement-item reveal reveal-delay-${(index % 4) + 1}`}>
            <span className="achievement-number">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="achievement-text">
              {ach.link && ach.link !== '#' ? (
                <a href={ach.link} target="_blank" rel="noopener noreferrer">
                  {ach.text}
                </a>
              ) : (
                ach.text
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
