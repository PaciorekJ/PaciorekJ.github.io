import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { navItems } from "../data/site";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof document === "undefined") {
            return "light";
        }

        return document.documentElement.dataset.theme === "dark"
            ? "dark"
            : "light";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light",
        );
    };

    return (
        <header className="site-header no-print">
            <div className="shell site-header__inner">
                <NavLink
                    className="brand"
                    to="/"
                    onClick={() => setIsOpen(false)}>
                    <span className="brand__name">Jason Paciorek</span>
                    <span className="brand__role">Full-Stack Developer</span>
                </NavLink>
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
                <div className="site-header__controls">
                    <button
                        className="theme-toggle"
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
                        {theme === "light" ? (
                            <Moon size={18} aria-hidden="true" />
                        ) : (
                            <Sun size={18} aria-hidden="true" />
                        )}
                    </button>
                    <button
                        className="nav-toggle"
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
