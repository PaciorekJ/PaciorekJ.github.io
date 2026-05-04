import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import portraitJpg from "../assets/me.jpg";
import portraitWebp from "../assets/me.webp";
import ButtonLink from "../components/ButtonLink";
import ProjectCard from "../components/ProjectCard";
import RichText from "../components/RichText";
import SectionHeading from "../components/SectionHeading";
import {
    aboutHighlights,
    aboutSummary,
    featuredProjects,
    heroSummary,
    heroSupportLine,
    homeProofChips,
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
                <div className="hero-main">
                    <motion.div className="hero__content" {...heroAnimation}>
                        <p className="eyebrow">Jason Paciorek</p>
                        <h1>Full-Stack Developer</h1>
                        <p className="hero__summary">
                            <RichText text={heroSummary} />
                        </p>
                        <p className="hero__support">
                            <RichText text={heroSupportLine} />
                        </p>
                        <div className="hero__actions no-print">
                            <ButtonLink to="/resume" variant="primary">
                                View Resume
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
                    </motion.div>
                    <motion.div className="hero-card" {...heroAnimation}>
                        <div className="hero-card__inner">
                            <div className="hero-card__portrait-wrap no-print">
                                <picture>
                                    <source
                                        srcSet={portraitWebp}
                                        type="image/webp"
                                    />
                                    <img
                                        className="hero-card__portrait"
                                        src={portraitJpg}
                                        alt="Jason Paciorek"
                                        width="640"
                                        height="640"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="hero__proofs" {...heroAnimation}>
                    <div className="hero__proofs-header">
                        <p className="eyebrow">What I bring</p>
                    </div>
                    <div className="proof-chip-grid proof-chip-grid--hero">
                        {homeProofChips.map((chip) => (
                            <div className="proof-chip" key={chip.title}>
                                <p>
                                    <RichText text={chip.title} />
                                </p>
                                <span>{chip.description}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="shell section">
                <SectionHeading
                    eyebrow="About"
                    title="Software built around real workflows"
                />
                <div className="content-card">
                    <p>
                        <RichText text={aboutSummary} />
                    </p>
                    <div className="about-highlight-grid">
                        {aboutHighlights.map((item) => (
                            <div className="about-highlight" key={item.title}>
                                <h3>
                                    <RichText text={item.title} />
                                </h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="shell section">
                <SectionHeading
                    eyebrow="Featured projects"
                    title="Selected work with the strongest interview signal"
                    description="Two projects that show full-stack delivery, mobile architecture, integrations, and deployment ownership."
                />
                <div className="card-grid card-grid--projects">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section className="shell section">
                <SectionHeading
                    eyebrow="Core strengths"
                    title="Where I add the most value"
                />
                <div className="strength-grid">
                    {technicalStrengths.map((strength) => (
                        <div className="strength-card" key={strength.title}>
                            <h3>
                                <RichText text={strength.title} />
                            </h3>
                            <p>{strength.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
