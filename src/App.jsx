import React, { useMemo } from 'react';
import './App.css';
import { portfolioData } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';

const NAV_SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
];

// Animated SVG mesh background for sidebar
function SidebarMesh() {
  const lines = useMemo(() => {
    const result = [];
    // Horizontal lines
    for (let i = 0; i < 20; i++) {
      const y = (i / 19) * 100;
      result.push(
        <line
          key={`h-${i}`}
          x1="0%"
          y1={`${y}%`}
          x2="100%"
          y2={`${y}%`}
          className="mesh-line"
        />
      );
    }
    // Vertical lines
    for (let i = 0; i < 12; i++) {
      const x = (i / 11) * 100;
      result.push(
        <line
          key={`v-${i}`}
          x1={`${x}%`}
          y1="0%"
          x2={`${x}%`}
          y2="100%"
          className="mesh-line"
        />
      );
    }
    // Diagonal lines
    for (let i = 0; i < 8; i++) {
      const offset = (i / 7) * 200 - 50;
      result.push(
        <line
          key={`d1-${i}`}
          x1={`${offset}%`}
          y1="0%"
          x2={`${offset + 50}%`}
          y2="100%"
          className="mesh-line"
        />
      );
    }
    return result;
  }, []);

  return (
    <div className="sidebar-bg">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines}
      </svg>
    </div>
  );
}

export default function App() {
  const sectionIds = useMemo(() => NAV_SECTIONS.map((s) => s.id), []);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <CustomCursor />

      {/* Sticky Sidebar */}
      <aside className="sidebar">
        <SidebarMesh />

        <Hero data={portfolioData} />

        <nav className="sidebar-nav">
          <ul>
            {NAV_SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={activeSection === id ? 'active' : ''}
                >
                  <span className="nav-dot" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Scrollable Main Content */}
      <main className="main-content">
        <Timeline experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Education education={portfolioData.education} />
        <Achievements achievements={portfolioData.achievements} />

        <footer className="footer">
          Built with precision & care.
        </footer>
      </main>
    </div>
  );
}
