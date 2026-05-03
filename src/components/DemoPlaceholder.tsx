type DemoPlaceholderProps = {
    label: string;
    status?: string;
};

const DemoPlaceholder = ({
    label,
    status = "Coming soon",
}: DemoPlaceholderProps) => (
    <div className="demo-placeholder">
        <div>
            <h4>{label}</h4>
            <p>Demo placeholder</p>
        </div>
        <span className="status-badge status-badge--muted">{status}</span>
    </div>
);

export default DemoPlaceholder;
