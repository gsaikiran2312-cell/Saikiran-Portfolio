import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'db.json');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Initial Default Portfolio Dataset for Sai Kiran Gandhudi
const defaultPortfolioData = {
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
      period: "2025 – Present",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, JavaScript, Tailwind CSS, MongoDB, RESTful APIs, Git, and GitHub.",
      achievements: [
        "Contributed to the development of a Fleet Management System covering vehicle/driver management, trip planning, live tracking, fuel management, maintenance, document management, and fleet operations.",
        "Developed a Restaurant Management System supporting menu management, QR-based ordering, table management, kitchen operations, billing, payments, and staff workflows through role-based access control.",
        "Designed and integrated RESTful APIs for frontend-backend communication and third-party service integrations.",
        "Implemented JWT-based authentication and authorization with role-based access control to secure application workflows.",
        "Optimized MongoDB schemas and database queries to improve data retrieval and application performance.",
        "Collaborated with cross-functional teams in Agile environments, contributing to feature development, debugging, testing, code reviews, and issue resolution.",
        "Improved application performance by optimizing front-end queries, database queries, and API response times.",
        "Utilized Git/GitHub for version control, branch management, code collaboration, and deployment support."
      ],
      tech: ["React.js", "Node.js", "Express.js", "JavaScript", "Tailwind CSS", "MongoDB", "RESTful APIs", "JWT", "Git", "GitHub"]
    },
    {
      id: 2,
      role: "Java Full Stack Developer – Trainee",
      company: "J Spiders Pvt. Ltd.",
      period: "2022 – 2023",
      location: "Hyderabad, India",
      type: "Trainee",
      description: "Completed comprehensive training in Java Full Stack Development, working on backend APIs, database management, and responsive UI implementations.",
      achievements: [
        "Completed rigorous hands-on modules in Core Java, Advanced Java, JDBC, Servlets, JSP, HTML, CSS, JavaScript, and MySQL.",
        "Developed responsive web application components and handled backend API integrations.",
        "Strengthened foundational knowledge of full-stack architecture, Object-Oriented Programming (OOP), and relational database management."
      ],
      tech: ["Core Java", "Advanced Java", "JDBC", "Servlets", "JSP", "HTML", "CSS", "JavaScript", "MySQL", "REST APIs"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "FLEET MANAGEMENT SYSTEM",
      category: "Full Stack",
      tagline: "Comprehensive vehicle, trip, fuel, live tracking, and document management platform.",
      description: "Developed a full-stack Fleet Management System covering vehicle and driver management, trip planning, live tracking, fuel management, maintenance, document management, and fleet operations.",
      image: "/assets/project-dashboard.jpg",
      tags: ["Node.js", "React.js", "Express.js", "Tailwind CSS", "JavaScript", "MongoDB", "REST APIs", "Git", "GitHub"],
      githubUrl: "https://github.com/gsaikiran2312-cell",
      highlights: [
        "Vehicle & Driver Management and Trip Planning modules",
        "Live Vehicle Tracking, Fuel Management, and Maintenance Alerts",
        "Document Management, E-Way Bills, Reports & Fleet Operations Analytics",
        "JWT-based authentication & role-based authorization for Admins, Managers, Drivers, and Staff",
        "Optimized RESTful API endpoints and MongoDB data schemas for low latency retrieval"
      ]
    },
    {
      id: 2,
      title: "RESTAURANT MANAGEMENT SYSTEM",
      category: "Full Stack",
      tagline: "End-to-end dining management with QR ordering, Kitchen Display System (KDS), and staff workflows.",
      description: "Developed a full-stack Restaurant Management System for menu management, table management, QR-based ordering, order processing, billing, payments, kitchen operations, and staff workflows.",
      image: "/assets/project-ecommerce.jpg",
      tags: ["Node.js", "React.js", "Express.js", "Tailwind CSS", "JavaScript", "MongoDB", "REST APIs", "Git", "GitHub"],
      githubUrl: "https://github.com/gsaikiran2312-cell",
      rolesSupported: ["Administrator", "Manager", "Receptionist", "Waiter", "Chef", "Customer"],
      highlights: [
        "Role-Based Dashboards for Admin, Manager, Waiter, Receptionist, and Chef",
        "Menu Management, Table Management, and QR-Based Dining & Ordering",
        "Order Processing, Kitchen Display System (KDS), and Real-Time Order Tracking",
        "Billing, Payments, Coupon Processing, and Table Reservations",
        "JWT Authentication & Role-Based Access Control across Web and Mobile Waiter App integration"
      ]
    },
    {
      id: 3,
      title: "EVENT MANAGEMENT SYSTEM",
      category: "Full Stack",
      tagline: "Event scheduling, attendee registration, venue coordination, and role-based operations.",
      description: "Developed a full-stack Event Management System for event creation, attendee registration, scheduling, venue management, and event operations.",
      image: "/assets/project-ai.jpg",
      tags: ["Node.js", "React.js", "Express.js", "Tailwind CSS", "JavaScript", "MongoDB", "REST APIs", "Git", "GitHub"],
      githubUrl: "https://github.com/gsaikiran2312-cell",
      rolesSupported: ["Administrator", "Organizer", "Attendee"],
      highlights: [
        "Event Creation, Event Scheduling, and Status Management",
        "Attendee Registration and Real-Time Registration Tracking",
        "Venue Management and Event Coordination Workflows",
        "RESTful APIs with JWT Authentication and Role-Based Authorization",
        "Responsive React.js UI backed by Express.js & MongoDB"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "MASTER OF TECHNOLOGY – COMPUTER SCIENCE & ENGINEERING",
      period: "2023 – 2025",
      institution: "Anantha Lakshmi College of Engineering & Technology",
      location: "Andhra Pradesh",
      details: "Post-graduate specialization in Computer Science & Engineering with focus on Advanced Web Technologies and Software Engineering."
    },
    {
      id: 2,
      degree: "BACHELOR OF TECHNOLOGY – COMPUTER SCIENCE & ENGINEERING",
      period: "2018 – 2022",
      institution: "Malineni Lakshmiah College of Engineering & Technology",
      location: "Andhra Pradesh",
      details: "Graduate degree in Computer Science & Engineering covering core Data Structures, Database Systems, Object-Oriented Programming, and Web Development."
    },
    {
      id: 3,
      degree: "INTERMEDIATE – MPC",
      period: "2016 – 2018",
      institution: "Sri Chaitanya Junior College",
      location: "Kurnool, Andhra Pradesh",
      details: "Higher secondary education focusing on Mathematics, Physics, and Chemistry."
    },
    {
      id: 4,
      degree: "SSC",
      period: "2015 – 2016",
      institution: "Nirmala English Residential School",
      location: "Andhra Pradesh",
      details: "Secondary School Certificate with strong academic performance in Mathematics and Science."
    }
  ],
  certifications: [
    {
      title: "Certified Java Full Stack Developer",
      institution: "J Spiders, Hyderabad",
      period: "Certified"
    }
  ],
  certHighlights: [
    "Contributed to enterprise-level Event Management and Car Garage Management applications.",
    "Successfully delivered responsive full-stack modules in Agile development environments.",
    "Experienced in React.js, Node.js, Express.js, MongoDB, JWT Authentication, REST API development, Git/GitHub, and deployment support."
  ],
  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Leadership",
    "Critical Thinking"
  ],
  spokenLanguages: [
    "Telugu",
    "English",
    "Hindi"
  ],
  interests: [
    "Full Stack Development",
    "UI/UX Design",
    "Cooking",
    "Traveling",
    "Emerging Technologies"
  ]
};

