import { motion, useReducedMotion } from "framer-motion";

type SkillBarProps = {
    name: string;
    value: number;
};

const SkillBar = ({ name, value }: SkillBarProps) => {
    const reduceMotion = useReducedMotion();

    return (
        <div className="skill-bar">
            <div className="skill-bar__meta">
                <span>{name}</span>
                <span>{value}/10</span>
            </div>
            <div className="skill-bar__track" aria-hidden="true">
                <motion.div
                    className="skill-bar__fill"
                    initial={reduceMotion ? false : { width: 0 }}
                    whileInView={
                        reduceMotion ? undefined : { width: `${value * 10}%` }
                    }
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={
                        reduceMotion ? { width: `${value * 10}%` } : undefined
                    }
                />
            </div>
        </div>
    );
};

export default SkillBar;
