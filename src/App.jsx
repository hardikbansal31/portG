import React, { useMemo } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Phone,
  Trophy,
} from "lucide-react";

// --- Hardcoded Data ---
const portfolioData = {
  name: "Hardik Bansal",
  title: "Java & Node.js Developer",
  location: "Mumbai, India",
  bio: "A passionate and driven Computer Engineering student with a love for building innovative and efficient web applications. Experienced in both Java and JavaScript ecosystems, and always eager to learn new technologies to solve real-world problems.",
  contact: {
    email: "bansalhardik31@gmail.com",
    github: "https://github.com/hardikbansal31",
    linkedin: "https://www.linkedin.com/in/hardik-bansal-08aa2727a/",
    phone: "9326748670",
  },
  education: {
    degree: "B.E. Computer Engineering",
    college: "Thakur College of Engineering & Technology (TCET), Mumbai",
    date: "2023 - 2027 (Expected)",
    cgpi: "9.38",
  },
  achievements: [
    {
      text: "5 Stars (Gold Badge) in Java on HackerRank.",
      link: "https://www.hackerrank.com/profile/iAmSheep",
    },
    {
      text: "Finalist in Generation Tech hackathon by J.P. Morgan.",
      link: "https://drive.google.com/file/d/1fNyMbQpt3QDNJR_fpWelhaBCP1BEbxVH/view?usp=sharing",
    },
    {
      text: "Finalist in IEEE TechSangam 24-hour hackathon by MIT-ADT Pune.",
      link: "https://drive.google.com/file/d/1qbbrS8yl67WFu0PVs6tDHWdSCpQ76bCn/view?usp=sharing",
    },
    {
      text: "Completed 'Java Programming Masterclass' course on Udemy.",
      link: "https://drive.google.com/file/d/1pTvlV_ai5MCG3uBp0sWYB-_XWyUw5JYA/view?usp=sharing",
    },
  ],
  experience: [
    {
      role: "Vice Chairperson",
      company: "GeeksForGeeks Student Chapter TCET",
      date: "June 2025 - Present",
      description: [
        "Coordinating with over 20 club members for smooth operations.",
        "Prepared an online quiz with more than 400 questions.",
        "Hosted coding competitions, webinars, and seminars with speakers from top companies like Flipkart and Google.",
      ],
    },
    {
      role: "Technical Team Member",
      company: "S.O.R.T Club of TCET",
      date: "Oct 2024 - Mar 2025",
      description: [
        "Rebuilt the official S.O.R.T Club website using React.js.",
        "Successfully migrated the site from a static HTML/CSS/JS setup to a modern, dynamic React application.",
      ],
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "Spring Boot",
    "Node.js",
    "React.js",
    "Next.js",
    "MySQL",
    "MongoDB",
    "Prisma",
    "Hibernate",
    "Docker",
    "Git & GitHub",
    "Postman",
    "HTML & CSS",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "Smart City Website",
      description:
        "Utilizes OpenStreet Map & OpenRoute service APIs to provide routing and live location tracking. Features traffic analytics for major junctions in Mumbai and includes a downloadable Android app.",
      technologies: ["MERN Stack", "Node.js", "OpenStreetMap API"],
      link: "https://github.com/hardikbansal31/SmartCity",
      live: "https://smart-city-pi-five.vercel.app/",
    },
    {
      title: "Task Assignment App",
      description:
        "A full-stack application with role-based access (Admin, User) and secure REST APIs using JWT-based authentication. The entire application is containerized with Docker for easy deployment.",
      technologies: [
        "Java (Spring Boot)",
        "Next.js",
        "MySQL",
        "Prisma",
        "Docker",
      ],
      link: "https://github.com/hardikbansal31/ip",
      live: "https://ip-mocha-nine.vercel.app/",
    },
    {
      title: "S.O.R.T Club Website",
      description: "The club website during my tenure.",
      technologies: ["React", "JavaScript", "Bootstrap"],
      link: "https://github.com/hardikbansal31/sort",
      live: "https://sort-mauve-zeta.vercel.app/",
    },
  ],
};

