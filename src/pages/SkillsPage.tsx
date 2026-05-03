import SectionHeading from "../components/SectionHeading";
import SkillBar from "../components/SkillBar";
import { skillCategories } from "../data/site";

const SkillsPage = () => (
    <section className="shell section">
        <SectionHeading
            eyebrow="Skills"
            title="Technical strengths grouped for recruiter readability"
            description="Portfolio-only ratings to communicate relative confidence and recent hands-on depth."
        />
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
    </section>
);

export default SkillsPage;
