type ProjectStatusBadgesProps = {
    badges?: string[];
    status: string;
    muted?: boolean;
    className?: string;
};

const ProjectStatusBadges = ({
    badges,
    status,
    muted = false,
    className = "status-badge-row",
}: ProjectStatusBadgesProps) => {
    const badgeItems = badges?.length ? badges : [status];

    return (
        <div className={className}>
            {badgeItems.map((badge) => (
                <span
                    key={badge}
                    className={`status-badge${muted ? " status-badge--muted" : ""}`}>
                    {badge}
                </span>
            ))}
        </div>
    );
};

export default ProjectStatusBadges;