// --- Floating Icons Background ---
const TechIcons = {
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path fill="#f7df1e" d="M0 0h32v32H0z"></path>
      <path d="M24.26 26.043h-3.248l1.75-2.822c.18-.3.31-.585.39-.855.08-.27.12-.525.12-.765 0-.51-.135-.93-.405-1.26-.27-.33-.675-.495-1.215-.495-.51 0-.945.135-1.305.405-.36.27-.63.63-.81 1.08l-2.97-1.89c.51-.9.99-1.635 1.44-2.19.45-.555 1.005-.975 1.665-1.26.66-.285 1.395-.42 2.205-.42.93 0 1.74.21 2.43.63.69.42 1.23.99 1.62 1.71.39.72.585 1.56.585 2.52 0 .99-.24 1.905-.72 2.745-.48.84-1.155 1.695-2.025 2.565zm-9.63-1.125h-3.09l1.62-2.295c.78-.99 1.395-1.815 1.845-2.475.45-.66.81-1.26 1.08-1.8.27-.54.405-1.065.405-1.575 0-.69-.21-1.275-.63-1.755-.42-.48-.975-.72-1.665-.72-.69 0-1.275.24-1.755.72-.48.48-.795 1.08-.945 1.8l-3.015-1.62c.42-.99.975-1.83 1.665-2.52.69-.69 1.53-1.215 2.52-1.575.99-.36 2.085-.54 3.285-.54.93 0 1.77.15 2.52.45.75.3 1.395.75 1.935 1.35.54.6.945 1.32 1.215 2.16.27.84.405 1.77.405 2.79 0 1.02-.21 2.025-.63 3.015-.42.99-1.02 1.98-1.8 2.97-.78.99-1.695 2.01-2.745 3.06z"></path>
    </svg>
  ),
  Node: () => (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path
        fill="#68a063"
        d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm-1.12 231.552c-56.32 0-103.584-41.696-103.584-95.04 0-16.16 4.384-31.616 12.32-45.312l32.128 18.432c-3.36 6.528-5.184 13.728-5.184 21.28 0 32.368 26.912 58.528 59.936 58.528 12.128 0 23.52-3.584 33.152-9.856l17.472 30.128A102.46 102.46 0 0 1 126.88 231.552zm87.2-70.496c-13.024 22.912-37.344 38.016-64.48 38.016-16.16 0-31.456-4.928-44.24-13.664l-32.064-18.464c3.36-6.528 5.152-13.728 5.152-21.248 0-32.384-26.912-58.56-59.936-58.56-1.056 0-2.08.064-3.136.16L32.8 57.184c13.024-22.912 37.344-38.016 64.48-38.016 16.16 0 31.456 4.928 44.24 13.664l32.064 18.464c-3.36 6.528-5.152 13.728-5.152 21.248 0 32.384 26.912 58.56 59.936 58.56 1.056 0 2.08-.064 3.136-.16l12.64 21.888z"
      ></path>
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path
        fill="#f89820"
        d="M26.46 14.28c0 2.9-1.63 4.81-4.93 4.81-2.92 0-4.04-1.7-4.04-3.86s1.12-3.81 4.04-3.81c3.3 0 4.93 1.87 4.93 2.86zm-6.27 2.6c0 .89.43 1.48 1.33 1.48.91 0 1.34-.6 1.34-1.48s-.43-1.48-1.34-1.48c-.9 0-1.33.59-1.33 1.48zM14.01 23h-2.28L8 10.3h2.38l2.13 8.87c.1.53.15.93.2 1.2h.05c.05-.27.1-.67.2-1.2L15.1 10.3h2.38l-3.47 12.7z"
      />
      <path
        fill="#5382a1"
        d="M0 0v32h32V0H0zm28.93 23.23c0 2.23-.74 3.49-2.3 4.19s-3.47.88-5.83.88h-1.5V19.4h1.18c3.8 0 5.48-1.3 5.48-4.19s-2.08-3.93-5.08-3.93c-2.6 0-5.13 1-5.13 4.41V28.3h-2.38V8.12h2.28l.2 1.8h.08c.78-1.45 2.33-2.2 4.53-2.2 3.88 0 7.45 2.1 7.45 6.61z"
      />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <path
        fill="#38bdf8"
        d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
      ></path>
      <path
        fill="#38bdf8"
        d="M10.658 15.195c.683-3.085 3.81-5.488 7.342-5.488 2.829 0 5.153 1.528 6.244 3.72l-2.04.992c-.683-1.374-2.11-2.439-4.204-2.439-2.622 0-4.947 1.76-5.634 4.219l-1.707-.004zm10.684 1.61c-.683 3.085-3.81 5.488-7.342 5.488-2.829 0-5.153 1.528-6.244-3.72l2.04-.992c.683 1.374 2.11 2.439 4.204 2.439 2.622 0 4.947-1.76 5.634-4.219l1.707.004z"
      ></path>
    </svg>
  ),
};

