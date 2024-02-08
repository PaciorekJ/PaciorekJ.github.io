import { ReactNode } from "react";
import "./index.css";

interface Props {
	src: string;
	alt?: string;
	href: string;
	children: ReactNode;
}

const ContactLink = ({ src, alt, href, children }: Props) => {
	return (
		<div className="ContactFieldContainer">
			<img className="icon" src={src} alt={alt} />
			<a href={href}>{children}</a>
		</div>
	);
};

export default ContactLink;
