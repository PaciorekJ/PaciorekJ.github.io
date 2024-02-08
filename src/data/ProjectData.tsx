import SectionProps from "../interface/SectionProps";

const projectData: SectionProps[] = [
	{
		header: (
			<>
				GameHWND (Jan-Feb 2024)
				<a href="https://github.com/PaciorekJ/GameHWND">
					https://github.com/PaciorekJ/GameHWND
				</a>
			</>
		),
		lists: [
			{
				values: [
					"Independently developed and launched GameHWND, a React-based game discovery platform, integrating Zustand and React Query to facilitate seamless user interactions and data management.",
					"Designed and implemented a responsive, user-friendly interface with Chakra UI, ensuring optimal accessibility and engagement.",
					"Oversaw the entire project lifecycle, from conceptualization to deployment on Vercel, emphasizing performance, scalability, and user-centric features.",
					"Utilized TypeScript for enhanced code reliability and maintenance, driving the project to successful implementation.",
				],
			},
		],
	},
	{
		header: (
			<>
				Website Moshify (April-May 2023)
				<a href="https://moshify-jason-paciorek.netlify.app/">
					https://moshify-jason-paciorek.netlify.app/
				</a>
			</>
		),
		lists: [
			{
				values: [
					"Website built with HTML5, CSS3, and Javascript. It was designed based on a mock design",
					"The website was constructed using a component-driven methodology",
					"The layout is responsive to both mobile and desktop",
					"Parcel and Netlify were used for the deployment of the website",
				],
			},
		],
	},
	{
		header: (
			<>
				Website Resume (January 2023 - Present)
				<a href="https://PaciorekJ.github.io">https://PaciorekJ.github.io</a>
			</>
		),
		lists: [
			{
				values: [
					"Resume built with React and Typescript.",
					"Resume hosted on GitHub pages.",
					"Layout is responsive to printers, mobile, and desktops",
				],
			},
		],
	},
	{
		header: "Browser and Server in C (October 2022)",
		lists: [
			{
				values: [
					"Browser used multiprocessing to handle multiple tabs.",
					"Browser utilized non-blocking IPC via pipes to communicate with a controller parent process.",
					"The server had a cache for content requests using a FIFO replacement policy.",
					"The server employed sockets to accept client connections to the server. The server used multithreading with a worker and dispatcher threading model to handle HTTP requests from the client.",
				],
			},
		],
	},
	// {
	// 	header: (
	// 		<>
	// 			Blackjack Game (May 2019)
	// 			<a href="https://github.com/PaciorekJ/Blackjack-Project">
	// 				https://github.com/PaciorekJ/Blackjack-Project
	// 			</a>
	// 		</>
	// 	),
	// 	lists: [
	// 		{
	// 			values: [
	// 				"Built using Java",
	// 				"A Blackjack game with a betting system. Follows traditional rules of blackjack gameplay.",
	// 				"Used processing 3's library to design the GUI.",
	// 			],
	// 		},
	// 	],
	// },
];

export default projectData;