const FloatingIconsBackground = () => {
  const icons = useMemo(() => {
    const iconKeys = Object.keys(TechIcons);
    return Array.from({ length: 20 }).map((_, i) => {
      const Icon = TechIcons[iconKeys[i % iconKeys.length]];
      const style = {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        width: `${Math.random() * 40 + 20}px`,
        height: `${Math.random() * 40 + 20}px`,
        animationDuration: `${Math.random() * 20 + 15}s`,
        animationDelay: `${Math.random() * 10}s`,
      };
      return (
        <div key={i} className="floating-icon" style={style}>
          <Icon />
        </div>
      );
    });
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-25px) rotate(180deg); opacity: 0.4; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.7; }
        }
        .floating-icon {
          position: absolute;
          color: #61dafb;
          opacity: 0.5;
          animation: float linear infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }
        .backdrop-blur-sm {
          will-change: backdrop-filter;
        }
      `}</style>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
        {icons}
      </div>
    </>
  );
};

// --- Reusable Components ---
const IconLink = ({ href, Icon, "aria-label": ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-300 hover:text-slate-100 transition-colors duration-300"
    aria-label={ariaLabel}
  >
    <Icon size={24} />
  </a>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-16 md:mb-24 scroll-mt-16">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      {title}
    </h2>
    <div className="lg:mt-0 mt-4">{children}</div>
  </section>
);

const ExperienceCard = ({ item }) => (
  <div className="block p-6 mb-6 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/50">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
          {item.role} · {item.company}
        </h3>
      </div>
      <div className="text-xs font-medium text-slate-300 group-hover:text-slate-100 uppercase tracking-wider whitespace-nowrap transition-colors duration-300">
        {item.date}
      </div>
    </div>
    <ul className="mt-3 text-slate-300 group-hover:text-slate-100 list-disc list-inside space-y-2 transition-colors duration-300">
      {item.description.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="block p-6 mb-6 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/50">
    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
      {project.title}
    </h3>
    <p className="mt-2 text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
      {project.description}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-4 text-sm font-semibold text-slate-200 group-hover:text-slate-100 transition-colors duration-300">
      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-teal-300"
        >
          <span>View on GitHub</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      )}
      {project.live && project.live !== "#" && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-teal-300"
        >
          <span>Live Demo</span>
          <ArrowUpRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  const {
    name,
    title,
    location,
    bio,
    contact,
    skills,
    projects,
    experience,
    education,
    achievements,
  } = portfolioData;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900">
      <FloatingIconsBackground />
      <div className="relative z-10 min-h-screen max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column: Header */}
          <header className="pt-12 lg:pt-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                {name}
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{location}</p>

              {/* Navigation */}
              <nav
                className="hidden lg:block mt-12"
                aria-label="In-page navigation"
              >
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleNavClick(e, "about")}
                      className="font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#education"
                      onClick={(e) => handleNavClick(e, "education")}
                      className="font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      onClick={(e) => handleNavClick(e, "experience")}
                      className="font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={(e) => handleNavClick(e, "skills")}
                      className="font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={(e) => handleNavClick(e, "projects")}
                      className="font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      onClick={(e) => handleNavClick(e, "achievements")}
                      className="font-bold text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    >
                      Achievements
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-8">
              <IconLink
                href={contact.github}
                Icon={Github}
                aria-label="GitHub Profile"
              />
              <IconLink
                href={contact.linkedin}
                Icon={Linkedin}
                aria-label="LinkedIn Profile"
              />
              <IconLink
                href={`mailto:${contact.email}`}
                Icon={Mail}
                aria-label="Email"
              />
              <IconLink
                href={`tel:${contact.phone}`}
                Icon={Phone}
                aria-label="Phone"
              />
            </div>
          </header>

          {/* Right Column: Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <Section id="about" title="About">
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                About
              </h2>
              <p className="text-slate-300">{bio}</p>
            </Section>

            {/* Education Section */}
            <Section id="education" title="Education">
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Education
              </h2>
              <div className="block p-6 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 group hover:shadow-lg hover:shadow-teal-500/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                      {education.college}
                    </p>
                  </div>
                  <div className="text-xs font-medium text-slate-300 group-hover:text-slate-100 uppercase tracking-wider whitespace-nowrap transition-colors duration-300">
                    {education.date}
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-teal-300 group-hover:text-teal-200 transition-colors duration-300">
                  CGPI: {education.cgpi}
                </p>
              </div>
            </Section>

            {/* Experience Section */}
            <Section id="experience" title="Experience">
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Experience
              </h2>
              <div>
                {experience.map((item, index) => (
                  <ExperienceCard key={index} item={item} />
                ))}
              </div>
            </Section>

            {/* Skills Section */}
            <Section id="skills" title="Skills">
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800/70 backdrop-blur-sm rounded-md transition-all duration-300 ease-in-out hover:bg-teal-400/20 hover:text-teal-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects" title="Projects">
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Projects
              </h2>
              <div>
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </Section>

            {/* Achievements Section */}
            <Section id="achievements" title="Achievements">
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Achievements
              </h2>
              <ul className="space-y-4">
                {achievements.map((ach, index) => (
                  <li key={index}>
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm transition-all duration-300 group hover:bg-slate-800/80 hover:shadow-lg hover:shadow-teal-500/50"
                    >
                      <Trophy className="h-5 w-5 mt-1 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                        {ach.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Footer */}
            <footer className="text-center text-sm text-slate-500 py-8"></footer>
          </main>
        </div>
      </div>
    </div>
  );
}
