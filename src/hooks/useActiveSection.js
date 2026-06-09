import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently most visible in the viewport.
 * Returns the active section ID for nav highlighting.
 */
export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const handleScroll = () => {
      const targetPoint = window.innerHeight / 3; // Active point is top 33% of viewport

      let currentActive = activeSection;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetPoint && rect.bottom >= targetPoint) {
            currentActive = id;
            break;
          }
        }
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection]);

  return activeSection;
}
