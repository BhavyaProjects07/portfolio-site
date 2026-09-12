export const PERSONAL_INFO = {
  name: "Bhavya Sharma",
  title: "Freelance Full Stack Developer & SEO Specialist",
  status: "Available for freelance projects & client contracts",
  location: "Dehradun, Uttarakhand, India",
  timezone: "IST (UTC +05:30)",
  email: "bs4434t@gmail.com",
  phone: "+91 84456 95011",
  linkedin: "https://www.linkedin.com/in/bhavya-sharma-b3417935",
  github: "https://github.com/BhavyaProjects07",
  instagram: "https://instagram.com/bhavya.projects",
  education: {
    degree: "BTech in CSE AI&ML",
    university: "DIT University",
    date: "August 2024",
    location: "Dehradun, Uttarakhand, India"
  },
  shortBio:
    "Full Stack Developer specializing in Next.js, React.js, Django, PostgreSQL, and Advanced Search Engine Optimization (SEO), with hands-on experience building scalable web applications, AI-powered solutions, and e-commerce platforms. Currently building full-stack products, freelancing, and developing Smart Tap System, an AI SaaS startup.",
  positioning:
    "Full Stack Developer specializing in Next.js, React.js, Django, PostgreSQL, Advanced Search Engine Optimization (SEO), AI-powered applications, scalable web applications, e-commerce platforms, and production-ready systems."
};

export const PROJECTS = [
  {
    id: "smart-tap-system",
    name: "Smart Tap System",
    category: "AI SaaS Platform",
    tagline: "Intelligent table management & real-time restaurant operations platform",
    description:
      "An AI-powered SaaS platform developed collaboratively with a team to modernize hospitality operations. Features real-time table monitoring, automated guest service requests, intelligent workflow distribution, and responsive dashboard analytics built with Next.js.",
    liveUrl: "https://smart-tap-system.vercel.app/",
    previewImage: "/projects/smart-tap.jpg",
    featured: true,
    role: "Full Stack Developer (Ongoing AI Startup)",
    timeline: "April 2026 – Present",
    stack: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "AI Integration", "Vercel"],
    deliverables: [
      "Real-time monitoring dashboard for table states & guest requests",
      "AI-driven workflow handling & automated staff dispatching",
      "High-performance Next.js App Router frontend",
      "Scalable multi-tenant SaaS architecture"
    ],
    architecture: {
      frontend: "Next.js App Router with responsive Tailwind UI",
      backend: "Serverless Route Handlers & State Management",
      aiOrSpecial: "AI service request triage and dynamic state synchronization"
    },
    highlights: [
      "Designed and implemented high-density operational dashboards for rapid table oversight",
      "Built resilient client-server interaction patterns for instant status updates",
      "Architected responsive mobile and tablet layouts for restaurant floor staff",
      "Integrated robust business workflows built for high-concurrency peak dining hours"
    ],
    accentColor: "emerald"
  },
  {
    id: "shubh-value-cart",
    name: "Shubh Value Cart",
    category: "Scalable E-commerce Web Application",
    tagline: "High-performance grocery & daily-essentials retail platform with structured SEO",
    description:
      "A production e-commerce web platform engineered for seamless grocery shopping, real-time product discovery, secure checkout workflows, and comprehensive Search Engine Optimization. Extensive work focused on Google Search Console indexing, JSON-LD product schemas, and lightning-fast page speed.",
    liveUrl: "https://www.shubhavaluecart.in/",
    previewImage: "/projects/shubh-cart.jpg",
    featured: true,
    role: "Full Stack Developer & SEO Engineer",
    timeline: "2025",
    stack: ["Next.js", "React.js", "PostgreSQL", "Tailwind CSS", "Structured Data / JSON-LD", "Google Search Console"],
    deliverables: [
      "Search-optimized product catalog with instant category filtering",
      "End-to-end shopping cart and multi-item order pipeline",
      "Custom structured data (Product, Offer, Breadcrumb) for rich search snippets",
      "Production deployment with automated caching & Core Web Vitals tuning"
    ],
    architecture: {
      frontend: "Next.js with Server Components for instantaneous initial page loads",
      backend: "RESTful API routes for inventory and cart transactions",
      database: "Relational PostgreSQL database for product catalogs and transactions",
      seoOrSpecial: "Search Engine Optimization with Schema.org JSON-LD and Core Web Vitals"
    },
    highlights: [
      "Engineered automated search-engine indexing strategies with structured schemas",
      "Optimized Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) under 1.2s",
      "Constructed frictionless multi-step shopping checkout with state recovery",
      "Implemented responsive mobile catalog with instant live search debounce"
    ],
    seoFocus: [
      "Product & Offer JSON-LD schema generation",
      "Dynamic XML sitemaps and breadcrumb trails",
      "Google Search Console crawl budget optimization",
      "Core Web Vitals 95+ score on mobile"
    ],
    accentColor: "sky"
  },
  {
    id: "darkcore-ai",
    name: "DarkCore AI",
    category: "AI SaaS Application",
    tagline: "Intelligent document parsing, audio transcription & content generation pipeline",
    description:
      "A full-stack AI SaaS application leveraging Google Gemini APIs to analyze unstructured documents, generate executive summaries, perform multimodal media analysis, and provide automated text-to-speech audio outputs.",
    liveUrl: "https://dark-core-ai.vercel.app/",
    previewImage: "/projects/darkcore-ai.jpg",
    featured: true,
    role: "Sole Full Stack Developer",
    timeline: "2024",
    stack: ["Next.js", "React.js", "Google Gemini API", "Tailwind CSS", "Node.js API Routes", "Edge Runtime"],
    deliverables: [
      "Multimodal document processing and automated extraction pipeline",
      "Secure backend proxy for Google GenAI API key isolation",
      "Interactive audio playback synthesizer for generated summaries",
      "Responsive workspace with history cache and markdown renderer"
    ],
    architecture: {
      frontend: "Next.js App Router client components with optimistic UI states",
      backend: "Server-side Next.js route handlers strictly isolating Gemini credentials",
      aiOrSpecial: "Google Gemini 2.5 Flash multimodal models for text and vision extraction"
    },
    highlights: [
      "Built resilient streaming and structured JSON extraction prompts for complex documents",
      "Designed clean dark-mode interface with zero visual latency during AI processing",
      "Integrated browser-native synthesis and audio export for processed briefs",
      "Implemented strict rate-limiting and input sanitization to guard model tokens"
    ],
    accentColor: "indigo"
  },
  {
    id: "frost-and-wayne",
    name: "Frost & Wayne",
    category: "Luxury E-commerce Showcase",
    tagline: "Bespoke fashion storefront featuring modern editorial aesthetics & catalog design",
    description:
      "An upscale e-commerce storefront crafted for premium fashion apparel. Features fluid editorial typography, high-resolution imagery optimization, streamlined lookbook navigation, and high-converting product pages.",
    liveUrl: "https://www.frostwayne.shop/",
    previewImage: "/projects/frost-wayne.jpg",
    featured: true,
    role: "Frontend Architect & Designer",
    timeline: "2024",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Lucide Icons", "Vercel"],
    deliverables: [
      "Editorial product showcase with micro-interactions",
      "Responsive fashion lookbook grid and category browsing",
      "Instant slide-over bag and order intent capture",
      "Cross-browser performance optimization"
    ],
    architecture: {
      frontend: "Next.js modern UI with responsive media optimization",
      backend: "Serverless client-side state with local persistence",
      aiOrSpecial: "Editorial aesthetic styling and typography pairing"
    },
    highlights: [
      "Engineered bespoke fashion catalog with seamless image galleries",
      "Crafted mobile-optimized touch navigation with gesture support",
      "Optimized high-resolution image delivery via Next.js asset pipeline"
    ],
    accentColor: "slate"
  }
];

