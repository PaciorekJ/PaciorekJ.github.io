import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, Printer } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import {
    aboutSummary,
    heroSummary,
    projectPreview,
    technicalStrengths,
} from "../data/site";

const HomePage = () => {
    const reduceMotion = useReducedMotion();
    const heroAnimation = reduceMotion
        ? undefined
        : {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
          };

    return (
        <div>
            <section className="hero shell section">
                <motion.div className="hero__content" {...heroAnimation}>
                    <p className="eyebrow">Jason Paciorek</p>
                    <h1>Full-Stack TypeScript Developer</h1>
                    <p className="hero__summary">{heroSummary}</p>
                    <div className="hero__actions no-print">
                        <ButtonLink to="/resume" variant="primary">
                            <Download size={18} aria-hidden="true" /> Download
                            Resume
                        </ButtonLink>
                        <ButtonLink
                            href="mailto:paciorekjason@gmail.com"
                            variant="secondary">
                            <Mail size={18} aria-hidden="true" /> Email Me
                        </ButtonLink>
                        <ButtonLink to="/projects" variant="ghost">
                            View Projects{" "}
                            <ArrowRight size={18} aria-hidden="true" />
                        </ButtonLink>
                    </div>
                    <div className="hero__actions hero__actions--print no-print">
                        <ButtonLink to="/resume" variant="ghost">
                            <Printer size={18} aria-hidden="true" /> Print
                            Resume
                        </ButtonLink>
                    </div>
                </motion.div>
                <motion.div className="hero-card" {...heroAnimation}>
                    <div className="hero-card__inner">
                        <div className="hero-card__avatar" aria-hidden="true">
                            JP
                        </div>
                        <h2>Recruiter-friendly snapshot</h2>
                        <ul>
                            <li>Full-stack TypeScript focus</li>
                            <li>Client-facing production workflows</li>
                            <li>React, Node.js, MongoDB, Docker, Stripe</li>
                            <li>
                                Mobile product architecture with React Native
                                and Expo
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </section>

            <section className="shell section">
                <SectionHeading
                    eyebrow="About"
                    title="Production-focused software engineering"
                />
                <div className="content-card">
                    <p>{aboutSummary}</p>
                </div>
            </section>

            <section className="shell section">
                <SectionHeading
                    eyebrow="Featured projects"
                    title="Recent work and active development"
                    description="Focused project snapshots with accurate status labels and clear full-stack positioning."
                />
                <div className="card-grid card-grid--projects">
                    {projectPreview.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section className="shell section">
                <SectionHeading
                    eyebrow="Technical strengths"
                    title="What I’m strongest at"
                />
                <div className="strength-grid">
                    {technicalStrengths.map((strength) => (
                        <div className="strength-card" key={strength}>
                            <h3>{strength}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
