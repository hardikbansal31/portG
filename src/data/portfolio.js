export const portfolioData = {
  name: "Hardik Bansal",
  title: "Backend Developer",
  location: "Mumbai, India",
  bio: "Pre-final year Computer Engineering student (GPA 9.38) at TCET Mumbai. I build scalable backend systems — distributed video pipelines, real-time APIs, and full-stack applications — using Node.js, Java, Redis, and Docker. Currently exploring system design and backend infrastructure.",
  contact: {
    email: "bansalhardik31@gmail.com",
    github: "https://github.com/hardikbansal31",
    linkedin: "https://www.linkedin.com/in/hardikbansal31/",
    phone: "9326748670",
    resume: "#",
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
      text: "Finalist in Statathon hackathon by MoSPI (Ministry of Statistics, Govt. of India).",
      link: "#",
    },
    {
      text: "Promoted to Vice Chairperson, GFG-TCET Student Chapter.",
      link: "#",
    },
  ],
  experience: [
    {
      role: "AI & Full Stack Developer Intern",
      company: "F1Jobs.io",
      date: "Dec 2025 – Jan 2026",
      description: [
        "Built 5+ workflow automations using n8n, reducing manual client operations effort by an estimated 60%.",
        "Developed and deployed 3 production-ready responsive portfolio websites for clients.",
        "Collaborated asynchronously with mentors across time zones, consistently delivering features within sprint deadlines.",
      ],
    },
    {
      role: "Vice Chairperson",
      company: "GeeksForGeeks Student Chapter TCET",
      date: "Jun 2025 – Present",
      description: [
        "Leading a chapter of 20+ members, coordinating technical events and club operations.",
        "Hosted coding competitions, webinars, and seminars with speakers from top companies like Flipkart and Google.",
        "Prepared an online quiz bank with 400+ questions for competitive programming assessments.",
      ],
    },
    {
      role: "Technical Team Member",
      company: "S.O.R.T Club of TCET",
      date: "Oct 2024 – Jun 2025",
      description: [
        "Built and maintained infrastructure for 10+ webinars, coding contests, and assessments supporting 200+ participants.",
        "Rebuilt the S.O.R.T Club website in React.js, improving page load speed by ~40% and modernising the UI.",
      ],
    },
  ],
  skills: {
    Languages: ["Java", "JavaScript", "Python"],
    "Frameworks & Libraries": [
      "Node.js",
      "Spring Boot",
      "React.js",
      "Next.js",
      "Express",
      "Socket.IO",
      "BullMQ",
    ],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Redis"],
    "Tools & Platforms": [
      "Docker",
      "Docker Compose",
      "FFmpeg",
      "Git & GitHub",
      "Postman",
      "Linux",
      "n8n",
      "REST APIs",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  projects: [
    {
      title: "LedgerFlow – High-Concurrency Banking Core & Distributed Ledger",
      description:
        "High-performance double-entry accounting engine ensuring atomic ledger integrity with immutable (DEBIT/CREDIT) transaction rows. Engineered a sophisticated three-layer concurrency strategy—integrating Redisson distributed locks, pessimistic SQL locking, and JPA optimistic versioning—to eliminate race conditions and double-spending. Features enterprise-grade security with JWT/Redis token revocation, Quartz-automated recurring payments, and deep system observability via custom Micrometer metrics and Spring Actuator.",
      technologies: [
        "Java 21",
        "Spring Boot",
        "MySQL",
        "Redis",
        "Redisson",
        "Quartz",
        "Micrometer",
        "JWT",
        "React",
        "Vite",
      ],
      link: "https://github.com/hardikbansal31/banking-ledger",
    },
    {
      title: "ClassStream – Distributed Video Encoding & Streaming Platform",
      description:
        "Distributed video encoding pipeline supporting adaptive HLS streaming at 720p/480p/360p. Asynchronous job architecture with Redis + BullMQ workers keeps API response times under 100ms during CPU-intensive encoding. Real-time progress updates via Socket.IO eliminate client-side polling. Full multi-service stack containerised with Docker Compose.",
      technologies: [
        "Node.js",
        "Express",
        "React",
        "MySQL",
        "Redis",
        "BullMQ",
        "FFmpeg",
        "Socket.IO",
        "Docker",
      ],
      link: "https://github.com/hardikbansal31/sih25-dash",
    },
    {
      title: "Smart City Website",
      description:
        "OpenStreetMap & OpenRoute service APIs provide real-time routing and live location tracking. Features traffic analytics for major junctions in Mumbai and includes a downloadable Android app.",
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "Express",
        "OpenStreetMap API",
      ],
      link: "https://github.com/hardikbansal31/SmartCity",
      live: "https://smart-city-pi-five.vercel.app/",
    },
    {
      title: "Task Assignment App",
      description:
        "Full-stack application with role-based access control (Admin/User) and secure REST APIs using JWT authentication. Entire stack containerised with Docker for easy deployment.",
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
      title: "News Aggregation Platform",
      description:
        "Full-stack news aggregation platform fetching and normalising articles from 10+ RSS feeds. Redis caching reduces redundant fetches by ~70%. REST APIs serve paginated news with average response time under 80ms with cache warm.",
      technologies: [
        "Node.js",
        "Express",
        "SQLite",
        "Redis",
        "RSS Parser",
        "React",
        "Axios",
      ],
      link: "https://github.com/hardikbansal31/news",
    },
    {
      title: "S.O.R.T Club Website",
      description:
        "Official club website built during my tenure as Technical Team Member. Migrated from a static HTML/CSS/JS setup to a modern React application.",
      technologies: ["React", "JavaScript", "Bootstrap"],
      link: "https://github.com/hardikbansal31/sort",
      live: "https://sort-mauve-zeta.vercel.app/",
    },
  ],
};
