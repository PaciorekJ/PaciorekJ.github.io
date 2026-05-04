import {
    resumeContactLinks,
    resumePdfContactLinks,
    resumeSections,
} from "../data/site";
import { ContactLink, ResumeSectionData } from "../types/portfolio";
import ResumeSection from "./ResumeSection";

type ResumeDocumentProps = {
    compact?: boolean;
    exportMode?: boolean;
    contactLinks?: ContactLink[];
    sections?: ResumeSectionData[];
};

const ResumeDocument = ({
    compact = false,
    exportMode = false,
    contactLinks = exportMode ? resumePdfContactLinks : resumeContactLinks,
    sections = resumeSections,
}: ResumeDocumentProps) => (
    <article
        className={`resume-document ${compact ? "resume-document--compact" : ""} ${
            exportMode ? "resume-document--export" : ""
        }`}>
        <header className="resume-document__header">
            <div>
                <h1>Jason Paciorek</h1>
                <p>Full-Stack Developer</p>
            </div>
            <ul className="resume-contact-list">
                {contactLinks.map((link, index) => (
                    <li key={`${link.label}-${link.value}`}>
                        {link.href ? (
                            <a href={link.href}>{link.value}</a>
                        ) : (
                            link.value
                        )}
                        {index < contactLinks.length - 1 ? (
                            <span className="resume-contact-list__separator">
                                |
                            </span>
                        ) : null}
                    </li>
                ))}
            </ul>
        </header>

        {sections.map((section) => (
            <ResumeSection key={section.title} section={section} />
        ))}
    </article>
);

export default ResumeDocument;
