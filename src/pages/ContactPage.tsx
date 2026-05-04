import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portraitJpg from "../assets/me.jpg";
import portraitWebp from "../assets/me.webp";
import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";

const ContactPage = () => (
    <section className="shell section">
        <SectionHeading
            eyebrow="Contact"
            title="Open to full-time and contract software engineering roles"
            description="If your team needs a developer who can move across frontend, backend, mobile, integrations, and deployment workflows, email is the best way to reach me."
        />
        <div className="contact-layout">
            <div className="content-card contact-card-primary">
                <div className="contact-page__actions no-print">
                    <div className="contact-card-photo-panel__copy">
                        <h3>Quick links</h3>
                        <p>
                            Reach out by email, then use GitHub, LinkedIn, and
                            my resume for a fast review of technical fit.
                        </p>
                    </div>
                    <div className="contact-list contact-list--compact">
                        <a
                            href="mailto:paciorekjason@gmail.com"
                            className="contact-row">
                            <Mail size={18} aria-hidden="true" />
                            <strong>Email</strong>
                        </a>
                        <a
                            href="https://github.com/PaciorekJ"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-row">
                            <FaGithub size={18} aria-hidden="true" />
                            <strong>GitHub</strong>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jasonpaciorek"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-row">
                            <FaLinkedin size={18} aria-hidden="true" />
                            <strong>LinkedIn</strong>
                        </a>
                        <ButtonLink
                            to="/resume"
                            variant="ghost"
                            className="contact-row contact-row--button">
                            Resume <ArrowRight size={16} aria-hidden="true" />
                        </ButtonLink>
                    </div>
                </div>
                <p className="contact-card__note">
                    Best way to reach me: email. GitHub and LinkedIn are
                    included for a quick technical review.
                </p>
            </div>
            <div className="content-card content-card--accent no-print contact-card-photo-panel">
                <div className="contact-card-photo">
                    <div className="contact-photo-frame">
                        <picture>
                            <source srcSet={portraitWebp} type="image/webp" />
                            <img
                                className="contact-photo"
                                src={portraitJpg}
                                alt="Jason Paciorek"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactPage;
