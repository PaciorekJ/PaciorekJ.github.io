import { Printer } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import ResumeSection from "../components/ResumeSection";
import { resumeContactLinks, resumeSections } from "../data/site";

const ResumePage = () => (
    <section className="shell section resume-page">
        <div className="resume-page__toolbar no-print">
            <div>
                <p className="eyebrow">Resume</p>
                <h1>Jason Paciorek</h1>
                <p>Full-Stack TypeScript Developer</p>
            </div>
            <ButtonLink variant="primary" onClick={() => window.print()}>
                <Printer size={18} aria-hidden="true" /> Print / Save as PDF
            </ButtonLink>
        </div>

        <article className="resume-document">
            <header className="resume-document__header">
                <div>
                    <h1>Jason Paciorek</h1>
                    <p>Full-Stack TypeScript Developer</p>
                </div>
                <ul className="resume-contact-list">
                    {resumeContactLinks.map((link) => (
                        <li key={`${link.label}-${link.value}`}>
                            <strong>{link.label}:</strong>{" "}
                            {link.href ? (
                                <a href={link.href}>{link.value}</a>
                            ) : (
                                link.value
                            )}
                        </li>
                    ))}
                </ul>
            </header>

            {resumeSections.map((section) => (
                <ResumeSection key={section.title} section={section} />
            ))}
        </article>
    </section>
);

export default ResumePage;
