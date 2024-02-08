import { ReactNode } from "react";

interface SectionList {
	header?: string | ReactNode;
	values?: string[];
}

export interface SectionProps {
	header?: string | ReactNode;
	startDate?: string;
	endDate?: string | null; // null for present jobs
	lists?: SectionList[];
}

export default SectionProps;