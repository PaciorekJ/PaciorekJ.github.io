import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portraitJpg from "../assets/me.jpg";
import portraitWebp from "../assets/me.webp";
import ButtonLink from "../components/ButtonLink";
import PageShell from "../components/PageShell";

const ContactPage = () => (
    <PageShell eyebrow="Contact" title="Contact" className="contact-page">
        <div className="contact-layout">
            <div className="content-card contact-card-primary contact-layout__copy">
                <div className="contact-card__copy">
                    <p className="contact-card__lead">
                        Let&apos;s talk about software roles, contract work, or
                        full-stack product development.
                    </p>
                    <p className="contact-card__support">
                        I&apos;m open to full-time and contract software
                        engineering opportunities. If my work looks aligned with
                        what your team needs, email is the best way to start a
                        conversation.
                    </p>
                </div>
                <div className="contact-cta-group no-print">
                    <ButtonLink
                        href="mailto:paciorekjason@gmail.com"
                        variant="primary">
                        <Mail size={18} aria-hidden="true" /> Email Me
                    </ButtonLink>
                    <div className="contact-cta-grid">
                        <a
                            href="https://github.com/PaciorekJ"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-row contact-row--button">
                            <FaGithub size={18} aria-hidden="true" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jasonpaciorek"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-row contact-row--button">
                            <FaLinkedin size={18} aria-hidden="true" />
                            <span>LinkedIn</span>
                        </a>
                        <ButtonLink
                            to="/resume"
                            variant="ghost"
                            className="contact-row contact-row--button">
                            Resume
                        </ButtonLink>
                    </div>
                    <p className="contact-card__note">
                        GitHub and LinkedIn are included for quick review; the
                        resume is available as a one-page PDF.
                    </p>
                </div>
            </div>
            <aside className="no-print contact-card-photo-panel contact-layout__image">
                <div className="hero-card__portrait-wrap contact-photo-frame">
                    <picture>
                        <source srcSet={portraitWebp} type="image/webp" />
                        <img
                            className="hero-card__portrait contact-photo"
                            src={portraitJpg}
                            alt="Jason Paciorek"
                            width="640"
                            height="640"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>
            </aside>
        </div>
    </PageShell>
);

export default ContactPage;
