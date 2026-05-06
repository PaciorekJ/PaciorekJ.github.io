import { ArrowRight, Mail } from "lucide-react";
import {
    profile1024Jpeg,
    profile1024Webp,
    profile480Jpeg,
    profile480Webp,
    profile768Jpeg,
    profile768Webp,
} from "../assets";
import ButtonLink from "../components/ButtonLink";
import HomePageMetadata from "../components/HomePageMetadata";
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
    return (
        <>
            <HomePageMetadata />
            <div>
                <section className="hero shell section">
                    <div className="hero-main">
                        <div className="hero__intro hero-animate">
                            <p className="eyebrow">Jason Paciorek</p>
                            <h1>Full-Stack Developer</h1>
                        </div>
                        <div className="hero-card hero-animate">
                            <div className="hero-card__inner">
                                <div className="hero-card__portrait-wrap no-print">
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
                                            className="hero-card__portrait"
                                            src={profile768Webp}
                                            alt="Jason Paciorek"
                                            width="768"
                                            height="768"
                                            loading="eager"
                                            decoding="async"
                                            fetchPriority="high"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="hero__body hero-animate">
                            <p className="hero__summary">
                                <RichText text={heroSummary} />
                            </p>
                            <p className="hero__support">
                                <RichText text={heroSupportLine} />
                            </p>
                        </div>
                    </div>
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
                    <div className="hero__proofs hero-animate">
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
                    </div>
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
                                <div
                                    className="about-highlight"
                                    key={item.title}>
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
        </>
    );
};

export default HomePage;
