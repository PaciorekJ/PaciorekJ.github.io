import Contact from "../interface/ContactData";

import envelope from "../assets/envelope.svg";
import phone from "../assets/phone.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import location from "../assets/location.svg";


const contacts: Contact[] = [
	{
		src: envelope,
		alt: "mail icon",
		href: "mailto:paciorekjason@gmail.com",
		displayText: "paciorekjason@gmail.com",
	},
	{
		src: phone,
		alt: "phone icon",
		href: "tel:9522972727",
		displayText: "(952) 297-2727",
	},
	{
		src: github,
		alt: "github icon",
		href: "https://github.com/PaciorekJ",
		displayText: "https://github.com/PaciorekJ",
	},
	{
		src: linkedin,
		alt: "linkedin icon",
		href: "https://www.linkedin.com/in/jasonpaciorek",
		displayText: "https://www.linkedin.com/in/jasonpaciorek",
	},
	{
		src: location,
		alt: "location icon",
		href: "",
		displayText: "Apple Valley, MN",
	},
];

export default contacts;
