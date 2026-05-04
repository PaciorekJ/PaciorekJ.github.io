import { Fragment } from "react";

type RichTextProps = {
    text: string;
    className?: string;
};

const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

const RichText = ({ text, className }: RichTextProps) => {
    const parts = text.split(pattern).filter(Boolean);

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <strong key={`${part}-${index}`}>
                            {part.slice(2, -2)}
                        </strong>
                    );
                }

                if (part.startsWith("*") && part.endsWith("*")) {
                    return (
                        <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
                    );
                }

                return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
            })}
        </span>
    );
};

export default RichText;
