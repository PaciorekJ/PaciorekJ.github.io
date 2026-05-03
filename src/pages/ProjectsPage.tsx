import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/site";

const ProjectsPage = () => (
    <section className="shell section">
        <SectionHeading
            eyebrow="Projects"
            title="Case studies and selected portfolio work"
            description="Clear scope, accurate status labels, and recruiter-friendly descriptions without exposing confidential client details."
        />
        <div className="card-grid card-grid--projects">
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    </section>
);

export default ProjectsPage;
