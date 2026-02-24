export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  period: string;
  tech: string[];
  highlights: string[];
  problem: string;
  solution: string;
  contributions?: string;
  link?: string;
  github?: string;
  featured: boolean;
  gridClass: string;
}

export const projects: Project[] = [
  {
    slug: "blis-ai",
    title: "Blis AI",
    subtitle: "Enterprise Travel SaaS",
    description:
      "Multi-tenant SaaS with AI chat agents that search, book, and manage corporate travel across hotels, flights, and car rentals.",
    role: "Fullstack Developer (team of 5)",
    period: "Feb 2025 — Present",
    tech: [
      ".NET 8",
      "Next.js 16",
      "React 19",
      "LangGraph",
      "FastAPI",
      "Celery",
      "PostgreSQL",
      "Redis",
      "AWS EKS",
    ],
    highlights: [
      "CQRS + Clean Architecture API with Result pattern",
      "Generative UI rendered from multi-agent responses",
      "Multi-agent supervisor routing (hotel/flight/car/support)",
      "Multi-tenancy via subdomain with JWT context propagation",
      "Real-time approval workflows bridging two systems",
    ],
    problem:
      "Corporate travel management relies on fragmented legacy systems with poor UX and no intelligent automation.",
    solution:
      "Built a multi-tenant SaaS platform where AI chat agents handle the full travel lifecycle — search, compare, book, approve, and cancel — across hotels, flights, and car rentals. A multi-agent supervisor routes user intent to specialized agents that return generative UI components rendered in real-time.",
    contributions:
      "Full-stack across API, frontend, and agents — hotel search, approval flows, flight pricing, booking bug fixes, generative UI components.",
    featured: true,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    slug: "kortex",
    title: "Kortex",
    subtitle: "Vehicle Protection SaaS",
    description:
      "Database-per-tenant SaaS platform with 23 modules for managing vehicle protection associations, including AI-powered inspections.",
    role: "Fullstack Developer",
    period: "Sep 2025 — Present",
    tech: [
      "NestJS",
      "Fastify",
      "Next.js 16",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "BullMQ",
      "Stripe",
      "OpenAI Agents",
    ],
    highlights: [
      "Database-per-tenant isolation architecture",
      "30K+ boletos/month billing processing via Stripe",
      "AI-powered vehicle inspection with 14 agents",
      "WhatsApp integration with SSE real-time updates",
      "23 production modules covering full association lifecycle",
    ],
    problem:
      "Brazilian vehicle protection associations operate with manual processes and fragmented tools across members, billing, claims, and inspections.",
    solution:
      "Built a multi-tenant SaaS platform with complete database isolation per tenant, covering 23 modules including member management, billing (30K+ boletos/month), real-time chat with WhatsApp integration, and AI-powered vehicle inspection using 14 specialized agents.",
    featured: true,
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    slug: "habilitaqui",
    title: "HabilitAqui",
    subtitle: "Driving Instructor Marketplace",
    description:
      "Full marketplace connecting students with autonomous driving instructors after Brazil's Contran 1.020/2025 regulation.",
    role: "Co-founder & CTO (33% equity)",
    period: "Jan 2026 — Present",
    tech: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Prisma",
      "PostgreSQL",
      "Stripe Connect",
      "Socket.IO",
      "Redis",
      "Cloudflare R2",
      "Docker",
    ],
    highlights: [
      "132 commits in 40 days, solo full-stack build",
      "22 DB models, 60 API routes",
      "Stripe Connect payments (PIX + card)",
      "Real-time chat with Socket.IO",
      "$32/year hosting cost",
    ],
    problem:
      "Brazil's new regulation (Contran 1.020/2025) legalized autonomous driving instructors, creating a fragmented market of 86K+ instructors with no unified platform.",
    solution:
      "Built a complete marketplace with dual booking flows, Stripe Connect payments supporting both PIX and card, real-time chat, instructor verification, and review system. Shipped in 40 days as sole developer.",
    link: "https://habilitaqui.com.br",
    featured: true,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "proteus",
    title: "Proteus",
    subtitle: "AI Autonomous Agent Daemon",
    description:
      "Modular AI daemon running 24/7, handling concurrent tasks autonomously via WhatsApp and Telegram with self-learning capabilities.",
    role: "Solo Developer",
    period: "2025",
    tech: [
      "TypeScript",
      "Node.js",
      "SQLite",
      "Claude",
      "Gemini",
      "MCP Protocol",
      "Socket IPC",
    ],
    highlights: [
      "3 concurrent task execution",
      "RAG/semantic search with memory consolidation",
      "Multi-model orchestration (Claude + Gemini)",
      "Automatic module generation and self-learning",
      "Distributed tracing and observability",
    ],
    problem:
      "Wanted a personal AI assistant that runs 24/7, handles concurrent tasks autonomously, and learns from its interactions.",
    solution:
      "Built a modular daemon that receives instructions via WhatsApp/Telegram, decomposes tasks, orchestrates multiple AI models, and maintains persistent memory with semantic search. Supports 3 concurrent tasks with automatic module generation.",
    github: "https://github.com/jga01/proteus",
    featured: true,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "seaeel",
    title: "SeaEel",
    subtitle: "3D Graphics Engine",
    description:
      "3D rendering engine built from scratch with C and OpenGL, featuring custom shader pipeline and scene management.",
    role: "Solo Developer",
    period: "2024",
    tech: ["C", "OpenGL", "GLFW", "GLSL Shaders", "Nuklear UI"],
    highlights: [
      "Custom vertex/fragment shader pipeline",
      "3D scene management from scratch",
      "Written entirely in C — no engine frameworks",
      "Proves deep understanding beneath abstraction layers",
    ],
    problem:
      "Wanted to understand graphics programming from the ground up — how GPUs render, how shaders work, how scenes are managed.",
    solution:
      "Built a complete 3D rendering engine from scratch using C and OpenGL. Implemented custom shader pipeline, vertex/fragment shaders, scene graph, and debug UI. No engine frameworks — everything from first principles.",
    github: "https://github.com/jga01/seaeel",
    featured: true,
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export const experiences = [
  {
    title: "Fullstack Developer",
    company: "Blis AI",
    location: "Remote",
    period: "Feb 2025 — Present",
    description:
      "Developing a multi-tenant enterprise SaaS travel management platform with AI-powered chat agents. Contributing across the full stack: .NET 8 API (CQRS/Clean Architecture), Next.js 16 frontend, and Python multi-agent system (LangGraph, FastAPI, Celery).",
  },
  {
    title: "Fullstack Developer",
    company: "VipSeg Brasil Protecao Veicular",
    location: "Fortaleza",
    period: "Sep 2025 — Present",
    description:
      "Developing a multi-tenant SaaS platform (database-per-tenant) for vehicle protection associations using NestJS/Fastify, Next.js 16, PostgreSQL, and Redis. Features include AI-powered vehicle inspection, real-time chat with WhatsApp integration, and billing system processing 30K+ boletos/month.",
  },
  {
    title: "Systems Analyst",
    company: "Instituto Atlantico",
    location: "Fortaleza",
    period: "Apr 2024 — Feb 2025",
    description:
      "Worked on enterprise projects using .NET, Angular, and PostgreSQL. Contributed to system architecture and feature development for large-scale applications.",
  },
  {
    title: "Software Development Intern",
    company: "Instituto Atlantico",
    location: "Fortaleza",
    period: "Apr 2022 — Apr 2024",
    description:
      "Started as intern, progressing through full-stack development with .NET, Angular, and SQL Server. Gained experience in enterprise software development practices and Agile methodologies.",
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Universidade de Fortaleza (Unifor)",
  period: "2024 — Present",
  location: "Fortaleza, Brazil",
};

export const skills = {
  Languages: ["C#", "TypeScript", "JavaScript", "C", "Python", "SQL", "Java"],
  Frontend: [
    "Next.js",
    "React",
    "Angular",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
  ],
  Backend: [".NET 8", "NestJS", "FastAPI", "Node.js", "MediatR"],
  "AI / Agents": [
    "LangGraph",
    "LangChain",
    "OpenAI API",
    "MCP Protocol",
    "Celery",
  ],
  Databases: ["PostgreSQL", "Redis", "MongoDB", "SQLite"],
  DevOps: [
    "Docker",
    "Terraform",
    "AWS (EKS, Lambda, S3)",
    "GitHub Actions",
    "Kubernetes",
  ],
};
