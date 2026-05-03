import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";

const ContactPage = () => (
    <section className="shell section">
        <SectionHeading
            eyebrow="Contact"
            title="Open to full-time or contract software engineering roles"
            description="The easiest way to reach me is by email. GitHub and LinkedIn are included for quick recruiter review."
        />
        <div className="contact-layout">
            <div className="content-card">
                <div className="contact-list">
                    <a
                        href="mailto:paciorekjason@gmail.com"
                        className="contact-row">
                        <Mail size={18} aria-hidden="true" />
                        <span>paciorekjason@gmail.com</span>
                    </a>
                    <a
                        href="https://github.com/PaciorekJ"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-row">
                        <FaGithub size={18} aria-hidden="true" />
                        <span>github.com/PaciorekJ</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jasonpaciorek"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-row">
                        <FaLinkedin size={18} aria-hidden="true" />
                        <span>linkedin.com/in/jasonpaciorek</span>
                    </a>
                    <div className="contact-row">
                        <MapPin size={18} aria-hidden="true" />
                        <span>Apple Valley, MN</span>
                    </div>
                    <div className="contact-row contact-row--secondary">
                        <Phone size={18} aria-hidden="true" />
                        <span>(952) 297-2727</span>
                    </div>
                </div>
            </div>
            <div className="content-card content-card--accent no-print">
                <h3>Best next step</h3>
                <p>
                    If you're hiring for a full-stack TypeScript, React, React
                    Native, or Node.js role, email is the fastest way to start a
                    conversation.
                </p>
                <ButtonLink
                    href="mailto:paciorekjason@gmail.com"
                    variant="primary">
                    Email Me
                </ButtonLink>
            </div>
        </div>
    </section>
);

export default ContactPage;
