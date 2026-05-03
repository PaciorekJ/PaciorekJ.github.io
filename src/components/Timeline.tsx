import { TimelineEntry } from "../types/portfolio";
import TimelineItem from "./TimelineItem";

type TimelineProps = {
    items: TimelineEntry[];
};

const Timeline = ({ items }: TimelineProps) => (
    <ol className="timeline">
        {items.map((entry) => (
            <TimelineItem key={`${entry.label}-${entry.title}`} entry={entry} />
        ))}
    </ol>
);

export default Timeline;
