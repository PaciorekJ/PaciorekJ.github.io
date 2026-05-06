import { TimelineEntry } from "../types/portfolio";

type TimelineItemProps = {
    entry: TimelineEntry;
};

const TimelineItem = ({ entry }: TimelineItemProps) => {
    return (
        <li className="timeline-item timeline-item--reveal">
            <div className="timeline-item__marker" aria-hidden="true" />
            <div className="timeline-item__content">
                <p className="timeline-item__label">{entry.label}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
            </div>
        </li>
    );
};

export default TimelineItem;