// Ensure database file exists
function loadData() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(content);
    } else {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultPortfolioData, null, 2), 'utf-8');
      return defaultPortfolioData;
    }
  } catch (err) {
    console.error("Error reading database file, using fallback default:", err);
    return defaultPortfolioData;
  }
}

function saveData(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error("Error writing database file:", err);
    return false;
  }
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// GET Portfolio Data Endpoint
app.get('/api/portfolio', (req, res) => {
  const data = loadData();
  res.json({ success: true, data });
});

// PUT Update Portfolio Data Endpoint
app.put('/api/portfolio', (req, res) => {
  const newData = req.body;
  if (!newData || typeof newData !== 'object') {
    return res.status(400).json({ success: false, message: 'Invalid payload structure' });
  }

  const success = saveData(newData);
  if (success) {
    res.json({ success: true, message: 'Portfolio data updated dynamically!', data: newData });
  } else {
    res.status(500).json({ success: false, message: 'Failed to write portfolio data to database' });
  }
});

// POST Reset Portfolio Data Endpoint
app.post('/api/portfolio/reset', (req, res) => {
  const success = saveData(defaultPortfolioData);
  if (success) {
    res.json({ success: true, message: 'Portfolio reset to initial default state.', data: defaultPortfolioData });
  } else {
    res.status(500).json({ success: false, message: 'Failed to reset portfolio data' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Express Backend running on http://localhost:${PORT}`);
});
