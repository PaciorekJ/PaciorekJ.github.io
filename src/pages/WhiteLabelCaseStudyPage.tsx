import DemoPlaceholder from "../components/DemoPlaceholder";
import RichText from "../components/RichText";
import SectionHeading from "../components/SectionHeading";
import TechTag from "../components/TechTag";
import { projects } from "../data/site";

const project = projects.find(
    (item) => item.slug === "white-label-membership-platform",
);

if (!project) {
    throw new Error("White-label project data is missing.");
}

const WhiteLabelCaseStudyPage = () => (
    <div className="shell section case-study">
        <header className="case-study__hero">
            <span className="status-badge">{project.status}</span>
            <h1>{project.title}</h1>
            <p>
                <RichText text={project.subtitle ?? ""} />
            </p>
        </header>

        <section className="section-block">
            <SectionHeading title="Impact and significance" />
            <div className="impact-grid">
                {project.impact?.map((item) => (
                    <div className="impact-card" key={item.title}>
                        <h3>
                            <RichText text={item.title} />
                        </h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="What I built" />
            <div className="content-card">
                <ul className="bullet-list">
                    {project.highlights?.map((highlight) => (
                        <li key={highlight}>
                            <RichText text={highlight} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="Engineering highlights" />
            <div className="content-card">
                <ul className="bullet-list">
                    {project.engineering?.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="Key technologies" />
            <div className="tag-row tag-row--wrap">
                {project.tech.map((tech) => (
                    <TechTag key={tech} label={tech} />
                ))}
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
                title="Demos and walkthroughs"
                description="Short demo targets that show the most persuasive workflows first."
            />
            <div className="demo-grid">
                {project.demos?.map((demo) => (
                    <DemoPlaceholder
                        key={demo.label}
                        label={demo.label}
                        description={demo.description}
                    />
                ))}
            </div>
        </section>

        <section className="section-block">
            <SectionHeading title="Engineering value" />
            <div className="content-card">
                <ul className="bullet-list">
                    {project.systemOverview?.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    </div>
);

export default WhiteLabelCaseStudyPage;
