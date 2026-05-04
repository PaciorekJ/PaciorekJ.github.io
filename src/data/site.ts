import {
    ContactLink,
    NavItem,
    Project,
    ResumeEntry,
    ResumeSectionData,
    SkillCategory,
    TimelineEntry,
} from "../types/portfolio";

export const portfolioBaseUrl = "https://paciorekj.github.io";

export const navItems: NavItem[] = [
    { label: "Home", to: "/" },
    { label: "Resume", to: "/resume" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Contact", to: "/contact" },
];

export const contactLinks: ContactLink[] = [
    {
        label: "Email",
        value: "paciorekjason@gmail.com",
        href: "mailto:paciorekjason@gmail.com",
        primary: true,
    },
    {
        label: "GitHub",
        value: "github.com/PaciorekJ",
        href: "https://github.com/PaciorekJ",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/jasonpaciorek",
        href: "https://www.linkedin.com/in/jasonpaciorek",
    },
];

export const resumeContactLinks: ContactLink[] = [
    {
        label: "Email",
        value: "paciorekjason@gmail.com",
        href: "mailto:paciorekjason@gmail.com",
    },
    {
        label: "GitHub",
        value: "github.com/PaciorekJ",
        href: "https://github.com/PaciorekJ",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/jasonpaciorek",
        href: "https://www.linkedin.com/in/jasonpaciorek",
    },
];

export const resumePdfContactLinks: ContactLink[] = [
    {
        label: "Email",
        value: "paciorekjason@gmail.com",
        href: "mailto:paciorekjason@gmail.com",
    },
    {
        label: "GitHub",
        value: "https://github.com/PaciorekJ",
        href: "https://github.com/PaciorekJ",
    },
    {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/jasonpaciorek",
        href: "https://www.linkedin.com/in/jasonpaciorek",
    },
];

export const heroSummary =
    "I build **web and mobile applications** with **TypeScript**, **React**, **React Native**, **Node.js**, **MongoDB**, **Docker**, and **REST APIs**.";

export const heroSupportLine =
    "Recent work includes onboarding flows, internal tools, **authentication and authorization**, third-party integrations, and deployment automation for client-facing software.";

export const homeProofChips = [
    {
        title: "**Full-stack delivery**",
        description: "React, Node.js, MongoDB, REST APIs",
    },
    {
        title: "**Business workflows**",
        description: "authentication, payments, admin workflows, integrations",
    },
    {
        title: "**Deployment ownership**",
        description: "Docker Compose, Linux services, release automation",
    },
    {
        title: "**Mobile architecture**",
        description: "React Native, Expo, local persistence, API clients",
    },
];

export const aboutSummary =
    "I build software that connects product workflows to reliable engineering: user onboarding, internal tools, mobile experiences, **REST APIs**, integrations, and deployment automation.";

export const aboutHighlights = [
    {
        title: "**12,000+ member organization**",
        description:
            "Supported secure registration, payments, identity verification, and admin workflows for a real membership operation.",
    },
    {
        title: "**Mobile product architecture**",
        description:
            "Built workout planning, guided training, local persistence, and API-backed progress tracking into an active React Native product.",
    },
    {
        title: "**Developer workflow tooling**",
        description:
            "Built a custom MCP server for repository-aware RAG, codebase auditing, and repeatable engineering workflows.",
    },
];

export const technicalStrengths = [
    {
        title: "**Client-facing SaaS delivery**",
        description:
            "Onboarding, admin workflows, payments, integrations, and maintainable product delivery for real users.",
    },
    {
        title: "**Web and mobile product work**",
        description:
            "React, React Native, shared TypeScript contracts, and feature flows that work across app and API layers.",
    },
    {
        title: "**Backend and API design**",
        description:
            "Node.js services, REST APIs, auth-aware integrations, validation, and maintainable data workflows.",
    },
    {
        title: "**Deployment and operations**",
        description:
            "Docker Compose, Linux automation, release workflows, and production-facing deployment support.",
    },
];

export const projects: Project[] = [
    {
        slug: "white-label-membership-platform",
        title: "White-Label Membership Management Platform",
        status: "Client SaaS Project",
        description:
            "Full-stack membership platform with onboarding, payments, admin operations, documents, integrations, and deployment automation for a large organization.",
        shortDescription:
            "Client-facing SaaS platform for onboarding, admin workflows, payments, identity verification, documents, and deployment automation.",
        tech: [
            "TypeScript",
            "React",
            "React Router",
            "Node.js",
            "MongoDB",
            "Redis",
            "BullMQ",
            "Stripe Checkout",
            "Stripe Identity",
            "Docker Compose",
            "Zod",
            "Tailwind CSS",
        ],
        href: "/projects/white-label-membership-platform",
        ctaLabel: "View case study",
        caseStudy: true,
        featured: true,
        subtitle:
            "Full-stack membership platform for onboarding, admin workflows, payments, documents, and deployment automation.",
        impact: [
            {
                title: "**12,000+ member organization**",
                description:
                    "Built for real operational membership workflows without naming the client.",
            },
            {
                title: "**Secure onboarding**",
                description:
                    "Email verification, payment, identity verification, signatures, and generated documents in one controlled flow.",
            },
            {
                title: "**Operational tooling**",
                description:
                    "Admin workflows, background jobs, and deployment automation supporting day-to-day operations.",
            },
        ],
        highlights: [
            "Multi-step registration and onboarding flow",
            "Payments, identity verification, and document workflows integrated into one application",
            "**role-based admin workflows** for member updates and financial requests",
            "Polling and voting workflows with receipts, results, exports, and audit support",
            "Transactional email and generated PDF documents",
            "**Docker Compose deployment** and Linux-based release automation",
        ],
        engineering: [
            "Integrated payments, identity verification, registration, documents, and email into one onboarding workflow.",
            "Designed webhook and worker flows for payment, verification, and communication events.",
            "Built admin-only workflows for sensitive member operations and internal support tasks.",
            "Added background workers for email, polling, and operational tasks.",
            "Improved deployment reliability with Docker Compose automation and repeatable release scripts.",
        ],
        ownership: [
            "Full-stack feature implementation across UI, backend, and operations.",
            "Registration, payment, and identity workflow architecture.",
            "Admin workflow development for sensitive membership operations.",
            "Queue and worker integration for operational processes.",
            "Deployment automation and infrastructure scripting.",
        ],
        systemOverview: [
            "Connected registration, payments, identity verification, digital signatures, generated PDFs, and email into a controlled onboarding workflow.",
            "Built admin workflows and background workers for sensitive operational tasks.",
            "Supported reliable releases with Docker Compose services, automation scripts, and production-facing workflows.",
        ],
        demos: [
            {
                label: "Registration and onboarding walkthrough",
                description:
                    "Shows how verification, payment, signatures, and generated documents fit into one user-facing flow.",
            },
            {
                label: "Payment and identity workflow recovery",
                description:
                    "Demonstrates how interrupted onboarding steps are recovered without losing workflow control.",
            },
            {
                label: "Admin workflows and polling overview",
                description:
                    "Highlights the internal tooling used to support sensitive member updates, requests, and operational voting workflows.",
            },
        ],
    },
    {
        slug: "routine-gym-journal",
        title: "Routine Gym Journal",
        status: "Independent Product Project — Active Development",
        badges: ["Independent Product Project", "Active Development"],
        description:
            "Full-stack mobile workout journaling platform for workout planning, guided training, progress tracking, API-backed data, local persistence, authentication, and subscription-ready architecture.",
        shortDescription:
            "Active React Native fitness product with workout planning, guided execution, API-backed features, local persistence, and authentication.",
        tech: [
            "TypeScript",
            "React Native",
            "Expo",
            "Expo Router",
            "Node.js",
            "MongoDB",
            "OpenAPI",
            "Zod",
            "Firebase Auth",
            "RevenueCat",
            "Expo SQLite",
            "Jest",
        ],
        href: "/projects/routine-gym-journal",
        ctaLabel: "View case study",
        caseStudy: true,
        featured: true,
        subtitle:
            "Full-stack mobile workout journaling platform for workout planning, guided training, progress tracking, API-backed data, local persistence, authentication, and subscription-ready architecture.",
        impact: [
            {
                title: "**Full-stack mobile product**",
                description:
                    "React Native app, backend API, and shared contracts developed as one integrated product stack.",
            },
            {
                title: "**Fitness-domain modeling**",
                description:
                    "Covers workouts, programs, sets, sessions, stats, and sharing rather than a narrow demo feature set.",
            },
            {
                title: "**Mobile architecture**",
                description:
                    "Includes authentication, local persistence, API clients, and testing patterns.",
            },
        ],
        highlights: [
            "Workout library, exercise picker, workout editor, and guided execution flows",
            "Backend APIs for workouts, programs, exercises, daily data, stats, sharing, and user settings",
            "Authentication, subscription-ready flows, and shared user settings",
            "Local persistence for drafts and in-progress workout sessions using Expo SQLite and Drizzle",
            "Dashboard and statistics surfaces backed by API data",
            "Jest and MSW testing across mobile clients, hooks, UI, and local persistence layers",
        ],
        engineering: [
            "Designed shared **TypeScript**, Zod, and **OpenAPI-backed APIs** across mobile and backend layers.",
            "Built reusable React Native API clients and feature hooks.",
            "Modeled workout templates separately from performed workout sessions.",
            "Added local persistence for draft and active workout state.",
            "Integrated authentication, subscription support, telemetry consent, and API-backed progress tracking.",
        ],
        ownership: [
            "Product architecture across mobile app, backend API, and shared contract layer.",
            "Backend APIs for workouts, programs, exercises, stats, sharing, and settings.",
            "React Native flows for dashboard, editing, execution, stats, auth, paywall, and settings.",
            "Local persistence with Expo SQLite and Drizzle ORM.",
            "Testing patterns for clients, hooks, UI, and persistence.",
        ],
        systemOverview: [
            "Built a full-stack mobile product with React Native, backend APIs, authentication, subscriptions, local persistence, and statistics.",
            "Designed workout data around real training workflows: templates, sessions, performed sets, stats, and sharing.",
            "Used OpenAPI and shared validation to keep mobile and backend behavior aligned as the product grows.",
        ],
        demos: [
            {
                label: "Workout editor and exercise picker",
                description:
                    "Shows how workout planning and exercise selection are structured for repeatable training flows.",
            },
            {
                label: "Guided workout execution",
                description:
                    "Demonstrates the mobile session flow for logging performed work, active state, and progress tracking.",
            },
            {
                label: "Dashboard and stats overview",
                description:
                    "Highlights how API-backed metrics and recent activity surfaces support ongoing training review.",
            },
        ],
        note: "Status: Active development. The project is not presented as launched, revenue-generating, or fully offline-first. Local persistence uses Expo SQLite + Drizzle.",
    },
    {
        slug: "fitnessbytes",
        title: "FitnessBytes",
        status: "Completed Portfolio Project / On Hiatus",
        description:
            "Full-stack social fitness platform with authentication, user profiles, posts, replies, real-time messaging, notifications, and responsive UI.",
        shortDescription:
            "Earlier full-stack portfolio project showing authentication, social features, real-time messaging, and responsive React UI.",
        tech: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Passport.js",
            "Socket.IO",
            "Material UI",
            "React Query",
            "React Router",
            "Zustand",
        ],
        href: "/projects/fitnessbytes",
        ctaLabel: "View case study",
        caseStudy: true,
        subtitle:
            "Full-stack social fitness platform with authentication, user profiles, posts, replies, real-time messaging, notifications, and responsive UI.",
        impact: [
            {
                title: "**Full-stack social platform**",
                description:
                    "Shows frontend, backend, authentication, database, and real-time features working together in one product.",
            },
            {
                title: "**Real-time communication**",
                description:
                    "Includes Socket.IO messaging and notification-related interaction flows beyond static CRUD screens.",
            },
            {
                title: "**Community features**",
                description:
                    "Models profiles, posts, replies, likes, friend requests, settings, and user-to-user interaction patterns.",
            },
        ],
        highlights: [
            "User authentication and session management with Passport.js",
            "User profiles, friend requests, search, and account settings",
            "Post creation, updates, likes, replies, and nested replies",
            "Real-time messaging and notification preferences with Socket.IO",
            "Responsive React UI with Material UI, React Query, and Zustand",
            "Node.js/Express backend with MongoDB persistence",
        ],
        engineering: [
            "Built a complete MERN-style application with frontend, backend, database, and auth.",
            "Added real-time user interactions through Socket.IO.",
            "Modeled social features such as posts, replies, profiles, friend requests, and messaging.",
            "Used React Query and Zustand for client-side data and state workflows.",
        ],
        demos: [
            {
                label: "Authentication + Profile Setup",
                description:
                    "Shows account creation, login, and how users move into profile and community features.",
            },
            {
                label: "Posts, Replies, and Likes",
                description:
                    "Demonstrates the core content interaction loop that makes the platform feel social rather than static.",
            },
            {
                label: "Real-Time Messaging",
                description:
                    "Highlights live conversations and the real-time behavior that extends the project beyond standard CRUD flows.",
            },
        ],
        note: "Status: Completed portfolio project currently on hiatus. It remains useful as evidence of full-stack MERN development, authentication, real-time messaging, and social application modeling.",
    },
    {
        slug: "gamehwnd",
        title: "GameHWND",
        status: "Completed Portfolio Project / On Hiatus",
        description:
            "Game discovery platform built with React, TypeScript, React Query, and the RAWG API, focused on filtering, browsing, and reviewing game details.",
        shortDescription:
            "Earlier frontend/API portfolio project focused on external API integration, filtering UX, and responsive React patterns.",
        tech: [
            "TypeScript",
            "React",
            "Chakra UI",
            "React Query",
            "React Router",
            "RAWG API",
            "Vercel",
        ],
        href: "/projects/gamehwnd",
        ctaLabel: "View case study",
        caseStudy: true,
        subtitle:
            "Game discovery platform built with React, TypeScript, React Query, and the RAWG API, focused on filtering, browsing, and reviewing game details.",
        impact: [
            {
                title: "**API-driven discovery UI**",
                description:
                    "Shows how external game data can be turned into a useful browsing and filtering experience.",
            },
            {
                title: "**Large external data source**",
                description:
                    "Supports filtering across **500,000+ games** using genres, platforms, dates, and review-related metadata.",
            },
            {
                title: "**Frontend state and UX**",
                description:
                    "Highlights React Query data fetching, routing, filtering, and responsive UI composition.",
            },
        ],
        highlights: [
            "Game discovery interface using the RAWG API",
            "Filters for genre, platform, release date, Metacritic score, and other game metadata",
            "Game cards and detail views with descriptions, screenshots, purchase information, and trailers when available",
            "Responsive React UI using Chakra UI",
            "Data-fetching workflows with React Query",
            "Routing and deployment with React Router and Vercel",
        ],
        engineering: [
            "Built an external API-driven frontend with filtering and detail views.",
            "Used React Query for remote data fetching and cache-aware UI behavior.",
            "Designed responsive game browsing flows with React and Chakra UI.",
            "Deployed a TypeScript React app through Vercel.",
        ],
        demos: [
            {
                label: "Game Search and Filtering",
                description:
                    "Shows how users narrow large result sets into something useful with filtering controls and browseable lists.",
            },
            {
                label: "Game Detail View",
                description:
                    "Highlights how API data is turned into a richer detail experience with screenshots, descriptions, and related metadata.",
            },
            {
                label: "RAWG API Data Flow",
                description:
                    "Demonstrates the remote data dependency and the UI patterns used to keep browsing responsive.",
            },
        ],
        note: "Status: Completed portfolio project currently on hiatus. It remains useful as evidence of TypeScript React development, external API integration, filtering UX, React Query, and responsive frontend work.",
    },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const earlierProjects = projects.filter((project) => !project.featured);

export const skillCategories: SkillCategory[] = [
    {
        title: "Core development",
        items: [
            { name: "TypeScript", value: 9.5 },
            { name: "JavaScript", value: 9 },
            { name: "React", value: 9 },
            { name: "Node.js", value: 8.5 },
            { name: "REST APIs", value: 8.5 },
            { name: "Git", value: 8.5 },
        ],
    },
    {
        title: "Frontend and mobile",
        items: [
            { name: "React Router", value: 8.5 },
            { name: "Tailwind CSS", value: 8.5 },
            { name: "React Native / Expo", value: 7.5 },
            { name: "Expo Router", value: 7.5 },
            { name: "Zustand", value: 7.5 },
            { name: "React Query", value: 7.5 },
            { name: "Framer Motion", value: 7 },
        ],
    },
    {
        title: "Backend and data",
        items: [
            { name: "MongoDB / Mongoose", value: 8.5 },
            { name: "OpenAPI", value: 8 },
            { name: "Zod Validation", value: 8.5 },
            { name: "Redis / BullMQ", value: 7.5 },
            { name: "RabbitMQ", value: 7 },
            { name: "SQL", value: 7 },
            { name: "SQLite / Drizzle", value: 7 },
            { name: "Neo4j", value: 6.5 },
        ],
    },
    {
        title: "Integrations",
        items: [
            { name: "Payments / Identity Integrations", value: 8 },
            { name: "Webhooks", value: 8 },
            { name: "Firebase Auth", value: 7.5 },
            { name: "RevenueCat", value: 7 },
            { name: "SMTP Email", value: 7 },
            { name: "PDF Generation", value: 7 },
        ],
    },
    {
        title: "DevOps and workflow",
        items: [
            { name: "Docker Compose", value: 8 },
            { name: "Linux", value: 7.5 },
            { name: "Deployment Automation", value: 7.5 },
            { name: "Release Workflow", value: 7.5 },
            { name: "Cloudflare Tunnel", value: 7 },
            { name: "Jest", value: 7.5 },
            { name: "MSW", value: 7 },
            { name: "Spec-Driven Development", value: 8.5 },
            { name: "AI-Assisted Development", value: 8.5 },
            { name: "Custom MCP / RAG Tooling", value: 7.5 },
        ],
    },
    {
        title: "Systems languages",
        items: [
            { name: "C", value: 6.5 },
            { name: "C++", value: 6.5 },
            { name: "Go", value: 6 },
            { name: "Bash / Shell Scripting", value: 7 },
        ],
    },
];

export const timelineEntries: TimelineEntry[] = [
    {
        label: "Present",
        title: "Independent Contractor / Lead Full-Stack Developer",
        description:
            "Building client-facing software across frontend, backend, integrations, and deployment workflows.",
    },
    {
        label: "Active Development",
        title: "Routine Gym Journal",
        description:
            "Independent mobile product project spanning React Native, backend APIs, local persistence, authentication, and testing workflows.",
    },
    {
        label: "May 2024",
        title: "Professional client software work began",
        description:
            "Started delivering full-stack client work with TypeScript, React, Node.js, MongoDB, Redis, and Docker Compose.",
    },
    {
        label: "Fall 2023",
        title: "Graduated with B.S. in Computer Science",
        description:
            "Completed the University of Minnesota computer science program with a strong GPA and practical software engineering focus.",
    },
    {
        label: "2016 – 2024",
        title: "Original Pancake House",
        description:
            "Built teamwork, communication, and execution discipline in a high-volume service environment while progressing toward software engineering work.",
    },
];

const resumeProjectEntries: ResumeEntry[] = [
    {
        title: "White-Label Membership Management Platform — Client SaaS Project",
        href: "/projects/white-label-membership-platform",
        pdfUrl: `${portfolioBaseUrl}/projects/white-label-membership-platform`,
        bullets: [
            "Built a full-stack membership platform for onboarding, payments, identity verification, documents, admin workflows, and deployment automation supporting a **12,000+ member organization**.",
            "Integrated verification, payment, signatures, generated PDFs, email delivery, and **authentication/authorization-aware** operations into one controlled workflow.",
        ],
    },
    {
        title: "Routine Gym Journal — Independent Product Project",
        meta: "Active Development",
        href: "/projects/routine-gym-journal",
        pdfUrl: `${portfolioBaseUrl}/projects/routine-gym-journal`,
        bullets: [
            "Built a **React Native fitness app** with workout planning, guided execution, API-backed data, authentication, local persistence, and stats dashboards.",
            "Designed shared **TypeScript** and **OpenAPI-backed APIs** across mobile and backend services using Zod-based validation.",
            "Developed reusable mobile API clients and backend services for workouts, programs, exercises, sharing, settings, and progress tracking.",
            "Built local persistence with Expo SQLite and Drizzle to support draft state and in-progress workout sessions.",
            "Used Jest and MSW to test mobile clients, hooks, UI flows, and persistence behavior.",
        ],
    },
    {
        title: "FitnessBytes — Full-Stack Social Fitness Platform",
        href: "/projects/fitnessbytes",
        pdfUrl: `${portfolioBaseUrl}/projects/fitnessbytes`,
        subtitle: "React, Node.js, Express, MongoDB, Passport.js, Socket.IO",
        bullets: [
            "Built a full-stack social fitness platform with authentication, profiles, content interactions, responsive UI, and real-time messaging.",
            "Implemented backend APIs and real-time features with Node.js, Express, MongoDB, Passport.js, and Socket.IO.",
        ],
    },
    {
        title: "GameHWND — Frontend/API Portfolio Project",
        href: "/projects/gamehwnd",
        pdfUrl: `${portfolioBaseUrl}/projects/gamehwnd`,
        subtitle: "React, TypeScript, React Query, Chakra UI, RAWG API",
        bullets: [
            "Built an API-driven game discovery interface with filtering, detail views, and responsive React UI patterns.",
        ],
    },
];

export const resumeSections: ResumeSectionData[] = [
    {
        title: "Summary",
        content: [
            "Full-stack developer with experience building **client-facing SaaS**, **mobile applications**, **REST APIs**, and **deployment workflows** using TypeScript, React, React Native, Node.js, MongoDB, Redis, and Docker Compose. Experience includes authentication and authorization, third-party integrations, internal tooling, backend services, testing workflows, and production-facing releases.",
        ],
    },
    {
        title: "Technical Skills",
        content: [
            "**Languages:** TypeScript, JavaScript, SQL, C, C++, Bash / shell scripting, Go",
            "**Frontend:** React, React Router, Vite, Tailwind CSS, React Query, Zustand, Framer Motion",
            "**Mobile:** React Native, Expo, Expo Router, local persistence with SQLite / Drizzle",
            "**Backend/API:** Node.js, Express, **REST APIs**, OpenAPI, Zod, Firebase Admin",
            "**Databases/Queues:** MongoDB, Mongoose, Redis, BullMQ, RabbitMQ, SQL",
            "**Integrations:** payments, identity verification, webhooks, Firebase Auth, RevenueCat, SMTP email, PDF generation",
            "**DevOps:** Docker Compose, Linux, deployment automation, Cloudflare Tunnel, CI/CD",
            "**Testing/Workflow:** Jest, MSW, React Native Testing Library, OpenAPI validation, spec-driven development, AI-assisted development",
            "**Developer Tools:** custom MCP server, repository-aware RAG, codebase auditing workflows",
        ],
    },
    {
        title: "Professional Experience",
        entries: [
            {
                title: "Independent Contractor — Lead Full-Stack Developer",
                meta: "May 2024 – Present",
                bullets: [
                    "Led full-stack development of a **client-facing SaaS** white-label membership platform using TypeScript, React, Node.js, MongoDB, Redis, Docker Compose, and Stripe.",
                    "Built onboarding flows with email verification, payments, identity verification, digital signatures, generated PDFs, and transactional email delivery.",
                    "Designed **role-based admin workflows** for member updates, financial requests, polling, and operational support tasks.",
                    "Implemented webhook and worker flows for payments, identity events, email delivery, and background processing.",
                    "Built **Docker Compose deployment** automation and Linux-based release workflows to support repeatable production updates.",
                    "Built a custom MCP server for repository-aware RAG, codebase auditing, and repeatable engineering workflows.",
                ],
            },
        ],
    },
    {
        title: "Projects",
        entries: resumeProjectEntries,
    },
    {
        title: "Education",
        entries: [
            {
                title: "Bachelor of Science in Computer Science",
                subtitle:
                    "University of Minnesota — College of Science and Engineering",
                meta: "Graduated Fall 2023 • GPA: 3.727",
            },
        ],
    },
    {
        title: "Additional Experience",
        entries: [
            {
                title: "Original Pancake House — Expeditor",
                meta: "Dec 2016 – Sep 2024",
                bullets: [
                    "Coordinated communication between kitchen, servers, and customers in a high-volume service environment.",
                    "Resolved operational issues under pressure while supporting team execution during peak hours.",
                ],
            },
        ],
    },
];
