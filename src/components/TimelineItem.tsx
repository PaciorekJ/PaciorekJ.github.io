import { motion, useReducedMotion } from "framer-motion";
import { TimelineEntry } from "../types/portfolio";

type TimelineItemProps = {
    entry: TimelineEntry;
};

const TimelineItem = ({ entry }: TimelineItemProps) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.li
            className="timeline-item"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}>
            <div className="timeline-item__marker" aria-hidden="true" />
            <div className="timeline-item__content">
                <p className="timeline-item__label">{entry.label}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
            </div>
        </motion.li>
    );
};

export default TimelineItem;
