import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { earlierProjects, featuredProjects } from "../data/site";

const ProjectsPage = () => (
    <PageShell
        eyebrow="Projects"
        title="Projects"
        description="Selected work showing full-stack development, mobile architecture, integrations, and deployment ownership.">
        <section className="section-block">
            <SectionHeading title="Featured work" />
            <div className="card-grid card-grid--projects">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="Earlier portfolio projects" />
            <div className="card-grid card-grid--projects">
                {earlierProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    </PageShell>
);

export default ProjectsPage;
