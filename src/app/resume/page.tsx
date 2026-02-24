import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Tiago Goossen de Andrade",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black print:bg-white">
      <div className="mx-auto max-w-[800px] px-10 py-10 print:px-6 print:py-4">
        {/* Header */}
        <header className="text-center mb-6 border-b border-gray-300 pb-4">
          <h1 className="text-3xl font-bold tracking-tight mb-1">
            TIAGO GOOSSEN DE ANDRADE
          </h1>
          <p className="text-sm text-gray-600">
            Fortaleza, CE — Brazil &nbsp;|&nbsp;{" "}
            <a
              href="mailto:tiagogoossenbra@gmail.com"
              className="text-blue-700 hover:underline"
            >
              tiagogoossenbra@gmail.com
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a
              href="https://github.com/jga01"
              className="text-blue-700 hover:underline"
            >
              github.com/jga01
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a
              href="https://linkedin.com/in/tiago-goossen"
              className="text-blue-700 hover:underline"
            >
              linkedin.com/in/tiago-goossen
            </a>
          </p>
        </header>

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-gray-300 mb-2 pb-1">
            Technical Skills
          </h2>
          <div className="text-sm space-y-1">
            <p>
              <span className="font-semibold">Languages:</span> C# (Advanced),
              TypeScript (Advanced), JavaScript (Advanced), C (Advanced), Python
              (Intermediate), SQL (Intermediate), Java (Intermediate)
            </p>
            <p>
              <span className="font-semibold">Frameworks & Tools:</span> .NET 8,
              Next.js, React, NestJS, Angular, Tailwind CSS, MediatR, Prisma,
              LangGraph, FastAPI, Docker, Terraform, Redis, AWS (EKS, Lambda,
              S3)
            </p>
            <p>
              <span className="font-semibold">Methodologies:</span> Agile,
              Scrum, CI/CD, CQRS, Clean Architecture, DDD, Multi-tenancy,
              Gitflow, SOLID
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-gray-300 mb-2 pb-1">
            Professional Experience
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">Fullstack Developer</h3>
              <span className="text-xs text-gray-600">Feb 2025 — Present</span>
            </div>
            <p className="text-sm text-gray-700 italic mb-1">
              Blis AI — Remote
            </p>
            <p className="text-sm">
              I develop a multi-tenant enterprise SaaS travel management
              platform with AI-powered chat agents. I contribute across the full
              stack: .NET 8 API (CQRS/Clean Architecture), Next.js 16 frontend
              (React 19, Tailwind, Zustand), and Python multi-agent system
              (LangGraph, FastAPI, Celery). Features include hotel/flight
              booking, real-time approval workflows, and generative UI rendered
              from agent responses.
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">Fullstack Developer</h3>
              <span className="text-xs text-gray-600">Sep 2025 — Present</span>
            </div>
            <p className="text-sm text-gray-700 italic mb-1">
              VipSeg Brasil Protecao Veicular — Fortaleza
            </p>
            <p className="text-sm">
              I develop a multi-tenant SaaS platform (database-per-tenant
              architecture) for managing vehicle protection associations using
              NestJS/Fastify, Next.js 16, PostgreSQL, and Redis. Features
              include AI-powered vehicle inspection (OpenAI Agents), real-time
              chat with WhatsApp integration, and billing system processing 30K+
              boletos/month via Stripe.
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">Systems Analyst</h3>
              <span className="text-xs text-gray-600">
                Apr 2024 — Feb 2025
              </span>
            </div>
            <p className="text-sm text-gray-700 italic mb-1">
              Instituto Atlantico — Fortaleza
            </p>
            <p className="text-sm">
              Worked on enterprise projects using .NET, Angular, and PostgreSQL.
              Contributed to system architecture and feature development for
              large-scale applications.
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">
                Software Development Intern
              </h3>
              <span className="text-xs text-gray-600">
                Apr 2022 — Apr 2024
              </span>
            </div>
            <p className="text-sm text-gray-700 italic mb-1">
              Instituto Atlantico — Fortaleza
            </p>
            <p className="text-sm">
              Started as intern, progressing through full-stack development with
              .NET, Angular, and SQL Server. Gained experience in enterprise
              software development practices and Agile methodologies.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-gray-300 mb-2 pb-1">
            Education
          </h2>
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-sm">
              B.Sc. Computer Science
            </h3>
            <span className="text-xs text-gray-600">2024 — Present</span>
          </div>
          <p className="text-sm text-gray-700 italic">
            Universidade de Fortaleza (Unifor) — Fortaleza, Brazil
          </p>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-gray-300 mb-2 pb-1">
            Selected Projects
          </h2>

          <div className="mb-3">
            <h3 className="font-bold text-sm">
              Proteus{" "}
              <span className="font-normal text-gray-600">
                — AI Autonomous Agent Daemon
              </span>
            </h3>
            <p className="text-sm">
              Modular AI daemon running 24/7, handling 3 concurrent tasks
              autonomously via WhatsApp/Telegram. Features RAG/semantic search,
              memory consolidation, multi-model orchestration (Claude + Gemini),
              and automatic module generation.
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              TypeScript, Node.js, MCP Protocol, Claude, Gemini, SQLite
            </p>
          </div>

          <div className="mb-3">
            <h3 className="font-bold text-sm">
              HabilitAqui{" "}
              <span className="font-normal text-gray-600">
                — Driving Instructor Marketplace
              </span>
            </h3>
            <p className="text-sm">
              Full marketplace with dual booking flows, Stripe Connect payments
              (PIX + card), real-time chat, and instructor verification. 132
              commits in 40 days, 22 DB models, 60 API routes. Live at
              habilitaqui.com.br.
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              Next.js, React, Prisma, PostgreSQL, Stripe Connect, Socket.IO,
              Docker
            </p>
          </div>

          <div className="mb-3">
            <h3 className="font-bold text-sm">
              SeaEel{" "}
              <span className="font-normal text-gray-600">
                — 3D Graphics Engine
              </span>
            </h3>
            <p className="text-sm">
              3D rendering engine built from scratch with custom shader pipeline,
              vertex/fragment shaders, and scene management. No engine
              frameworks — everything from first principles.
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              C, OpenGL, GLFW, GLSL Shaders, Nuklear UI
            </p>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wide border-b border-gray-300 mb-2 pb-1">
            Languages
          </h2>
          <p className="text-sm">
            Portuguese (Native), English (Fluent), Dutch (Basic)
          </p>
        </section>
      </div>
    </div>
  );
}
