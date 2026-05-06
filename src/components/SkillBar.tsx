type SkillBarProps = {
    name: string;
    value: number;
};

const SkillBar = ({ name, value }: SkillBarProps) => {
    return (
        <div className="skill-bar">
            <div className="skill-bar__meta">
                <span>{name}</span>
                <span>{value}/10</span>
            </div>
            <div className="skill-bar__track" aria-hidden="true">
                <div
                    className="skill-bar__fill"
                    style={{ width: `${value * 10}%` }}
                />
            </div>
        </div>
    );
};

export default SkillBar;
