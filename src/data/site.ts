import {
    ContactLink,
    DiagramNode,
    NavItem,
    Project,
    ResumeSectionData,
    SkillCategory,
    TimelineEntry,
} from "../types/portfolio";

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
    { label: "Location", value: "Apple Valley, MN" },
];

export const resumeContactLinks: ContactLink[] = [
    ...contactLinks,
    { label: "Phone", value: "(952) 297-2727", href: "tel:9522972727" },
];

export const heroSummary =
    "I build web and mobile applications with React, React Native, Node.js, MongoDB, Docker, Stripe, and production-focused backend systems.";

export const aboutSummary =
    "I am a full-stack developer focused on TypeScript, production-ready workflows, and practical software architecture. My recent work includes a client-facing white-label SaaS platform with secure onboarding, Stripe payments, identity verification, admin workflows, background workers, and Docker-based deployment automation. I am also building Routine Gym Journal, an active React Native fitness app with OpenAPI-backed APIs, Firebase Auth, RevenueCat, local persistence, and workout tracking features.";

export const technicalStrengths = [
    "Full-stack TypeScript",
    "Payment and webhook workflows",
    "API and backend architecture",
    "Docker-based deployment",
    "Mobile product architecture",
    "Spec-driven / AI-assisted workflow",
];

export const projects: Project[] = [
    {
        slug: "white-label-membership-platform",
        title: "White-Label Membership Management Platform",
        status: "Client SaaS Project",
        description:
            "Client-facing SaaS platform for secure onboarding, payments, identity verification, polling, admin workflows, document generation, background workers, and Docker-based deployment operations.",
        shortDescription:
            "Client-facing SaaS platform for secure onboarding, Stripe payments, identity verification, admin workflows, and Docker-based deployment.",
        tech: [
            "TypeScript",
            "React Router",
            "React",
            "Node.js",
            "MongoDB",
            "Mongoose",
            "Redis",
            "BullMQ",
            "Stripe Checkout",
            "Stripe Identity",
            "Docker Compose",
            "OpenBao/Vault",
            "Cloudflare Tunnel",
            "Zod",
            "Tailwind CSS",
            "Radix UI",
            "PDF Generation",
            "SMTP",
        ],
        href: "/projects/white-label-membership-platform",
        featured: true,
        subtitle:
            "Client-facing SaaS platform for secure onboarding, payments, identity verification, polling, admin workflows, document generation, background workers, and Docker-based deployment operations.",
        highlights: [
            "Secure onboarding, payments, and identity verification",
            "Role-based admin workflows and member operations",
            "Background jobs, document generation, and Docker deployment",
        ],
        architecture: [
            "React Router full-stack workflows for registration, admin, and member operations",
            "Node.js service-layer architecture with MongoDB/Mongoose persistence",
            "Zod validation and shared workspace packages",
            "Redis/BullMQ queues for background jobs",
            "Dedicated mailer, poll-audit, Neo4j, MSSQL sync, and maintainer services",
            "Docker Compose infrastructure with health checks and hardened containers",
            "OpenBao/Vault AppRole/TLS integration",
            "Environment reference documentation and production configuration guidance",
        ],
        ownership: [
            "Full-stack feature implementation across UI, backend, and operations",
            "Registration, payment, and identity workflow architecture",
            "Role-based admin and internal workflow development",
            "Background worker and queue integration",
            "Stripe integration and webhook processing",
            "Deployment automation and infrastructure scripting",
            "Production-readiness documentation",
            "Spec-driven planning and validation with Cline as an engineering assistant",
        ],
        demos: [
            "Registration Happy Path",
            "Payment / Identity Retry Handling",
            "Shared-Device Close Session",
            "Poll / Voting Flow",
            "Admin Update Request Flow",
        ],
    },
    {
        slug: "routine-gym-journal",
        title: "Routine Gym Journal",
        status: "Independent Product Project — Active Development",
        description:
            "Independent full-stack mobile workout journaling platform for planning workouts, logging training sessions, reviewing performance, and managing fitness progress.",
        shortDescription:
            "Active React Native fitness app for workout journaling, API-backed features, local persistence, authentication, and subscription-ready mobile flows.",
        tech: [
            "TypeScript",
            "React Native",
            "Expo",
            "Expo Router",
            "OpenAPI",
            "Firebase Auth",
            "React Query",
            "Zustand",
            "Node.js",
            "React Router",
            "MongoDB",
            "Mongoose",
            "Zod",
            "RevenueCat",
            "Expo SQLite",
            "Drizzle ORM",
            "Redis",
            "RabbitMQ",
            "Docker Compose",
            "Jest",
        ],
        href: "/projects/routine-gym-journal",
        featured: true,
        subtitle:
            "Independent full-stack mobile workout journaling platform for planning workouts, logging training sessions, reviewing performance, and managing fitness progress.",
        highlights: [
            "Workout planning, journaling, and guided execution",
            "Firebase Auth, RevenueCat, and OpenAPI-backed APIs",
            "Local persistence, testing, and mobile architecture",
        ],
        architecture: [
            "Monorepo with mobile app, backend API, translation worker, and shared contract package",
            "OpenAPI-backed contracts with shared TypeScript/Zod validation",
            "Reliable mobile API layer for authentication, retries, offline-aware requests, rate-limit handling, and consistent error reporting",
            "Node.js backend services over MongoDB/Mongoose for workout, stats, sharing, and user settings APIs",
            "Expo SQLite/Drizzle local persistence for drafts, workout execution state, and user-local data",
            "Docker Compose backend stack with MongoDB, Redis, RabbitMQ, translation worker, LibreTranslate, Cloudflare tunnel, and health checks",
        ],
        ownership: [
            "Designed OpenAPI-backed contracts and mobile/backend integration patterns",
            "Built backend APIs for workouts, programs, exercises, stats, sharing, and user settings",
            "Developed React Native flows for dashboard, workout editing, guided execution, stats, auth, paywall, and settings",
            "Implemented local persistence with Expo SQLite and Drizzle ORM",
            "Established authentication, subscription readiness, telemetry consent, and testing patterns",
        ],
        demos: [
            "Workout Library + Detail",
            "Workout Editor + Exercise Picker",
            "Guided Workout Execution",
            "Dashboard / Stats Overview",
            "API / Architecture Walkthrough",
        ],
        currentStatus:
            "Active development. Substantial mobile, backend, API-contract, local-persistence, auth, subscription-readiness, sharing, stats, and testing work exists. Public app-store launch, real user traction, and revenue are not claimed.",
    },
    {
        slug: "fitnessbytes",
        title: "FitnessBytes",
        status: "Completed Portfolio Project",
        description:
            "Full-stack social fitness platform with authentication, real-time communication, and responsive UI.",
        shortDescription:
            "Portfolio project focused on authentication, session management, responsive screens, and real-time interactions.",
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Passport.js",
            "Socket.IO",
        ],
        href: "/projects",
    },
    {
        slug: "gamehwnd",
        title: "GameHWND",
        status: "Completed Portfolio Project",
        description:
            "Game discovery app exploring React Query, Zustand, TypeScript, and polished responsive UI patterns.",
        shortDescription:
            "Optional showcase project highlighting frontend state management and responsive interface work.",
        tech: ["TypeScript", "React", "React Query", "Zustand"],
        href: "/projects",
    },
];

