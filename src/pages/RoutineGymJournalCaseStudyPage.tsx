import ArchitectureDiagram from "../components/ArchitectureDiagram";
import DemoPlaceholder from "../components/DemoPlaceholder";
import SectionHeading from "../components/SectionHeading";
import TechTag from "../components/TechTag";
import { projects, rgjDiagram } from "../data/site";

const project = projects.find((item) => item.slug === "routine-gym-journal");

if (!project) {
    throw new Error("Routine Gym Journal project data is missing.");
}

const RoutineGymJournalCaseStudyPage = () => (
    <div className="shell section case-study">
        <header className="case-study__hero">
            <span className="status-badge">{project.status}</span>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
        </header>

        <section className="section-block">
            <SectionHeading title="Project scope" />
            <div className="content-card">
                <ul className="bullet-list">
                    {project.highlights?.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="Primary technologies" />
            <div className="tag-row tag-row--wrap">
                {project.tech.map((tech) => (
                    <TechTag key={tech} label={tech} />
                ))}
            </div>
        </section>

        <section className="section-block two-column">
            <div>
                <SectionHeading title="Architecture highlights" />
                <div className="content-card">
                    <ul className="bullet-list">
                        {project.architecture?.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <ArchitectureDiagram
                title="Routine Gym Journal architecture"
                nodes={rgjDiagram}
            />
        </section>

        <section className="section-block">
            <SectionHeading title="Current status" />
            <div className="content-card">
                <p>{project.currentStatus}</p>
                <p>
                    Local persistence is implemented with{" "}
                    <strong>Expo SQLite + Drizzle</strong>, and the project does
                    not claim app-store launch, real users, revenue, full
                    offline-first sync, WatermelonDB, or production-ready push
                    notifications.
                </p>
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="What I owned" />
            <div className="content-card">
                <ul className="bullet-list">
                    {project.ownership?.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="section-block">
            <SectionHeading
                title="Demo placeholders"
                description="Reserved areas for future walkthrough clips and architecture demos."
            />
            <div className="demo-grid">
                {project.demos?.map((demo) => (
                    <DemoPlaceholder key={demo} label={demo} />
                ))}
            </div>
        </section>
    </div>
);

export default RoutineGymJournalCaseStudyPage;
