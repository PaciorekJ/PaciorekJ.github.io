export type NavItem = {
    label: string;
    to: string;
};

export type ContactLink = {
    label: string;
    value: string;
    href?: string;
    primary?: boolean;
};

export type ProjectStatus =
    | "Client SaaS Project"
    | "Active Development"
    | "Completed Portfolio Project"
    | "Independent Product Project — Active Development";

export type Project = {
    slug: string;
    title: string;
    status: ProjectStatus;
    description: string;
    shortDescription: string;
    tech: string[];
    href: string;
    featured?: boolean;
    highlights?: string[];
    architecture?: string[];
    ownership?: string[];
    demos?: string[];
    subtitle?: string;
    currentStatus?: string;
};

export type SkillCategory = {
    title: string;
    items: { name: string; value: number }[];
};

export type TimelineEntry = {
    label: string;
    title: string;
    description: string;
};

export type ResumeEntry = {
    title: string;
    subtitle?: string;
    meta?: string;
    bullets?: string[];
};

export type ResumeSectionData = {
    title: string;
    entries?: ResumeEntry[];
    content?: string[];
};

export type DiagramNode = {
    label: string;
    subtitle?: string;
};