export const projectPreview = projects.filter((project) => project.featured);

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        items: [
            { name: "TypeScript", value: 9 },
            { name: "React", value: 9 },
            { name: "React Router / Remix-style routing", value: 8.5 },
            { name: "Tailwind CSS", value: 8.5 },
            { name: "React Native / Expo", value: 7.5 },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", value: 8.5 },
            { name: "REST APIs", value: 8.5 },
            { name: "MongoDB / Mongoose", value: 8.5 },
            { name: "Zod Validation", value: 8.5 },
            { name: "Stripe Webhooks", value: 8 },
            { name: "Redis / BullMQ", value: 7.5 },
        ],
    },
    {
        title: "DevOps & Infrastructure",
        items: [
            { name: "Docker Compose", value: 8 },
            { name: "Linux", value: 7.5 },
            { name: "Health Checks / Readiness Gates", value: 7.5 },
            { name: "Cloudflare Tunnel", value: 7 },
            { name: "CI/CD", value: 7 },
        ],
    },
    {
        title: "Mobile & Product",
        items: [
            { name: "Expo Router", value: 8 },
            { name: "Mobile UX Architecture", value: 7.5 },
            { name: "Firebase Auth", value: 7.5 },
            { name: "RevenueCat", value: 7 },
            { name: "SQLite / Drizzle", value: 7 },
        ],
    },
    {
        title: "Testing & Workflow",
        items: [
            { name: "Spec-Driven Development", value: 8.5 },
            { name: "AI-Assisted Development with Cline", value: 8.5 },
            { name: "OpenAPI", value: 8 },
            { name: "Jest", value: 7.5 },
            { name: "MSW / Supertest", value: 7 },
        ],
    },
];

