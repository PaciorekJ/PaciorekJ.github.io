import SectionProps from "../interface/SectionProps";

const projectData: SectionProps[] = [
	{
		header: (
			<>
				FitnessBytes (Feb-May 2024)
				<a href="https://www.fitness-bytes.com/">
					https://www.fitness-bytes.com/
				</a>
			</>
		),
		lists: [
			{
				values: [
					"Developed FitnessBytes, a full-stack social media platform, using React, Node.js, Express, and MongoDB, providing a robust and scalable backend infrastructure.",
					"Implemented user authentication and session management with Passport.js, ensuring secure and seamless user experiences.",
					"Integrated real-time features with Socket.IO, enhancing user engagement through instant messaging and notifications.",
					"Utilized Material-UI and responsive design principles to create a visually appealing and user-friendly interface, optimized for all devices.",
				],
			},
		],
	},
	{
		header: (
			<>
				GameHWND (Jan-Feb 2024)
				<a href="https://gamehwnd.vercel.app/">https://gamehwnd.vercel.app/</a>
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
];

export default projectData;

/**
 * {
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
 */
