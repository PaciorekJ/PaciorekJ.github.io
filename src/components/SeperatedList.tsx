import { ReactNode } from "react";

interface Props {
	data: string[] | ReactNode[];
	sep?: string;
}

const SeperatedList = ({ data, sep = ", " }: Props) => {
	return (
		<p>
			{data.reduce((prev, cur, curIndex) => {
				if (curIndex === 0) {
					return cur;
				}
				return prev + sep + cur;
			}, "")}
		</p>
	);
};

export default SeperatedList;
