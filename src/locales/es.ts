const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia laboral',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    cv: 'Descargar CV',
  },
  hero: {
    greeting: 'Hola, soy',
    roles: ['Full Stack Developer', 'Java · Spring Boot · NestJS', 'Interfaces con React'],
    intro:
      'Desarrollador orientado al backend: microservicios, APIs REST y arquitecturas orientadas al dominio, con calidad asegurada por TDD/BDD.',
    projects: 'Ver proyectos',
    cv: 'Descargar CV',
  },
  about: {
    title: 'Sobre mí',
    body: [
      'Desarrollador Full Stack orientado al backend con Java / Spring Boot y Node / NestJS, y a interfaces con React.',
      'Diseño y construyo microservicios, APIs REST y arquitecturas orientadas al dominio (DDD), aplicando TDD/BDD para asegurar calidad. Aprendo nuevas tecnologías con facilidad y aporto soluciones alineadas a los objetivos del negocio.',
    ],
    facts: [
      { label: 'Ubicación', value: 'San Juan, Argentina' },
      { label: 'Enfoque', value: 'Backend · Full Stack' },
      { label: 'Experiencia', value: 'Desde 2020' },
      { label: 'Formación', value: 'Tecnicatura en Programación' },
    ],
  },
  experience: {
    title: 'Experiencia laboral',
    items: [
      {
        period: 'abr 2022 — oct 2025',
        company: 'Prisma Medios de Pago',
        role: 'Developer III',
        bullets: [
          'Desarrollé microservicios REST en Java / Spring Boot sobre JBoss, migrando funcionalidades desde SOAP para mejorar la mantenibilidad y reducir errores en pagos y consultas.',
          'Construí un servicio de configuración de la home con Spring Boot + PostgreSQL para actualizar contenido sin intervención técnica.',
          'Implementé desarrollos en NestJS: migraciones de versión y un BFF para centralizar y filtrar peticiones a APIs internas.',
          'Automaticé pruebas de integración de APIs con Karate, aplicando TDD/BDD sobre los servicios.',
          'Gestioné incidentes en producción: análisis de logs, reproducción y resolución de fallas.',
        ],
      },
      {
        period: 'feb 2020 — mar 2022',
        company: 'Folcode',
        role: 'Full Stack Developer · Tech Lead',
        bullets: [
          'Tech Lead del MVP de una red social: frontend en React.js y React Native + Redux y backend Java / Spring con microservicios (DDD) y arquitectura de mensajería.',
          'Desarrollé una plataforma de paquetes de viajes en Java / Spring, con sistema de logs e integración de Elastic Search para trazabilidad y monitoreo.',
          'Lideré una plataforma de cursos y una cuponera con Laravel y Angular, asegurando entrega continua eficiente.',
          'Construí un proyecto de gestión con Next.js y Express.js como plataforma de contenido.',
        ],
      },
    ],
    educationTitle: 'Educación',
    education: [
      {
        name: 'Tecnicatura Universitaria en Programación',
        place: 'Universidad Nacional de San Juan',
        year: '2019',
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    groups: [
      {
        name: 'Backend',
        items: ['Java', 'Spring Boot', 'NestJS', 'Node.js', 'Express', 'Fastify', 'TypeScript', 'Python', 'Laravel'],
      },
      { name: 'Frontend', items: ['React', 'React Native', 'Redux', 'Next.js', 'Angular'] },
      {
        name: 'Datos e infraestructura',
        items: ['PostgreSQL', 'pgvector', 'MySQL', 'Docker', 'AWS', 'ELK', 'JBoss', 'Git'],
      },
      {
        name: 'Prácticas y protocolos',
        items: ['Microservicios', 'DDD', 'TDD', 'BDD', 'Karate', 'MCP', 'OIDC'],
      },
      {
        name: 'Soft skills',
        items: ['Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad', 'Pensamiento crítico'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    demo: 'Demo',
    code: 'Código',
    items: [
      {
        name: 'HunicJS',
        period: '2026 · Proyecto propio',
        description: 'Plataforma de documentación de diseño con servidor MCP y chat con RAG.',
        bullets: [
          'Monorepo TypeScript (contracts / core / database / server) con Fastify, Drizzle y PostgreSQL + pgvector. Una única definición de cada operación genera la ruta REST, la herramienta MCP y el OpenAPI.',
          'Servidor MCP (Streamable HTTP) con 39 herramientas. Los permisos se evalúan por scope y rol de proyecto, y las acciones privilegiadas quedan fuera del alcance de los agentes para mitigar prompt injection.',
          'Chat con RAG sobre los documentos: búsqueda vectorial + texto, respuestas con citas y conversaciones privadas. Soporta varias IAs configurables desde un panel, con claves cifradas con AES-256-GCM.',
          'Front end en React + TanStack Query + Tailwind, con 16 motores de render (Mermaid, OpenAPI, ERD, kanban, etc.). El código no confiable corre en iframes aislados.',
          'Despliegue automatizado con Docker Compose, migraciones, backup/restore y autenticación OIDC.',
        ],
        tags: ['TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL', 'pgvector', 'MCP', 'React', 'Docker', 'OIDC'],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    text: '¿Tenés un proyecto o querés charlar? Escribime y te respondo a la brevedad.',
    emailLabel: 'Correo electrónico',
    copy: 'Copiar',
    copied: '¡Copiado!',
    form: {
      title: 'O dejame un mensaje',
      name: 'Nombre',
      email: 'Tu correo',
      type: 'Motivo',
      types: [
        { value: 'Proyecto', label: 'Quiero encargar un proyecto' },
        { value: 'Oportunidad laboral', label: 'Oportunidad laboral' },
        { value: 'Consulta', label: 'Consulta general' },
      ],
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Mensaje enviado! Te respondo pronto.',
      error: 'No se pudo enviar. Probá de nuevo o escribime directamente al correo.',
    },
  },
  footer: 'Hecho con React, Vite y Tailwind.',
}

export default es
export type Locale = typeof es
