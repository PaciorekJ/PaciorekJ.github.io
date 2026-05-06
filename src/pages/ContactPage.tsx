import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
    profile1024Jpeg,
    profile1024Webp,
    profile480Jpeg,
    profile480Webp,
    profile768Jpeg,
    profile768Webp,
} from "../assets";
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
                        <source
                            type="image/webp"
                            srcSet={`${profile480Webp} 480w, ${profile768Webp} 768w, ${profile1024Webp} 1024w`}
                            sizes="(min-width: 768px) 300px, min(100vw - 2rem, 420px)"
                        />
                        <source
                            type="image/jpeg"
                            srcSet={`${profile480Jpeg} 480w, ${profile768Jpeg} 768w, ${profile1024Jpeg} 1024w`}
                            sizes="(min-width: 768px) 300px, min(100vw - 2rem, 420px)"
                        />
                        <img
                            className="hero-card__portrait contact-photo"
                            src={profile480Webp}
                            alt="Jason Paciorek"
                            width="480"
                            height="480"
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
