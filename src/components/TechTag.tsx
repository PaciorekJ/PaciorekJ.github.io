type TechTagProps = {
    label: string;
};

const TechTag = ({ label }: TechTagProps) => (
    <span className="tech-tag">{label}</span>
);

export default TechTag;
