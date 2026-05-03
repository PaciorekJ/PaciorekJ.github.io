import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "../types/portfolio";
import ButtonLink from "./ButtonLink";
import TechTag from "./TechTag";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            className="project-card"
            whileHover={
                reduceMotion
                    ? undefined
                    : { y: -4, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }
            }>
            <div className="project-card__header">
                <span className="status-badge">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
            </div>
            <div className="tag-row">
                {project.tech.slice(0, 6).map((tech) => (
                    <TechTag key={tech} label={tech} />
                ))}
            </div>
            <ButtonLink
                to={project.href}
                variant="ghost"
                className="project-card__cta">
                View case study <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
        </motion.article>
    );
};

export default ProjectCard;
