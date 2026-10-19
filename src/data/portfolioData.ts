export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: "Full Stack" | "Frontend" | "Backend" | "MERN";
  tags: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubClient?: string;
  githubServer?: string;
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon: string;
    highlight?: boolean;
    experience: string;
  }[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  organization: string;
  location: string;
  description: string[];
  badge: string;
  type: "work" | "education" | "achievement";
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

export const portfolioData = {
  personal: {
    name: "Developer Portfolio",
    headline: "Full-Stack / MERN Developer",
    tagline: "Architecting high-performance web applications, scalable REST APIs, and delightful user experiences.",
    status: "Available for Hire & Freelance Projects",
    statusAvailable: true,
    location: "Dhaka, Bangladesh (Open to Remote Worldwide)",
    email: "developer@example.com",
    phone: "+880 1700-000000",
    resumeUrl: "#contact",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    stats: [
      { label: "MERN Stack Projects", value: "15+" },
      { label: "Client & Practice Apps", value: "25+" },
      { label: "REST APIs Designed", value: "40+" },
      { label: "Commit Consistency", value: "99%" },
    ],
    bio: [
      "I am a passionate Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. I thrive on translating complex product requirements into clean, performant, and maintainable software.",
      "With a strong foundation in both client-side interactivity and robust server-side architecture, I build secure RESTful APIs, implement authentication flows (JWT, OAuth, Better-Auth), design optimized database schemas, and create pixel-perfect responsive user interfaces.",
      "When I am not writing code, I actively explore emerging web standards, contribute to collaborative open-source projects, and optimize application performance."
    ],
    corePhilosophy: [
      {
        title: "Clean, Scalable Architecture",
        desc: "Writing modular, readable, and testable code adhering to industry best practices."
      },
      {
        title: "Performance & SEO First",
        desc: "Ensuring lightning-fast load times, optimal Core Web Vitals, and responsive layouts."
      },
      {
        title: "Security & Reliability",
        desc: "Implementing secure token-based authentication, sanitized inputs, and resilient error handling."
      }
    ]
  },

  skills: [
    {
      category: "Frontend Development",
      description: "Crafting reactive, accessible, and high-conversion web interfaces",
      skills: [
        { name: "React 19 / 18", level: 95, icon: "React", highlight: true, experience: "Primary UI Library" },
        { name: "Next.js (App Router)", level: 90, icon: "Next", highlight: true, experience: "SSR, ISR & Full-Stack" },
        { name: "TypeScript", level: 85, icon: "TypeScript", highlight: true, experience: "Type-Safe Development" },
        { name: "Tailwind CSS", level: 95, icon: "Tailwind", highlight: true, experience: "Modern Utility-First CSS" },
        { name: "JavaScript (ES6+)", level: 95, icon: "JavaScript", highlight: true, experience: "Async/Await, DOM, APIs" },
        { name: "HTML5 & Modern CSS3", level: 95, icon: "Html", highlight: false, experience: "Semantic & Accessible" },
        { name: "State Management (Redux/Zustand)", level: 85, icon: "State", highlight: false, experience: "Predictable Store Flows" }
      ]
    },
    {
      category: "Backend Development",
      description: "Engineering secure, scalable backend services and micro-architectures",
      skills: [
        { name: "Node.js", level: 92, icon: "Node", highlight: true, experience: "Event-driven runtime" },
        { name: "Express.js", level: 90, icon: "Express", highlight: true, experience: "REST API Framework" },
        { name: "RESTful API Architecture", level: 95, icon: "Api", highlight: true, experience: "CRUD, Routing, Middleware" },
        { name: "JWT & Auth Security", level: 90, icon: "Auth", highlight: true, experience: "Tokens, Cookies, Bcrypt" },
        { name: "Socket.io", level: 80, icon: "Sockets", highlight: false, experience: "Real-time communication" },
        { name: "Next.js Route Handlers", level: 88, icon: "NextApi", highlight: false, experience: "Serverless Endpoints" }
      ]
    },
    {
      category: "Databases & Storage",
      description: "Structuring, indexing, and querying relational and document data",
      skills: [
        { name: "MongoDB", level: 92, icon: "Mongo", highlight: true, experience: "NoSQL Collections & Aggregations" },
        { name: "Mongoose ODM", level: 90, icon: "Mongoose", highlight: true, experience: "Schemas, Validations & Hooks" },
        { name: "PostgreSQL basics", level: 78, icon: "Postgres", highlight: false, experience: "Relational Queries" },
        { name: "Firebase / Cloudinary", level: 85, icon: "Cloud", highlight: false, experience: "Auth & Media Storage" }
      ]
    },
    {
      category: "Tools & DevOps",
      description: "Version control, workflow efficiency, and production deployments",
      skills: [
        { name: "Git & GitHub", level: 92, icon: "Git", highlight: true, experience: "Branching, PRs, Git Flow" },
        { name: "Postman", level: 90, icon: "Postman", highlight: true, experience: "API Testing & Documentation" },
        { name: "Vercel & Render", level: 90, icon: "Deploy", highlight: false, experience: "CI/CD & Cloud Hosting" },
        { name: "VS Code & Terminal", level: 95, icon: "Terminal", highlight: false, experience: "Optimized Productivity" },
        { name: "npm / pnpm / yarn", level: 92, icon: "Npm", highlight: false, experience: "Package Management" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "bazardor-market",
      title: "BazarDor - Multivendor Marketplace",
      subtitle: "Full-Stack MERN Platform with Real-time Inventory & Order Management",
      description: "A comprehensive e-commerce marketplace empowering local vendors and buyers. Features seamless item cataloging, price tracking, secure checkout flows, and dynamic vendor dashboards.",
      detailedDescription: "Built with React, Node.js, Express, and MongoDB. Includes role-based access control (Admin, Vendor, Customer), image asset management, search filtering with pagination, and comprehensive order history tracking.",
      category: "MERN",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth"],
      features: [
        "Multi-role user authentication with JWT & HTTP-only cookies",
        "Dynamic product catalog with faceted search, category filtering & sort",
        "Vendor dashboard for inventory management and order fulfillment",
        "Responsive, mobile-optimized cart & checkout system",
        "REST API backend with comprehensive input sanitization and error handling"
      ],
      metrics: [
        { label: "Endpoints", value: "24+ APIs" },
        { label: "Performance", value: "98 Lighthouse" },
        { label: "Architecture", value: "MERN Stack" }
      ],
      liveUrl: "https://example.com/bazardor",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      featured: true,
      image: "bazardor"
    },
    {
      id: "bangla-news-portal",
      title: "Bangla News 24 - Digital Media Portal",
      subtitle: "High-Traffic News Platform with App Router & Next.js SSR",
      description: "A lightning-fast digital media publication built with Next.js, featuring breaking news ticker, categorized journalism feeds, editorial CMS, and social sharing capabilities.",
      detailedDescription: "Leverages Next.js App Router with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) for optimal SEO and instant page delivery. Uses MongoDB for article indexing and Better-Auth for editorial credentials.",
      category: "Full Stack",
      tags: ["Next.js", "React 19", "Tailwind CSS", "MongoDB", "Better-Auth", "TypeScript"],
      features: [
        "Server-rendered news feeds optimized for rapid search engine indexing",
        "Real-time breaking news ticker with automated update polling",
        "Categorized editorial sections (Politics, Tech, Sports, Economy)",
        "Editorial CMS for authoring, publishing, and archiving articles",
        "Responsive grid layout designed for mobile readability"
      ],
      metrics: [
        { label: "Rendering", value: "SSR / ISR" },
        { label: "SEO Score", value: "100/100" },
        { label: "Page Speed", value: "<0.8s FCP" }
      ],
      liveUrl: "https://example.com/banglanews",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      featured: true,
      image: "newsportal"
    },
    {
      id: "user-management-core",
      title: "UserHub - Enterprise Auth & Role Engine",
      subtitle: "Production-grade MERN User Management & Access Control",
      description: "A modular, enterprise-ready authentication and user administration system with JWT tokens, refresh token rotation, bcrypt password hashing, and role permission matrices.",
      detailedDescription: "Features a clean React client paired with an Express.js server and MongoDB. Demonstrates rock-solid CRUD mechanics, account activity logs, secure session invalidation, and custom middleware guards.",
      category: "MERN",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Bcrypt"],
      features: [
        "Full CRUD user operations with instant client UI reactivity",
        "Dual-token authentication (Access Token + Refresh Token flow)",
        "Role-Based Access Control (Admin, Moderator, Standard Member)",
        "Form validation with real-time feedback and server response alerts",
        "Audit trail tracking account creation, updates, and logins"
      ],
      metrics: [
        { label: "Security", value: "Bcrypt + JWT" },
        { label: "Validation", value: "100% Sanitized" },
        { label: "Design", value: "Dark / Light Mode" }
      ],
      liveUrl: "https://example.com/userhub",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      featured: true,
      image: "userhub"
    },
    {
      id: "dev-pulse-forum",
      title: "DevPulse - Collaborative Developer Forum",
      subtitle: "Community Discussion Platform with Markdown & Upvoting",
      description: "A community platform where developers post coding questions, share insights, upvote technical solutions, and interact with syntax-highlighted code snippets.",
      detailedDescription: "Built with React, Node.js, Express, and MongoDB. Includes markdown post creation, comment threads, user profiles with reputation points, and tag-based searching.",
      category: "Full Stack",
      tags: ["React", "Express", "Node.js", "MongoDB", "Markdown", "Tailwind CSS"],
      features: [
        "Rich markdown editor with live preview and code syntax highlighting",
        "Threaded discussions and nested reply capability",
        "Reputation system with upvoting and accepted answer badges",
        "Instant filtering by technology tags and popularity metrics",
        "User profile pages with public contribution history"
      ],
      metrics: [
        { label: "Real-time", value: "Socket Alerts" },
        { label: "Markdown", value: "Full GFMD" },
        { label: "Database", value: "Optimized Indexes" }
      ],
      liveUrl: "https://example.com/devpulse",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      featured: false,
      image: "devpulse"
    },
    {
      id: "crud-api-suite",
      title: "RapidREST - Microservice API Starter",
      subtitle: "High-Performance Express & MongoDB Backend Starter",
      description: "A clean, modular REST API boilerplate built with Node.js and Express. Features centralized error handling, custom validation middleware, Postman test suites, and MongoDB aggregation pipelines.",
      detailedDescription: "Designed as an industry-standard template for scalable microservices. Contains CORS configuration, environment variable validation, Winston logging, and comprehensive route test cases.",
      category: "Backend",
      tags: ["Node.js", "Express", "MongoDB", "Postman", "REST API", "Clean Architecture"],
      features: [
        "Modular MVC architecture (Models, Controllers, Routes, Middleware)",
        "Centralized error handling middleware with custom AppError class",
        "Production-ready environment config and MongoDB connection pooling",
        "Complete Postman collection with automated test scripts",
        "Rate limiting, Helmet HTTP security headers, and CORS rules"
      ],
      metrics: [
        { label: "Architecture", value: "MVC Pattern" },
        { label: "Test Coverage", value: "Postman Suite" },
        { label: "Response", value: "<15ms avg" }
      ],
      liveUrl: "https://example.com/rapidrest",
      githubClient: "https://github.com",
      githubServer: "https://github.com",
      featured: false,
      image: "api"
    }
  ] as Project[],

  services: [
    {
      icon: "Code2",
      title: "Full-Stack Web Apps",
      description: "End-to-end web applications built from scratch using the MERN stack or Next.js, engineered for high responsiveness, SEO, and user engagement.",
      features: ["Single Page Applications (SPA)", "Server-Side Rendered (SSR) Portals", "Responsive Mobile-First UI", "Tailwind CSS Design Systems"]
    },
    {
      icon: "Server",
      title: "RESTful API Engineering",
      description: "Robust, well-documented backend microservices and REST APIs with secure authentication, parameter validation, and rate limiting.",
      features: ["Express & Node.js Routing", "JWT & Session Auth Workflows", "Third-party API Integrations", "Postman API Collections"]
    },
    {
      icon: "Database",
      title: "Database Modeling & Querying",
      description: "Optimized database schema design with MongoDB and Mongoose, focusing on data integrity, fast indexing, and clean relationship modeling.",
      features: ["Schema Architecture & Validation", "Aggregation Pipelines", "Indexing & Query Optimization", "Data Migration & Seeding"]
    },
    {
      icon: "Zap",
      title: "Performance & Code Refactoring",
      description: "Auditing existing codebases to eliminate bottlenecks, boost Core Web Vitals, improve accessibility, and modernize legacy frontends.",
      features: ["Component Tree Optimization", "Bundle Size Reduction", "Lighthouse 95+ Audit Passing", "Clean Architecture Refactoring"]
    }
  ] as ServiceItem[],

  timeline: [
    {
      year: "2024 - Present",
      role: "Full-Stack / MERN Developer",
      organization: "Independent & Open Source Projects",
      location: "Dhaka, Bangladesh",
      description: [
        "Developing scalable MERN web applications, e-commerce solutions, and digital publishing platforms.",
        "Architecting RESTful APIs using Express, Node.js, and MongoDB with secure token-based authentication.",
        "Building modern responsive user interfaces with Next.js App Router, React 19, and Tailwind CSS."
      ],
      badge: "Full-Stack Development",
      type: "work"
    },
    {
      year: "2023 - 2024",
      role: "Specialized Full-Stack Web Development Program",
      organization: "MERN Stack Professional Certification",
      location: "Online / Practical Academy",
      description: [
        "Completed rigorous hands-on curriculum covering JavaScript ES6+, React, Node.js, Express, MongoDB, and Git.",
        "Delivered over 12 comprehensive milestone assignments and collaborative team projects.",
        "Mastered state management, async programming, database indexing, and deployment pipelines."
      ],
      badge: "MERN Certification",
      type: "education"
    },
    {
      year: "2020 - 2024",
      role: "Bachelor's Studies in Computer Science / Engineering",
      organization: "University Studies",
      location: "Bangladesh",
      description: [
        "Studied Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Software Engineering principles.",
        "Active participant in programming problem solving and developer communities."
      ],
      badge: "Academic Foundation",
      type: "education"
    }
  ] as ExperienceItem[],

  faqs: [
    {
      question: "What is your primary technology stack?",
      answer: "My primary specialization is the MERN stack (MongoDB, Express.js, React, Node.js) alongside Next.js (App Router), TypeScript, and Tailwind CSS for modern production applications."
    },
    {
      question: "Are you available for full-time or contract roles?",
      answer: "Yes! I am actively looking for full-time junior/mid Full-Stack or MERN Developer positions, as well as freelance and contract software engineering opportunities worldwide."
    },
    {
      question: "How do you handle backend security and authentication?",
      answer: "I implement industry-standard best practices: bcrypt password hashing with salt rounds, signed JWTs (access and refresh token patterns), HTTP-only cookies, input sanitization, and CORS protections."
    },
    {
      question: "Can you collaborate on existing teams and codebases?",
      answer: "Absolutely. I follow Git Flow, write clean commit messages, create descriptive pull requests, adhere to ESLint/Prettier rules, and write self-documenting code."
    }
  ]
};