export const EXPERIENCES = [
  {
    id: "smart-tap-system",
    role: "Full Stack Developer",
    company: "Smart Tap System (AI SaaS Startup)",
    type: "Collaborative Startup Team",
    period: "April 2026 – Present",
    location: "Remote / Dehradun, India",
    summary:
      "Developing an AI-powered SaaS platform collaboratively with an agile engineering team to revolutionize restaurant table operations and customer service automation.",
    responsibilities: [
      "Building scalable frontend interfaces in Next.js App Router and React.js",
      "Designing responsive table-dispatch dashboards and real-time order tracking views",
      "Integrating Gemini AI capabilities for automated staff triage and service request routing",
      "Architecting state management solutions for multi-device synchronization across restaurant floor staff",
      "Collaborating closely with team members on code reviews, API schemas, and deployment pipelines"
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "Google Gemini API", "Vercel", "REST APIs"],
    liveUrl: "https://smart-tap-system.vercel.app/"
  },
  {
    id: "freelance-fullstack",
    role: "Full Stack Development & SEO Specialist",
    company: "Freelance",
    type: "Independent Client Engagements",
    period: "September 2025 – Present",
    location: "Dehradun, Uttarakhand, India & Remote",
    summary:
      "Built and deployed full-stack web applications using Next.js, React.js, Django, and PostgreSQL. Delivered scalable business and e-commerce solutions with custom API integration, advanced SEO optimization, and cloud deployment.",
    responsibilities: [
      "Engineered end-to-end web applications from database schema to responsive frontend",
      "Delivered production e-commerce platforms (Shubh Value Cart, Frost & Wayne) with payment and cart flows",
      "Implemented Advanced Search Engine Optimization (SEO), Google Search Console indexing, and Schema.org structured data",
      "Built secure backend REST APIs with Python, Django, and Node.js connected to PostgreSQL",
      "Deployed, managed, and monitored web applications on cloud infrastructure"
    ],
    technologies: ["Next.js", "React.js", "Django", "PostgreSQL", "Python", "REST APIs", "Search Engine Optimization (SEO)", "Cloud Deployment"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend Engineering",
    description: "Building fast, accessible, and responsive user interfaces with modern frameworks",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced", context: "Server Components, Route Handlers, SEO, edge caching", highlight: true },
      { name: "React.js", level: "Advanced", context: "State architecture, custom hooks, performance tuning", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", context: "Modern asynchronous patterns, DOM, event loops" },
      { name: "Tailwind CSS", level: "Advanced", context: "Utility-first systems, responsive design, dark/light themes" },
      { name: "HTML5 & Semantic Markup", level: "Expert", context: "Accessible DOM structure, WCAG standards, ARIA" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", context: "Flexbox, CSS Grid, animations, fluid typography" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "Architecting reliable server endpoints, business logic, and communication layers",
    skills: [
      { name: "Python", level: "Advanced", context: "Core scripting, data parsing, backend services", highlight: true },
      { name: "Django & Django REST", level: "Advanced", context: "ORM, authentication, API serialization, viewsets", highlight: true },
      { name: "Node.js", level: "Proficient", context: "Serverless functions, API proxying, tooling" },
      { name: "RESTful APIs", level: "Advanced", context: "Clean endpoint design, pagination, validation, status codes" },
      { name: "Flask", level: "Proficient", context: "Lightweight microservices, prototyping, webhook endpoints" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Designing robust relational schemas and efficient database interactions",
    skills: [
      { name: "PostgreSQL", level: "Advanced", context: "Relational schema design, indexes, joins, migrations", highlight: true },
      { name: "MySQL", level: "Proficient", context: "Relational tables, foreign keys, transaction handling" },
      { name: "Data Modeling", level: "Advanced", context: "Normalization, entity relationships, integrity constraints" }
    ]
  },
  {
    category: "AI & Intelligent Systems",
    description: "Bridging large language models and smart capabilities into practical web software",
    skills: [
      { name: "Google Gemini API", level: "Advanced", context: "Multimodal analysis, text extraction, document parsing", highlight: true },
      { name: "AI-Powered Applications", level: "Advanced", context: "Document analyzers, intelligent summaries, automation", highlight: true },
      { name: "Prompt Engineering", level: "Advanced", context: "Structured JSON outputs, few-shot formatting, guardrails" },
      { name: "AI SaaS Workflows", level: "Advanced", context: "Triage automation, recommendation loops, smart dashboards" }
    ]
  },
  {
    category: "Search Engine Optimization & DevOps",
    description: "Maximizing organic search discoverability, indexing performance, and reliable cloud operations",
    skills: [
      {
        name: "Search Engine Optimization (SEO)",
        level: "Advanced",
        context: "Technical SEO, Schema Markup (JSON-LD), Core Web Vitals, Google Search Console, Rich Snippets, On-Page & Architectural SEO",
        highlight: true
      },
      { name: "Cloud Deployment", level: "Advanced", context: "Vercel, Google Cloud, serverless edge environments", highlight: true },
      { name: "Git & GitHub", level: "Advanced", context: "Branching workflows, version control, code reviews" },
      { name: "Testing & Performance Profiling", level: "Advanced", context: "Lighthouse audits, network profiling, cross-device testing" }
    ]
  }
];

export const SERVICES = [
  {
    id: "full-stack-web-apps",
    title: "Full Stack Web Application Development",
    shortDesc: "End-to-end web apps tailored for real business workflows from database to pixel.",
    detailedDesc:
      "Complete product engineering using Next.js on the frontend, Python/Django on the backend, and PostgreSQL for rock-solid persistence. Built for speed, security, and effortless maintenance.",
    businessValue: "Launches a cohesive, production-ready product without managing fragmented developers.",
    technologies: ["Next.js", "Django", "PostgreSQL", "React.js", "Tailwind CSS"],
    deliverables: ["Full-stack architecture", "Database schema & migrations", "RESTful API endpoints", "Responsive client app"],
    bestFor: "Startups, SaaS platforms, and businesses replacing spreadsheets with custom tools",
    iconName: "Layers"
  },
  {
    id: "seo-performance-optimization",
    title: "Advanced Search Engine Optimization (SEO)",
    shortDesc: "Structured data implementation, Google Search Console indexing audits, and Core Web Vitals tuning.",
    detailedDesc:
      "Specialized Technical SEO engineering that elevates websites into search engine magnets. Implements rich JSON-LD entities (Person, Product, Organization, Breadcrumb), canonical hierarchies, XML sitemaps, and Lighthouse 95+ performance scores.",
    businessValue: "Drives organic Google search rankings, secures rich search snippets, and cuts customer acquisition costs.",
    technologies: ["JSON-LD Schema", "Google Search Console", "Technical SEO", "Core Web Vitals", "Lighthouse"],
    deliverables: ["Structured data schemas (Person, Product, Organization)", "Robots & sitemap setup", "LCP/CLS speed audit", "Search Console indexing audit"],
    bestFor: "E-commerce stores, SaaS products, and businesses losing organic traffic to competitors",
    iconName: "SearchCheck"
  },
  {
    id: "nextjs-frontend",
    title: "Next.js & React Frontend Architecture",
    shortDesc: "Ultra-fast, SEO-optimized web interfaces built with Server Components and App Router.",
    detailedDesc:
      "Modernizing legacy websites or building greenfield user interfaces with Next.js. Engineered with sub-second page loads, responsive layouts, and zero-layout-shift typography.",
    businessValue: "Maximizes user retention, cuts bounce rates, and ensures flawless performance on all devices.",
    technologies: ["Next.js App Router", "React.js", "Tailwind CSS", "JavaScript"],
    deliverables: ["Component design system", "Server Component data fetching", "Mobile-first responsive layouts"],
    bestFor: "Marketing sites, customer portals, and high-conversion web products",
    iconName: "Code2"
  },
  {
    id: "ecommerce-platforms",
    title: "Scalable E-commerce Platforms",
    shortDesc: "Custom online stores built with high-speed catalogs, cart flows, and structured product SEO.",
    detailedDesc:
      "Drawing from experience building Shubh Value Cart and Frost & Wayne, I develop e-commerce storefronts that combine elegant product presentation with robust checkout and inventory logic.",
    businessValue: "Drives organic search traffic through product rich snippets while delivering high checkout conversion.",
    technologies: ["Next.js", "PostgreSQL", "Schema.org", "Stripe / Checkout Integration"],
    deliverables: ["Product catalog & filter engine", "Shopping cart & checkout workflows", "JSON-LD product structured data"],
    bestFor: "Direct-to-consumer brands, grocery/retail outlets, and luxury boutiques",
    iconName: "ShoppingBag"
  },
  {
    id: "ai-saas-integration",
    title: "AI-Powered Solutions & SaaS Products",
    shortDesc: "Practical generative AI features integrated directly into your web applications.",
    detailedDesc:
      "Leveraging Google Gemini API and custom prompt pipelines to deliver document summarization, information extraction, voice audio playback, or automated customer triage.",
    businessValue: "Transforms repetitive manual tasks into automated, value-generating features for your software.",
    technologies: ["Gemini API", "Python", "Django", "Next.js", "Prompt Engineering"],
    deliverables: ["AI prompt & parsing pipeline", "Audio/visual summarization engine", "Secure server-side API proxy"],
    bestFor: "Document-heavy businesses, AI SaaS startups, and productivity tools",
    iconName: "Sparkles"
  },
  {
    id: "backend-api-databases",
    title: "Backend APIs & PostgreSQL Databases",
    shortDesc: "Robust, secure REST APIs and normalized relational database systems.",
    detailedDesc:
      "Building clean Django REST Framework or Node.js server architectures connected to PostgreSQL. Includes authentication, request validation, data serialization, and role-based permissions.",
    businessValue: "Protects your data integrity and ensures your frontend always has reliable, lightning-fast endpoints.",
    technologies: ["Django REST Framework", "Python", "PostgreSQL", "Node.js", "REST"],
    deliverables: ["API documentation", "Relational database schema", "Authentication & permission checks"],
    bestFor: "Platforms requiring reliable multi-user data storage and complex business rules",
    iconName: "Database"
  }
];

export const ENGINEERING_PHILOSOPHY = [
  {
    title: "Production Reality Over Demos",
    desc: "A codebase is only as good as its behavior in the hands of real users. I build with proper edge cases, clean error boundaries, and production-tested patterns from day one."
  },
  {
    title: "Full-Stack Systemic Thinking",
    desc: "Frontend and backend are not isolated islands. Designing database relationships with the frontend UI in mind leads to faster queries, cleaner state, and fewer network roundtrips."
  },
  {
    title: "Advanced SEO as an Architectural Foundation",
    desc: "Search discoverability is not an afterthought added before launch. It is baked into semantic HTML, Server Components, Schema.org entities, and lightning-fast Core Web Vitals."
  },
  {
    title: "Pragmatic AI Implementation",
    desc: "AI should solve tangible user pain points—like summarizing complex multi-page files or streamlining service workflows—not serve as decorative marketing fluff."
  }
];
