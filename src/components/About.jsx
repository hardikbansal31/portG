import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About({ bio }) {
  const containerRef = useScrollReveal();

  return (
    <section id="about" className="section" ref={containerRef}>
      <div className="reveal">
        <p className="section-label">About</p>
        <hr className="about-rule" />
      </div>
      <p className="about-text reveal reveal-delay-1">
        {bio}
      </p>
    </section>
  );
}
