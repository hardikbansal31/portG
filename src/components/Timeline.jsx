import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Timeline({ experience }) {
  const sectionRef = useScrollReveal();
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleEntries, setVisibleEntries] = useState(new Set());

  // Timeline line draw animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Calculate progress: 0 when section enters, 1 when section fully scrolled
      const start = windowHeight * 0.7;
      const scrolled = start - sectionTop;
      const totalScrollable = sectionHeight + start;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      setLineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Entries reveal on scroll
  useEffect(() => {
    const entries = sectionRef.current?.querySelectorAll('.timeline-entry');
    if (!entries) return;

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleEntries((prev) => new Set([...prev, index]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [experience]);

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <p className="section-label reveal">Experience</p>

      <div className="timeline">
        <div className="timeline-line-container">
          <div
            className="timeline-line-active"
            style={{ transform: `scaleY(${lineProgress})` }}
          />
        </div>

        {experience.map((item, index) => (
          <div
            key={index}
            className="timeline-entry"
            data-index={index}
            style={{
              opacity: visibleEntries.has(String(index)) ? 1 : 0,
              transform: visibleEntries.has(String(index))
                ? 'translateX(0)'
                : 'translateX(30px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              transitionDelay: `${index * 0.15}s`,
            }}
          >
            <div className="timeline-dot" />
            <div className="timeline-header">
              <span className="timeline-role">{item.role}</span>
              <span className="timeline-company">{item.company}</span>
              <span className="timeline-date">{item.date}</span>
            </div>
            <ul className="timeline-description">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
