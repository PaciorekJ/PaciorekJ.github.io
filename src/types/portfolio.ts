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
    | "Completed Portfolio Project / On Hiatus"
    | "Independent Product Project — Active Development";

export type ProjectCardItem = {
    title: string;
    description: string;
};

export type ProjectDemo = {
    label: string;
    description: string;
};

export type Project = {
    slug: string;
    title: string;
    status: ProjectStatus;
    badges?: string[];
    description: string;
    shortDescription: string;
    tech: string[];
    href?: string;
    ctaLabel?: string;
    external?: boolean;
    caseStudy?: boolean;
    featured?: boolean;
    subtitle?: string;
    impact?: ProjectCardItem[];
    highlights?: string[];
    engineering?: string[];
    ownership?: string[];
    systemOverview?: string[];
    demos?: ProjectDemo[];
    note?: string;
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
    href?: string;
    pdfUrl?: string;
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
