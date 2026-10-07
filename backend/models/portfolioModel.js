export const defaultPortfolioData = {
  personalDetails: {
    name: "SAI KIRAN GANDHUDI",
    role: "Full Stack Developer | MERN Stack Developer",
    tagline: "Full Stack Developer with 1.6 years of experience building scalable web applications using React.js, Node.js, Express.js, JavaScript, MongoDB, HTML, CSS, and RESTful APIs.",
    bio: "Full Stack Developer with 1.6 years of experience in developing scalable web applications using React.js, Node.js, Express.js, JavaScript, MongoDB, HTML, CSS, and RESTful APIs. Experienced in building enterprise applications including Fleet Management, Restaurant Management, and Event Management systems, with expertise in role-based authentication, API development, database management, responsive UI development, and application performance optimization. Strong understanding of full-stack development, Agile methodologies, Git/GitHub, and end-to-end application development.",
    location: "Andhra Pradesh, India",
    status: "Full Stack / MERN Developer • 1.6+ Years Exp",
    avatar: "/assets/avatar.jpg",
    email: "gsaikiran2312@gmail.com",
    phone: "+91 6302241083",
    github: "https://github.com/gsaikiran2312-cell",
    linkedin: "https://linkedin.com/in/saikiran-gandhudi",
    resumeUrl: "#contact"
  },
  aboutHighlights: [
    "1.6+ Years Experience",
    "Full Stack Development",
    "REST API Development",
    "MongoDB Database",
    "Role-Based Authentication",
    "Responsive UI (Tailwind)",
    "Agile Development"
  ],
  stats: [
    { id: 1, label: "Years of Experience", value: "1.6+", icon: "Clock" },
    { id: 2, label: "Enterprise Projects", value: "3+", icon: "Code2" },
    { id: 3, label: "Core Stack", value: "MERN", icon: "Layers" },
    { id: 4, label: "API & DB Reliability", value: "100%", icon: "Zap" }
  ],
  skillCategories: [
    { id: "languages", title: "Languages", icon: "Code", skills: ["Java", "JavaScript", "HTML", "CSS"] },
    { id: "frontend", title: "Frontend", icon: "Layout", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Web Design"] },
    { id: "backend", title: "Backend", icon: "Server", skills: ["Node.js", "Express.js", "RESTful APIs", "MVC Architecture"] },
    { id: "databases", title: "Databases", icon: "Database", skills: ["MongoDB", "SQL (Basics)"] },
    { id: "tools", title: "Tools & IDEs", icon: "Wrench", skills: ["Git & GitHub", "Antigravity IDE", "Eclipse IDE", "VS Code"] },
    { id: "core", title: "Core Concepts", icon: "Cpu", skills: ["OOP", "Data Structures", "API Integration", "Database Management", "SDLC", "Performance Optimization", "Version Control"] },
    { id: "uiux", title: "UI/UX Design", icon: "Palette", skills: ["Figma", "Wireframing", "Prototyping", "User Flows", "Sitemap Design", "Responsive UI Design", "UX Research Basics"] }
  ],
  workExperience: [
    {
      id: 1,
      role: "Associate Software Engineer",
      company: "Speshway Solutions Pvt. Ltd.",
      type: "Full-Time",
      period: "Jul 2024 – Present",
      location: "Hyderabad, India",
      description: "Developing scalable full-stack enterprise web applications utilizing React.js, Node.js, Express.js, MongoDB, and RESTful APIs with role-based authentication.",
      achievements: [
        "Architected role-based authorization and modular RESTful API endpoints for multi-tenant enterprise platforms.",
        "Built responsive user interfaces with React.js and Tailwind CSS, reducing DOM render bottlenecks.",
        "Optimized MongoDB database indexing and query pipelines, improving API response speeds by 35%."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Fleet Management System",
      category: "Enterprise Full Stack",
      tagline: "Comprehensive logistics, vehicle tracking, driver allocation, and maintenance platform.",
      description: "An enterprise-grade fleet management application engineered for real-time vehicle dispatching, driver scheduling, maintenance tracking, and route analytics. Integrated JWT role-based access control for Admins, Managers, and Drivers.",
      rolesSupported: ["System Admin", "Fleet Manager", "Driver / Operator"],
      highlights: [
        "Built modular Express REST APIs for vehicle inventory and driver status management.",
        "Designed responsive dashboard analytics using React and Tailwind CSS.",
        "Implemented JWT authentication with role-scoped middleware."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/gsaikiran2312-cell/Fleet-Management-System",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Restaurant Management System",
      category: "Enterprise Full Stack",
      tagline: "End-to-end POS, digital menu ordering, table reservation, and inventory management.",
      description: "A full-featured restaurant automation suite supporting real-time order processing, kitchen display views, table management, and daily revenue reporting. Powered by Express REST endpoints and MongoDB.",
      rolesSupported: ["Restaurant Admin", "Cashier / POS", "Kitchen Staff"],
      highlights: [
        "Developed interactive menu catalog and cart ordering system.",
        "Built real-time order state transition handlers in Express.js.",
        "Configured MongoDB database models for daily sales aggregation."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/gsaikiran2312-cell/Restaurant-management-system",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Event Management System",
      category: "Enterprise Full Stack",
      tagline: "SaaS platform for event registration, ticket booking, attendee management, and schedule planning.",
      description: "A multi-tenant event organization platform enabling users to create public events, sell tickets, manage attendee lists, and track check-in status. Includes responsive UI and secure backend API workflows.",
      rolesSupported: ["Event Organizer", "Attendee / Guest", "Check-in Staff"],
      highlights: [
        "Built attendee registration REST endpoints with email notification placeholders.",
        "Designed clean event timeline and speaker schedule components in React.",
        "Integrated search and quantitative filtering across active events."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/gsaikiran2312-cell/Event-Management-System",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "JNTU Hyderabad University affiliated College",
      period: "2020 – 2024",
      location: "Telangana, India",
      details: "Graduated with strong foundations in Data Structures, Algorithms, Software Engineering, Database Management Systems, and Object-Oriented Programming."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Full Stack Java / MERN Web Development Certification",
      institution: "Naresh i Technologies",
      period: "2024",
      details: "Comprehensive hands-on training in Java, React.js, Node.js, Express.js, MongoDB, JavaScript, HTML5, CSS3, and REST API development."
    }
  ],
  certHighlights: [
    "Certified in Full Stack MERN & Java Development.",
    "Built multiple production-ready capstone enterprise projects.",
    "Mastered asynchronous JavaScript, state management, and API design."
  ],
  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Agile Development",
    "Continuous Learning",
    "Code Optimization",
    "Technical Documentation"
  ],
  spokenLanguages: ["English", "Telugu", "Hindi"],
  interests: ["Building Enterprise Web Apps", "Open Source", "UI/UX Design", "Tech Blogging"]
};

export const validatePortfolioData = (data) => {
  if (!data || typeof data !== 'object') {
    return { isValid: false, message: 'Payload must be a valid JSON object' };
  }
  return { isValid: true };
};
