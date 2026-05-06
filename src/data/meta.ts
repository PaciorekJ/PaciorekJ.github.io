export const ROUTE_PATHS = {
    HOME: "/",
    RESUME: "/resume",
    SKILLS: "/skills",
    PROJECTS: "/projects",
    WHITE_LABEL_MEMBERSHIP_PLATFORM:
        "/projects/white-label-membership-platform",
    ROUTINE_GYM_JOURNAL: "/projects/routine-gym-journal",
    FITNESSBYTES: "/projects/fitnessbytes",
    GAMEHWND: "/projects/gamehwnd",
    EXPERIENCE: "/experience",
    CONTACT: "/contact",
} as const;

export type RoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

export type PageMeta = {
    title: string;
    description: string;
    path: RoutePath;
};

export const META_MAP = {
    [ROUTE_PATHS.HOME]: {
        title: "Jason Paciorek | Full-Stack Developer",
        description:
            "Jason Paciorek is a full-stack developer building production web and mobile applications with React, React Native, Node.js, MongoDB, Docker, Stripe, and OpenAPI-backed contracts.",
        path: ROUTE_PATHS.HOME,
    },
    [ROUTE_PATHS.RESUME]: {
        title: "Resume | Jason Paciorek",
        description:
            "Software engineering resume for Jason Paciorek, a full-stack developer experienced with React, React Native, Node.js, MongoDB, Docker, Stripe, and production SaaS platforms.",
        path: ROUTE_PATHS.RESUME,
    },
    [ROUTE_PATHS.SKILLS]: {
        title: "Skills | Jason Paciorek",
        description:
            "Technical skills for Jason Paciorek, including TypeScript, React, React Native, Node.js, MongoDB, Redis, Docker, OpenAPI, Stripe integrations, and full-stack product development.",
        path: ROUTE_PATHS.SKILLS,
    },
    [ROUTE_PATHS.PROJECTS]: {
        title: "Projects | Jason Paciorek",
        description:
            "Selected software projects by Jason Paciorek, including SaaS platforms, mobile app architecture, API integrations, deployment workflows, and production case studies.",
        path: ROUTE_PATHS.PROJECTS,
    },
    [ROUTE_PATHS.WHITE_LABEL_MEMBERSHIP_PLATFORM]: {
        title: "White-Label Membership Platform | Jason Paciorek",
        description:
            "Case study for a white-label membership platform built with React, Node.js, MongoDB, Stripe, identity verification, webhooks, and production deployment workflows.",
        path: ROUTE_PATHS.WHITE_LABEL_MEMBERSHIP_PLATFORM,
    },
    [ROUTE_PATHS.ROUTINE_GYM_JOURNAL]: {
        title: "Routine Gym Journal | Jason Paciorek",
        description:
            "Case study for Routine Gym Journal, a workout journaling and programming app with React Native, Firebase authentication, MongoDB, offline-first planning, and gamification.",
        path: ROUTE_PATHS.ROUTINE_GYM_JOURNAL,
    },
    [ROUTE_PATHS.FITNESSBYTES]: {
        title: "FitnessBytes | Jason Paciorek",
        description:
            "Case study for FitnessBytes, a fitness-focused software project by Jason Paciorek showcasing full-stack development, user workflows, and product-focused engineering.",
        path: ROUTE_PATHS.FITNESSBYTES,
    },
    [ROUTE_PATHS.GAMEHWND]: {
        title: "GameHwnd | Jason Paciorek",
        description:
            "Case study for GameHwnd, a software project by Jason Paciorek focused on gaming utilities, application architecture, and practical full-stack development.",
        path: ROUTE_PATHS.GAMEHWND,
    },
    [ROUTE_PATHS.EXPERIENCE]: {
        title: "Experience | Jason Paciorek",
        description:
            "Professional experience for Jason Paciorek, including full-stack development, SaaS engineering, mobile app development, API integrations, deployment, and production support.",
        path: ROUTE_PATHS.EXPERIENCE,
    },
    [ROUTE_PATHS.CONTACT]: {
        title: "Contact | Jason Paciorek",
        description:
            "Contact Jason Paciorek for software engineering roles, contract work, full-stack product development, React, React Native, Node.js, and SaaS development opportunities.",
        path: ROUTE_PATHS.CONTACT,
    },
} as const satisfies Record<RoutePath, PageMeta>;

export type MetaMap = typeof META_MAP;
export type MetaMapKey = keyof MetaMap;
