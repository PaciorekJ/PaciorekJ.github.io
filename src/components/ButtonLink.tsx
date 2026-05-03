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
}: ButtonLinkProps) => {
    const classes = clsx("button-link", `button-link--${variant}`, className);

    if (to) {
        return (
            <Link className={classes} to={to} onClick={onClick}>
                {children}
            </Link>
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
