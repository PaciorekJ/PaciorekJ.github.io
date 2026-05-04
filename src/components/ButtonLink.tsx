import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router";

type ButtonLinkProps = {
    to?: string;
    href?: string;
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
};

const ButtonLink = ({
    to,
    href,
    children,
    variant = "primary",
    className,
    onClick,
    target,
    rel,
    type = "button",
}: ButtonLinkProps) => {
    const classes = clsx("button-link", `button-link--${variant}`, className);

    if (to) {
        return (
            <Link className={classes} to={to} onClick={onClick}>
                {children}
            </Link>
        );
    }

    if (!href) {
        return (
            <button className={classes} type={type} onClick={onClick}>
                {children}
            </button>
        );
    }

    return (
        <a
            className={classes}
            href={href}
            onClick={onClick}
            target={target}
            rel={rel}>
            {children}
        </a>
    );
};

export default ButtonLink;
