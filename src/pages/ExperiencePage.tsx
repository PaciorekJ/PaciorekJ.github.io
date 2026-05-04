import PageShell from "../components/PageShell";
import Timeline from "../components/Timeline";
import { timelineEntries } from "../data/site";

const ExperiencePage = () => (
    <PageShell
        eyebrow="Experience"
        title="Professional timeline"
        description="A concise view of recent software work, active product development, education, and the path into full-stack engineering.">
        <Timeline items={timelineEntries} />
    </PageShell>
);

export default ExperiencePage;
