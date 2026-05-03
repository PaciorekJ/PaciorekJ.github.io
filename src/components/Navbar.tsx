import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { navItems } from "../data/site";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="site-header no-print">
            <div className="shell site-header__inner">
                <NavLink
                    className="brand"
                    to="/"
                    onClick={() => setIsOpen(false)}>
                    <span className="brand__name">Jason Paciorek</span>
                    <span className="brand__role">
                        Full-Stack TypeScript Developer
                    </span>
                </NavLink>
                <button
                    className="nav-toggle"
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation">
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <nav
                    className={`nav ${isOpen ? "nav--open" : ""}`}
                    aria-label="Primary">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `nav__link ${isActive ? "nav__link--active" : ""}`
                            }>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
