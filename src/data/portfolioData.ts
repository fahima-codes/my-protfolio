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
  githubUrl?: string;
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
  title: string;
  institution: string;
  description: string;
  type: "education" | "training" | "work";
  status: "Running" | "Completed" | string;
  role?: string;
  organization?: string;
  location?: string;
  badge?: string;
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
    name: "Saniya Fahima",
    headline: "Full-Stack / MERN Developer",
    tagline: "Architecting high-performance web applications, scalable REST APIs, and delightful user experiences.",
    status: "Available for Hire & Freelance Projects",
    statusAvailable: true,
    location: "Sylhet, Bangladesh",
    email: "fahimasaniya8@gmail.com",
    phone: "+880 1924-018106",
    avatar: "/images/saniya.png",
    resumeUrl: "#contact",
    githubUrl: "https://github.com/fahima-codes",
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
      id: "banglanews-24",
      title: "BanglaNews-24",
      subtitle: "High-Performance Digital Media Portal with Next.js 15 & SSR",
      description: "A fast, responsive digital media publication featuring breaking news feeds, categorized journalism, editorial publishing, and optimized reading layouts.",
      detailedDescription: "Leverages Next.js 15 App Router with Server-Side Rendering (SSR) for optimal SEO and rapid page delivery. Features responsive reading layouts, breaking news tickers, editorial categories, and clean TypeScript architecture.",
      category: "Full Stack",
      tags: ["Next.js 15", "TypeScript", "Tailwind"],
      features: [
        "Server-rendered news feeds optimized for rapid search engine indexing",
        "Real-time breaking news ticker with automated update polling",
        "Categorized editorial sections (Politics, Tech, Sports, Economy)",
        "Mobile-first responsive design tailored for smooth reading"
      ],
      metrics: [
        { label: "Framework", value: "Next.js 15" },
        { label: "Rendering", value: "SSR / ISR" },
        { label: "Styling", value: "Tailwind CSS" }
      ],
      liveUrl: "https://bangla-news-24-aa-53e9.vercel.app/",
      githubUrl: "https://github.com/fahima-codes/Bangla-News-24",
      githubClient: "https://github.com/fahima-codes/Bangla-News-24",
      featured: true,
      image: "/images/banglanews.png"
    },
    {
      id: "devstack",
      title: "DevStack - Build Your Ideal Development Stack",
      subtitle: "Interactive Tech Stack Selection & Comparison Tool",
      description: "An intuitive developer toolkit to configure, compare, and assemble optimal frontend, backend, database, and tooling architectures for modern web projects.",
      detailedDescription: "Engineered with React, TypeScript, and Tailwind CSS. Features dynamic technology filtering, interactive stack comparison matrices, category breakdowns, and exportable stack configuration blueprints.",
      category: "Frontend",
      tags: ["React", "TypeScript", "Tailwind"],
      features: [
        "Interactive technology comparison across frontend, backend, and databases",
        "Faceted category filtering with real-time state management",
        "Responsive, modern user interface with dark/light visual cues",
        "Clean, type-safe codebase adhering to modular React principles"
      ],
      metrics: [
        { label: "Architecture", value: "React + TS" },
        { label: "Styling", value: "Tailwind" },
        { label: "State", value: "Reactive Hooks" }
      ],
      liveUrl: "https://flourishing-cuchufli-3f030b.netlify.app/",
      githubUrl: "https://github.com/fahima-codes/React-Assaingment-5",
      githubClient: "https://github.com/fahima-codes/React-Assaingment-5",
      featured: true,
      image: "/images/devstack.png"
    },
    {
      id: "fitlog",
      title: "FitLog - Train With Intent",
      subtitle: "Modern Fitness & Workout Tracking Application",
      description: "A dark-themed fitness companion application designed to log daily workouts, record sets and reps, track muscle group progression, and maintain training consistency.",
      detailedDescription: "Built with Next.js and Tailwind CSS. Provides an intuitive workout library, session loggers, routine builders, and comprehensive exercise tracking with responsive mobile-ready interfaces.",
      category: "Full Stack",
      tags: ["Next.js", "Fitness App"],
      features: [
        "Workout routine logger with sets, repetitions, and rest intervals",
        "Interactive exercise library covering major muscle groups",
        "Dark-mode interface optimized for gym environments",
        "Fast client navigation and resilient state persistence"
      ],
      metrics: [
        { label: "Stack", value: "Next.js" },
        { label: "Category", value: "Fitness App" },
        { label: "Design", value: "Dark Theme" }
      ],
      liveUrl: "https://my-nextjs-a6-rjtl.vercel.app/",
      githubUrl: "https://github.com/fahima-codes/my-nextjs-a6",
      githubClient: "https://github.com/fahima-codes/my-nextjs-a6",
      featured: true,
      image: "/images/fitlog.png"
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
      year: "2026 - Present",
      title: "Alim",
      institution: "Shahjalal Jamia Islamia Kamil Madrasa, Pathantula, Sylhet",
      description: "Currently studying Alim 1st Year, Arabic Department. Session 2025-26, Exam 2027.",
      type: "education",
      status: "Running"
    },
    {
      year: "2026 - Present",
      title: "Complete Web Development - Batch 14",
      institution: "Programming Hero",
      description: "Learning MERN Stack - React 19, Next.js 15, TypeScript, Node.js, MongoDB. Projects: BanglaNews-24, DevStack, FitLog.",
      type: "training",
      status: "Running"
    },
    {
      year: "2025",
      title: "Dakhil",
      institution: "Shahjalal Jamia Islamia Kamil Madrasa, Pathantula, Sylhet",
      description: "Completed Dakhil in 2025 from Bangladesh Madrasah Education Board.",
      type: "education",
      status: "Completed"
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