export const timelineEntries: TimelineEntry[] = [
    {
        label: "Present",
        title: "Independent Contractor / Lead Full-Stack Developer",
        description:
            "Building and rolling out client-facing TypeScript software with full-stack ownership across product workflows, backend services, and deployment operations.",
    },
    {
        label: "Active Development",
        title: "Routine Gym Journal",
        description:
            "Independent full-stack mobile product project spanning React Native, backend contracts, local persistence, auth, and subscription readiness.",
    },
    {
        label: "Sep 2024",
        title: "Original Pancake House ended",
        description:
            "Wrapped a long-running high-volume service role after balancing it alongside software development and degree completion.",
    },
    {
        label: "May 2024",
        title: "Independent Contractor software work began",
        description:
            "Started delivering professional client-facing full-stack development work with TypeScript, React Router, Node.js, MongoDB, Redis, and Docker Compose.",
    },
    {
        label: "Fall 2023",
        title: "Graduated with B.S. in Computer Science",
        description:
            "Completed the University of Minnesota computer science program with a strong GPA and practical full-stack development focus.",
    },
    {
        label: "Dec 2016",
        title: "Original Pancake House began",
        description:
            "Built teamwork and communication in a fast-paced service environment while progressing toward a software engineering career.",
    },
];

export const whiteLabelDiagram: DiagramNode[] = [
    {
        label: "React Router App",
        subtitle: "Full-stack workflows and admin screens",
    },
    {
        label: "MongoDB / Mongoose",
        subtitle: "Service-layer data and persistence",
    },
    {
        label: "Redis / BullMQ Workers",
        subtitle: "Background jobs and async flows",
    },
    {
        label: "Stripe Checkout + Identity",
        subtitle: "Payments and verification",
    },
    { label: "Mailer + PDF Generation", subtitle: "Documents and automation" },
    {
        label: "Docker Compose / Vault / Cloudflare",
        subtitle: "Operations and deployment",
    },
];

export const rgjDiagram: DiagramNode[] = [
    { label: "React Native App", subtitle: "Workout, stats, auth, paywall" },
    {
        label: "API Client / React Query",
        subtitle: "Reliable API requests and client data flows",
    },
    { label: "React Router Backend", subtitle: "Service-layer API workflows" },
    {
        label: "Shared Contracts / OpenAPI",
        subtitle: "Type-safe contracts and validation",
    },
    { label: "MongoDB", subtitle: "Core application data" },
    {
        label: "Firebase Auth + RevenueCat",
        subtitle: "Auth and subscription readiness",
    },
    {
        label: "SQLite / Drizzle Local State",
        subtitle: "Drafts and execution state",
    },
];

