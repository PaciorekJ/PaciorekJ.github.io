import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { Project } from "../types/portfolio";
import ButtonLink from "./ButtonLink";
import ProjectStatusBadges from "./ProjectStatusBadges";
import RichText from "./RichText";
import TechTag from "./TechTag";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article
            className={clsx("project-card", {
                "project-card--secondary": !project.featured,
                "project-card--interactive": Boolean(project.href),
            })}>
            <div className="project-card__header">
                <ProjectStatusBadges
                    badges={project.badges}
                    status={project.status}
                    muted={!project.featured}
                    className="project-card__badges"
                />
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
            </div>
            <div className="tag-row">
                {project.tech.slice(0, 6).map((tech) => (
                    <TechTag key={tech} label={tech} />
                ))}
            </div>
            {project.href ? (
                <ButtonLink
                    to={project.external ? undefined : project.href}
                    href={project.external ? project.href : undefined}
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noreferrer" : undefined}
                    variant="ghost"
                    className="project-card__cta">
                    <RichText text={project.ctaLabel ?? "View project"} />{" "}
                    <ArrowRight size={16} aria-hidden="true" />
                </ButtonLink>
            ) : (
                <div className="project-card__summary">
                    <RichText text={project.ctaLabel ?? "Project summary"} />
                </div>
            )}
        </article>
    );
};

export default ProjectCard;
