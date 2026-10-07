export const defaultPortfolioData = {
  personalDetails: {
    name: "GANDHUDI SAI KIRAN",
    brandLogo: "GSK",
    role: "Full Stack Developer",
    secondaryRole: "MERN Stack Developer at Speshway Solutions Pvt. Ltd.",
    tagline: "Building scalable, responsive, and user-focused web applications with modern technologies.",
    heroDescription: "I'm a Full Stack Developer focused on building reliable, responsive, and user-friendly applications using modern frontend, backend, and database technologies.",
    status: "FULL STACK DEVELOPER",
    experience: "1.6+ Years Exp",
    primaryTech: ["React.js", "Node.js", "Express.js", "MongoDB", "Java", "Spring Boot"],
    location: "Andhra Pradesh, India",
    avatar: "/assets/avatar.jpg",
    email: "gsaikiran2312@gmail.com",
    phone: "+91 6302241083",
    github: "https://github.com/gsaikiran2312-cell",
    linkedin: "https://linkedin.com/in/saikiran-gandhudi",
    resumeUrl: "#contact"
  },
  aboutData: {
    heading: "About Me",
    paragraphs: [
      "I'm a Full Stack Developer passionate about building modern, scalable, and user-focused web applications.",
      "I specialize in developing end-to-end applications using React.js, Node.js, Express.js, MongoDB, Java, and Spring Boot. I enjoy transforming business requirements into clean, efficient, and responsive digital solutions.",
      "I have hands-on experience working on real-world applications including Restaurant Management, Fleet Management, Event Management, and Multi-Tenant SaaS platforms.",
      "I focus on writing maintainable code, creating intuitive user experiences, integrating REST APIs, managing databases, and building reliable application workflows."
    ],
    stats: [
      { value: "1.6+", label: "Years Experience" },
      { value: "4+", label: "Real-World Projects" },
      { value: "Full Stack", label: "Development" },
      { value: "MERN + Java", label: "Technology Stack" }
    ]
  },
  skillCategories: [
    {
      id: "frontend",
      title: "Frontend",
      icon: "Layout",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive Design"]
    },
    {
      id: "backend",
      title: "Backend",
      icon: "Server",
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "JWT Authentication", "Socket.IO"]
    },
    {
      id: "database",
      title: "Database",
      icon: "Database",
      skills: ["MongoDB", "MySQL", "Oracle SQL"]
    },
    {
      id: "tools",
      title: "Tools & Environment",
      icon: "Wrench",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Vite", "Cloudinary"]
    }
  ],
  workExperience: [
    {
      id: 1,
      company: "SPESHWAY SOLUTIONS PVT. LTD.",
      position: "MERN Stack Developer",
      duration: "August 2025 – Present",
      location: "Hyderabad, India",
      type: "Full-Time",
      description: "Developing and maintaining full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      responsibilities: [
        "Develop responsive and reusable React.js components.",
        "Build RESTful APIs using Node.js and Express.js.",
        "Design and manage MongoDB data models.",
        "Implement authentication and authorization using JWT.",
        "Integrate frontend applications with backend APIs.",
        "Develop role-based dashboards and business workflows.",
        "Debug, test, and optimize application performance.",
        "Collaborate with development and QA teams to resolve issues.",
        "Manage source code using Git and GitHub.",
        "Work with production deployments and cloud-based services."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Git", "Cloudinary"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Fleet Management System",
      category: "Full Stack Web Application",
      subtitle: "Centralized Logistics & Real-Time Tracking Platform",
      description: "A comprehensive fleet management platform designed to help organizations manage vehicles, drivers, trips, fuel, maintenance, documents, expenses, and real-time vehicle tracking from a centralized dashboard.",
      keyFeatures: [
        "Vehicle Management",
        "Driver Management",
        "Trip Management",
        "Live Vehicle Tracking",
        "Fuel Management",
        "Maintenance Management",
        "Document Management",
        "E-Way Bill Management",
        "Reports & Analytics",
        "Driver & Vehicle Assignment",
        "Dashboard Analytics"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary"],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary"],
      githubUrl: "https://github.com/gsaikiran2312-cell/Fleet-Management-System",
      demoUrl: "https://github.com/gsaikiran2312-cell/Fleet-Management-System",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      problem: "Logistics companies face disorganization tracking fleet assets, driver assignments, trip logs, and fuel logs manually.",
      solution: "A unified, multi-module MERN dashboard providing live WebSockets tracking, automated trip dispatches, and document expiry alerts.",
      myContribution: "Architected Express REST API endpoints, designed MongoDB schemas, built role-scoped dashboards in React with Cloudinary document storage."
    },
    {
      id: 2,
      title: "Flavora Kitchen",
      category: "Restaurant Management System",
      subtitle: "Complete Dining & Kitchen Operations Platform",
      description: "A complete restaurant management platform designed to streamline restaurant operations from customer ordering to kitchen processing, payment, table management, and administration.",
      isWebMobile: true,
      keyFeatures: [
        "QR-Based Table Ordering",
        "Menu Management",
        "Table Management",
        "Kitchen Display System (KDS)",
        "Waiter Dashboard",
        "Manager Dashboard",
        "Order Management",
        "Coupon & Discount Management",
        "GST Billing",
        "Payment Management",
        "Real-Time Order Tracking",
        "Staff Attendance",
        "Restaurant Analytics"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Flutter", "Socket.IO", "Cloudinary"],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Flutter", "Socket.IO", "Cloudinary"],
      githubUrl: "https://github.com/gsaikiran2312-cell/Restaurant-management-system",
      demoUrl: "https://github.com/gsaikiran2312-cell/Restaurant-management-system",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      problem: "Traditional dining experiences suffer from slow ordering, miscommunicated kitchen tickets, and delayed billing.",
      solution: "Instant QR table dining catalog, real-time Kitchen Display System (KDS), and mobile waiter app integration for rapid order processing.",
      myContribution: "Developed React ordering UI, built Node.js order state machine, implemented Socket.IO live order feeds for kitchen and cashier views."
    },
    {
      id: 3,
      title: "Multi-Tenant SaaS Car Garage Platform",
      category: "Enterprise Full Stack SaaS",
      subtitle: "Automobile Service & Workshop Platform",
      description: "A multi-tenant SaaS platform designed for automobile service centers to manage customers, vehicles, services, employees, appointments, and business operations through a centralized system.",
      keyFeatures: [
        "Multi-Tenant Architecture",
        "Customer Management",
        "Vehicle Management",
        "Service Management",
        "Appointment Management",
        "Role-Based Access Control",
        "Dashboard Analytics",
        "Authentication & Authorization"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/gsaikiran2312-cell",
      demoUrl: "https://github.com/gsaikiran2312-cell",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop",
      problem: "Car repair centers struggle with tenant data isolation, customer service tracking, and job allocation.",
      solution: "Multi-tenant isolated database architecture where workshop admins manage appointments, mechanics, and customer job sheets securely.",
      myContribution: "Designed multi-tenant middleware, built JWT role-based access controllers, created service catalog interfaces."
    },
    {
      id: 4,
      title: "Event Management System",
      category: "Full Stack Web Application",
      subtitle: "Event Discovery & Registration Platform",
      description: "A full-stack event management application that enables users to discover, organize, and manage events through an intuitive web interface.",
      keyFeatures: [
        "Event Creation",
        "Event Registration",
        "User Authentication",
        "Event Management",
        "Organizer Dashboard",
        "REST API Integration",
        "Responsive UI"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/gsaikiran2312-cell/Event-Management-System",
      demoUrl: "https://github.com/gsaikiran2312-cell/Event-Management-System",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      problem: "Event hosts require a straightforward portal for attendee registration and real-time headcounts.",
      solution: "Clean event scheduling portal with user authentication, ticket registration workflows, and organizer status dashboards.",
      myContribution: "Created responsive event listing cards, built MongoDB registration controllers, integrated REST API calls."
    }
  ],
  servicesData: [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Building complete web applications from frontend interfaces to backend APIs and databases."
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Creating responsive, modern, and reusable interfaces using React.js and modern CSS frameworks."
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing secure and scalable REST APIs using Node.js, Express.js, Java, and Spring Boot."
    },
    {
      id: 4,
      title: "Database Development",
      description: "Designing efficient data models and working with MongoDB, MySQL, and Oracle SQL."
    },
    {
      id: 5,
      title: "API Integration",
      description: "Building and integrating REST APIs with authentication, validation, and role-based access."
    },
    {
      id: 6,
      title: "Real-Time Applications",
      description: "Implementing real-time features using WebSockets and Socket.IO for live updates and tracking."
    }
  ],
  whyWorkWithMe: [
    {
      number: "01",
      title: "Real-World Experience",
      description: "Hands-on experience building and maintaining production-oriented applications."
    },
    {
      number: "02",
      title: "Full Stack Expertise",
      description: "Comfortable working across frontend, backend, database, and API layers."
    },
    {
      number: "03",
      title: "Business-Focused Development",
      description: "Focused on understanding business requirements and converting them into practical software solutions."
    },
    {
      number: "04",
      title: "Problem Solving",
      description: "Strong interest in debugging, optimizing applications, and solving real-world technical challenges."
    },
    {
      number: "05",
      title: "Continuous Learning",
      description: "Continuously improving development skills and exploring modern tools and technologies."
    }
  ]
};

export const validatePortfolioData = (data) => {
  if (!data || typeof data !== 'object') {
    return { isValid: false, message: 'Payload must be a valid JSON object' };
  }
  return { isValid: true };
};
