import { Link } from "react-router";
import { ResumeSectionData } from "../types/portfolio";
import RichText from "./RichText";

const handleResumeProjectNavigation = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

type ResumeSectionProps = {
    section: ResumeSectionData;
};

const ResumeSection = ({ section }: ResumeSectionProps) => (
    <section className="resume-section">
        <h2>{section.title}</h2>
        {section.content?.map((line) => (
            <p key={line}>
                <RichText text={line} />
            </p>
        ))}
        {section.entries?.map((entry) => (
            <article
                className="resume-entry"
                key={`${entry.title}-${entry.meta ?? ""}`}>
                <div className="resume-entry__header">
                    <div>
                        <h3>
                            {entry.href ? (
                                <Link
                                    to={entry.href}
                                    className="resume-entry__link"
                                    onClick={handleResumeProjectNavigation}>
                                    {entry.title}
                                </Link>
                            ) : (
                                entry.title
                            )}
                        </h3>
                        {entry.subtitle ? (
                            <p>
                                <RichText text={entry.subtitle} />
                            </p>
                        ) : null}
                    </div>
                    {entry.meta ? <span>{entry.meta}</span> : null}
                </div>
                {entry.bullets ? (
                    <ul>
                        {entry.bullets.map((bullet) => (
                            <li key={bullet}>
                                <RichText text={bullet} />
                            </li>
                        ))}
                    </ul>
                ) : null}
            </article>
        ))}
    </section>
);

export default ResumeSection;
