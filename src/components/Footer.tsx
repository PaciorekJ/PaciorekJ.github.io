import { contactLinks } from "../data/site";

const Footer = () => (
    <footer className="site-footer no-print">
        <div className="shell site-footer__inner">
            <div>
                <p className="site-footer__title">
                    Jason Paciorek — Full-Stack Developer
                </p>
            </div>
            <ul className="footer-links">
                {contactLinks
                    .filter((link) => link.href)
                    .map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer">
                                {link.label}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    </footer>
);

export default Footer;
