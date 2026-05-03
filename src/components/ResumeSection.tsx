import { ResumeSectionData } from "../types/portfolio";

type ResumeSectionProps = {
    section: ResumeSectionData;
};

const ResumeSection = ({ section }: ResumeSectionProps) => (
    <section className="resume-section">
        <h2>{section.title}</h2>
        {section.content?.map((line) => (
            <p key={line}>{line}</p>
        ))}
        {section.entries?.map((entry) => (
            <article
                className="resume-entry"
                key={`${entry.title}-${entry.meta ?? ""}`}>
                <div className="resume-entry__header">
                    <div>
                        <h3>{entry.title}</h3>
                        {entry.subtitle ? <p>{entry.subtitle}</p> : null}
                    </div>
                    {entry.meta ? <span>{entry.meta}</span> : null}
                </div>
                {entry.bullets ? (
                    <ul>
                        {entry.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                ) : null}
            </article>
        ))}
    </section>
);

export default ResumeSection;
