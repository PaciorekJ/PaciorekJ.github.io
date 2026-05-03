import { ArrowDown } from "lucide-react";
import { DiagramNode } from "../types/portfolio";

type ArchitectureDiagramProps = {
    title: string;
    nodes: DiagramNode[];
};

const ArchitectureDiagram = ({ title, nodes }: ArchitectureDiagramProps) => (
    <div className="diagram-card">
        <h3>{title}</h3>
        <div className="diagram-flow" role="list" aria-label={title}>
            {nodes.map((node, index) => (
                <div
                    className="diagram-flow__step"
                    key={node.label}
                    role="listitem">
                    <div className="diagram-node">
                        <strong>{node.label}</strong>
                        {node.subtitle ? <span>{node.subtitle}</span> : null}
                    </div>
                    {index < nodes.length - 1 ? (
                        <div className="diagram-arrow" aria-hidden="true">
                            <ArrowDown size={18} />
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    </div>
);

export default ArchitectureDiagram;
