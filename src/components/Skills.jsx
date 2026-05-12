import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map skill names to devicon class names where available
const deviconMap = {
  Java: 'devicon-java-plain',
  JavaScript: 'devicon-javascript-plain',
  Python: 'devicon-python-plain',
  'Node.js': 'devicon-nodejs-plain',
  'Spring Boot': 'devicon-spring-plain',
  'React.js': 'devicon-react-original',
  'Next.js': 'devicon-nextjs-plain',
  Express: 'devicon-express-original',
  MySQL: 'devicon-mysql-plain',
  MongoDB: 'devicon-mongodb-plain',
  PostgreSQL: 'devicon-postgresql-plain',
  SQLite: 'devicon-sqlite-plain',
  Redis: 'devicon-redis-plain',
  Docker: 'devicon-docker-plain',
  Git: 'devicon-git-plain',
  'Git & GitHub': 'devicon-git-plain',
  Linux: 'devicon-linux-plain',
  Postman: 'devicon-postman-plain',
  'HTML & CSS': 'devicon-html5-plain',
  'Tailwind CSS': 'devicon-tailwindcss-plain',
};

export default function Skills({ skills }) {
  const containerRef = useScrollReveal();
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="section" ref={containerRef}>
      <p className="section-label reveal">Skills</p>

      {categories.map((category, catIndex) => (
        <div key={category} className={`skills-group reveal reveal-delay-${(catIndex % 4) + 1}`}>
          <h3 className="skills-category">{category}</h3>
          <div className="skills-pills">
            {skills[category].map((skill) => {
              const iconClass = deviconMap[skill];
              return (
                <span key={skill} className="skill-pill">
                  {iconClass && <i className={iconClass} />}
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
