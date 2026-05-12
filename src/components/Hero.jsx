import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero({ data }) {
  const { name, title, bio, contact } = data;
  const [displayedName, setDisplayedName] = useState('');
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [cursorFading, setCursorFading] = useState(false);
  const indexRef = useRef(0);

  // Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < name.length) {
        setDisplayedName(name.substring(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setTypewriterDone(true);
        // Start cursor fade after 2s
        setTimeout(() => setCursorFading(true), 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [name]);

  // Staggered reveals after typewriter
  useEffect(() => {
    if (!typewriterDone) return;

    const t1 = setTimeout(() => setShowSubtitle(true), 200);
    const t2 = setTimeout(() => setShowBio(true), 500);
    const t3 = setTimeout(() => setShowButtons(true), 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [typewriterDone]);

  return (
    <div className="sidebar-content">
      <h1 className="hero-name">
        {displayedName}
        <span className={`cursor-blink${cursorFading ? ' fade-out' : ''}`} />
      </h1>

      <p className={`hero-subtitle${showSubtitle ? ' visible' : ''}`}>
        {title}
      </p>

      <p className={`hero-bio${showBio ? ' visible' : ''}`}>
        {bio}
      </p>

      <div className={`hero-buttons${showButtons ? ' visible' : ''}`}>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hero-btn">
          <Github size={16} />
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn">
          <Linkedin size={16} />
          LinkedIn
        </a>
        <a href={`mailto:${contact.email}`} className="hero-btn">
          <Mail size={16} />
          Email
        </a>
        <a href={contact.resume} className="hero-btn primary" download>
          <Download size={16} />
          Resume
        </a>
      </div>
    </div>
  );
}
