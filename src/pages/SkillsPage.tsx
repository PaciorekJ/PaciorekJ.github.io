import PageShell from "../components/PageShell";
import SkillBar from "../components/SkillBar";
import { skillCategories } from "../data/site";

const SkillsPage = () => (
    <PageShell
        eyebrow="Skills"
        title="Technical Strengths"
        description="A practical map of the tools I use to build web, mobile, backend, and deployment workflows.">
        <div className="card-grid">
            {skillCategories.map((category) => (
                <section className="content-card" key={category.title}>
                    <h3>{category.title}</h3>
                    <div className="skill-list">
                        {category.items.map((item) => (
                            <SkillBar
                                key={item.name}
                                name={item.name}
                                value={item.value}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    </PageShell>
);

export default SkillsPage;
