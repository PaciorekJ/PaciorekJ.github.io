import { ReactNode } from "react";
import "./index.css";

interface Props {
	header: string;
	className?: string;
	children: ReactNode;
}

const Article = ({ header, className, children }: Props) => {
	return (
		<article className={className ? "article " + className : "article"}>
			<h2>{header}</h2>
			{children}
		</article>
	);
};

export default Article;
