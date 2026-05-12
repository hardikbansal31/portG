import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll-triggered reveal animations.
 * Adds 'revealed' class to elements with 'reveal' class when they enter viewport.
 */
export function useScrollReveal(options = {}, dependencies = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, ...dependencies]);

  return containerRef;
}
