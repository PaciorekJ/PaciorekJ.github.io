import { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type PageShellProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    actions?: ReactNode;
    children: ReactNode;
    className?: string;
};

const PageShell = ({
    eyebrow,
    title,
    description,
    actions,
    children,
    className = "",
}: PageShellProps) => (
    <section className={`shell section page-shell ${className}`.trim()}>
        <header className="page-shell__header">
            <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={description}
            />
            {actions ? (
                <div className="page-shell__actions">{actions}</div>
            ) : null}
        </header>
        <div className="page-shell__content">{children}</div>
    </section>
);

export default PageShell;
