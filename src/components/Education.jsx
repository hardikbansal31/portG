import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education({ education }) {
  const containerRef = useScrollReveal();

  return (
    <section id="education" className="section" ref={containerRef}>
      <p className="section-label reveal">Education</p>

      <div className="education-card reveal reveal-delay-1">
        <h3 className="education-degree">{education.degree}</h3>
        <p className="education-college">{education.college}</p>
        <p className="education-date">{education.date}</p>
        <div className="education-cgpi">
          <span className="education-cgpi-label">CGPI</span>
          <span className="education-cgpi-value">{education.cgpi}</span>
        </div>
      </div>
    </section>
  );
}
