type DemoPlaceholderProps = {
    label: string;
    description: string;
    status?: string;
};

const DemoPlaceholder = ({
    label,
    description,
    status = "Coming soon",
}: DemoPlaceholderProps) => (
    <div className="demo-placeholder">
        <div>
            <h4>{label}</h4>
            <p>{description}</p>
        </div>
        <span className="status-badge status-badge--muted">{status}</span>
    </div>
);

export default DemoPlaceholder;
