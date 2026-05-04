import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import { timelineEntries } from "../data/site";

const ExperiencePage = () => (
    <section className="shell section">
        <SectionHeading
            eyebrow="Experience"
            title="Professional timeline"
            description="A concise view of recent software work, active product development, education, and the path into full-stack engineering."
        />
        <Timeline items={timelineEntries} />
    </section>
);

export default ExperiencePage;
