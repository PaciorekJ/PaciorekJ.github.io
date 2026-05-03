import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import { timelineEntries } from "../data/site";

const ExperiencePage = () => (
    <section className="shell section">
        <SectionHeading
            eyebrow="Experience"
            title="A concise timeline of recent professional and project milestones"
            description="Polished on-screen timeline for recruiters; the printable resume remains the ATS-focused source of truth."
        />
        <Timeline items={timelineEntries} />
    </section>
);

export default ExperiencePage;