export const resumeSections: ResumeSectionData[] = [
    {
        title: "Summary",
        content: [
            "Full-stack TypeScript developer with experience building client-facing SaaS and mobile products using React, React Native, React Router, Node.js, MongoDB, Redis, Docker Compose, and Stripe. Strong background in secure onboarding, payment processing, identity verification, API design, background workers, deployment automation, and mobile architecture. Experienced using spec-driven and AI-assisted development workflows to plan, implement, test, and stabilize production software.",
        ],
    },
    {
        title: "Technical Skills",
        content: [
            "Languages: TypeScript, JavaScript, SQL, C, C++",
            "Frontend: React, React Router, Vite, React Native, Expo, Expo Router, React Query, Zustand, Tailwind CSS, Radix UI, Framer Motion, responsive UI",
            "Backend: Node.js, Express, REST APIs, React Router backend routes, API design, OpenAPI, Zod, Mongoose, Stripe Webhooks, Firebase Admin",
            "Databases & Queues: MongoDB, Redis, SQL, Neo4j, RabbitMQ, BullMQ, Expo SQLite, Drizzle",
            "DevOps: Docker, Docker Compose, Linux, Cloudflare Tunnel, deployment automation, health checks, backup / restore workflows, MongoDB replica-set initialization, OpenBao / Vault, CI/CD, Git, Bash / shell scripting, Go",
            "Integrations: Stripe Checkout, Stripe Identity, Firebase Auth, RevenueCat, SMTP email, PDF generation",
            "Testing & Workflow: Jest, MSW, React Native Testing Library, OpenAPI validation, type safety, spec-driven development, AI-assisted development with Cline",
        ],
    },
    {
        title: "Professional Experience",
        entries: [
            {
                title: "Independent Contractor — Lead Full-Stack Developer",
                meta: "May 2024 – Present",
                bullets: [
                    "Led full-stack development of a client-facing white-label membership management platform using TypeScript, React Router, Node.js, MongoDB, Redis, Docker Compose, and Stripe.",
                    "Built secure onboarding workflows with email verification, Stripe Checkout, Stripe Identity, digital signatures, PDF generation, and automated email delivery.",
                    "Implemented reliable Stripe webhook processing for payment and identity verification workflows.",
                    "Designed role-based admin workflows for member updates, financial requests, polling, form management, backup operations, and maintenance tasks.",
                    "Hardened Docker Compose deployment workflows with MongoDB replica-set initialization, Redis, OpenBao/Vault, Cloudflare Tunnel, health checks, backup/restore, updates, and rollback automation.",
                    "Applied spec-driven and AI-assisted development workflows with Cline to plan, audit, implement, and validate production features while preserving TypeScript safety and release constraints.",
                ],
            },
        ],
    },
    {
        title: "Selected Projects",
        entries: [
            {
                title: "Routine Gym Journal — Independent Product Project",
                meta: "Active Development",
                bullets: [
                    "Designed and built a full-stack workout journaling platform using TypeScript, React Native, Expo Router, Node.js, MongoDB/Mongoose, Firebase Auth, RevenueCat, and OpenAPI-backed contracts.",
                    "Built a reliable React Native API layer with authentication, retry handling, offline-aware requests, and consistent error reporting across workout, stats, sharing, and user settings features.",
                    "Built backend APIs for workouts, programs, exercises, daily data, set logging, sharing, user preferences, and performance statistics using TypeScript, Zod, and MongoDB/Mongoose.",
                    "Developed mobile workout library, exercise picker, workout editor, guided execution, dashboard, stats, settings, auth, paywall, and sharing flows with React Query, Zustand, Expo SQLite, and Drizzle ORM.",
                    "Established production-ready patterns with Firebase Auth, RevenueCat webhook handling, Docker Compose services, health checks, and Jest/MSW test coverage.",
                ],
            },
            {
                title: "FitnessBytes — Full-Stack Social Fitness Platform",
                subtitle:
                    "React, Node.js, Express, MongoDB, Passport.js, Socket.IO",
                bullets: [
                    "Built a full-stack social fitness platform with user authentication, session management, real-time messaging/notifications, and responsive Material UI screens.",
                    "Implemented backend APIs with Node.js, Express, MongoDB, Passport.js, and Socket.IO.",
                ],
            },
        ],
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
