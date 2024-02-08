import React from "react";
import SectionProps from "../../interface/SectionProps";
import "./index.css";
interface Props {
	className?: string;
	data: SectionProps[];
}

const Section = ({ className, data }: Props) => {
	return data.map(({ header, lists, startDate, endDate }, i) => (
		<article
			key={"header " + i}
			className={className ? "section " + className : "section"}>
			{header && <h3>{header}</h3>}
			{startDate && (
				<p>
					{startDate} - {endDate ? endDate : "Present"}
				</p>
			)}
			{lists &&
				lists.map((l, i) => (
					<React.Fragment key={(l.values?.length || 1) * i}>
						{l.header && <h4>{l.header}</h4>}
						{l.values && (
							<ul>
								{l.values.map((li, i) => (
									<li key={i}>{li}</li>
								))}
							</ul>
						)}
					</React.Fragment>
				))}
		</article>
	));
};

export default Section;
