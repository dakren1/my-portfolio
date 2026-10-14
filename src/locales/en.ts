import type { Locale } from './es'

const en: Locale = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Work experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'Download CV',
  },
  hero: {
    greeting: "Hi, I'm",
    roles: ['Full Stack Developer', 'Java · Spring Boot · NestJS', 'React interfaces'],
    intro:
      'Backend-oriented developer: microservices, REST APIs and domain-driven architectures, with quality ensured through TDD/BDD.',
    projects: 'View projects',
    cv: 'Download CV',
  },
  about: {
    title: 'About me',
    body: [
      'Full Stack Developer focused on the backend with Java / Spring Boot and Node / NestJS, and on interfaces with React.',
      'I design and build microservices, REST APIs and domain-driven architectures (DDD), applying TDD/BDD to ensure quality. I pick up new technologies easily and deliver solutions aligned with business goals.',
    ],
    facts: [
      { label: 'Location', value: 'San Juan, Argentina' },
      { label: 'Focus', value: 'Backend · Full Stack' },
      { label: 'Experience', value: 'Since 2020' },
      { label: 'Education', value: 'University Programming Degree' },
    ],
  },
  experience: {
    title: 'Work experience',
    items: [
      {
        period: 'Apr 2022 — Oct 2025',
        company: 'Prisma Medios de Pago',
        role: 'Developer III',
        bullets: [
          'Built REST microservices in Java / Spring Boot on JBoss, migrating features from SOAP to improve maintainability and reduce errors in payments and queries.',
          'Built a home page configuration service with Spring Boot + PostgreSQL so content can be updated without technical intervention.',
          'Delivered NestJS work: version migrations and a BFF to centralize and filter requests to internal APIs.',
          'Automated API integration tests with Karate, applying TDD/BDD to the services.',
          'Handled production incidents: log analysis, reproduction and fixing of failures.',
        ],
      },
      {
        period: 'Feb 2020 — Mar 2022',
        company: 'Folcode',
        role: 'Full Stack Developer · Tech Lead',
        bullets: [
          'Tech Lead of a social network MVP: React.js and React Native + Redux frontend, and a Java / Spring backend with microservices (DDD) and messaging architecture.',
          'Developed a travel packages platform in Java / Spring, with a logging system and Elastic Search integration for traceability and monitoring.',
          'Led a courses platform and a coupon book app with Laravel and Angular, ensuring efficient continuous delivery.',
          'Built a management project with Next.js and Express.js as a content platform.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        name: 'University Degree in Programming',
        place: 'Universidad Nacional de San Juan',
        year: '2019',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        name: 'Backend',
        items: ['Java', 'Spring Boot', 'NestJS', 'Node.js', 'Express', 'Fastify', 'TypeScript', 'Python', 'Laravel'],
      },
      { name: 'Frontend', items: ['React', 'React Native', 'Redux', 'Next.js', 'Angular'] },
      {
        name: 'Data & infrastructure',
        items: ['PostgreSQL', 'pgvector', 'MySQL', 'Docker', 'AWS', 'ELK', 'JBoss', 'Git'],
      },
      {
        name: 'Practices & protocols',
        items: ['Microservices', 'DDD', 'TDD', 'BDD', 'Karate', 'MCP', 'OIDC'],
      },
      {
        name: 'Soft skills',
        items: ['Teamwork', 'Problem solving', 'Adaptability', 'Critical thinking'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    demo: 'Demo',
    code: 'Code',
    watch: 'Watch the presentation video',
    items: [
      {
        name: 'HunicJS',
        video: 'PrdNxjfhLUI',
        period: '2026 · Personal project',
        description: 'Design documentation platform with an MCP server and a RAG chat.',
        bullets: [
          'TypeScript monorepo (contracts / core / database / server) with Fastify, Drizzle and PostgreSQL + pgvector. A single definition of each operation generates the REST route, the MCP tool and the OpenAPI spec.',
          'MCP server (Streamable HTTP) with 39 tools. Permissions are evaluated by scope and project role, and privileged actions are kept out of agents’ reach to mitigate prompt injection.',
          'RAG chat over the documents: vector + text search, answers with citations and private conversations. Supports several AI providers configurable from a panel, with keys encrypted with AES-256-GCM.',
          'Frontend in React + TanStack Query + Tailwind, with 16 render engines (Mermaid, OpenAPI, ERD, kanban, etc.). Untrusted code runs in isolated iframes.',
          'Automated deployment with Docker Compose, migrations, backup/restore and OIDC authentication.',
        ],
        tags: ['TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL', 'pgvector', 'MCP', 'React', 'Docker', 'OIDC'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    text: "Have a project or just want to chat? Write to me and I'll get back to you soon.",
    emailLabel: 'Email',
    copy: 'Copy',
    copied: 'Copied!',
    form: {
      title: 'Or leave me a message',
      name: 'Name',
      email: 'Your email',
      type: 'Reason',
      types: [
        { value: 'Project', label: 'I want to commission a project' },
        { value: 'Job opportunity', label: 'Job opportunity' },
        { value: 'Inquiry', label: 'General inquiry' },
      ],
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: "Message sent! I'll get back to you soon.",
      error: 'Could not send. Please try again or write to me directly by email.',
    },
  },
  footer: 'Built with React, Vite and Tailwind.',
}

export default en
