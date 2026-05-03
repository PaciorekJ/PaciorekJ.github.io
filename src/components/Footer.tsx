import { contactLinks } from "../data/site";

const Footer = () => (
    <footer className="site-footer no-print">
        <div className="shell site-footer__inner">
            <div>
                <p className="site-footer__title">Jason Paciorek</p>
                <p>Open to full-time or contract software engineering roles.</p>
            </div>
            <ul className="footer-links">
                {contactLinks.map((link) => (
                    <li key={link.label}>
                        {link.href ? (
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer">
                                {link.label}
                            </a>
                        ) : (
                            <span>{link.value}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </footer>
);

export default Footer;
