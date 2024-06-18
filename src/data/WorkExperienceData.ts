import SectionProps from "../interface/SectionProps";

const workExperience: SectionProps[] = [
    {
        header: "Independent Contractor - Full-Stack Development",
        startDate: "May 2024",
        endDate: null, // 'null' indicates the person is currently employed here
        lists: [
            {
                header: "Full-Stack Developer",
                values: [
                    "Develop web applications independently in collaboration with a systems engineer.",
                    "Design and implement front-end interfaces using Remix, ShadCN and Tailwind.",
                    "Build and maintain back-end services and APIs using Node.js and Express.",
                    "Integrate a new database with the existing database to enhance data management capabilities.",
                    "Utilize Notion for requirements gathering and project management.",
                    "Use Git for version control and CI/CD processes.",
                    "Collaborate with clients to gather requirements and deliver customized solutions.",
                ],
            },
        ],
    },
    {
        header: "Original Pancake House, Edina, MN",
        startDate: "December 2016",
        endDate: null, // 'null' indicates the person is currently employed here
        lists: [
            {
                header: "Food Runner",
                values: [
                    "Lead communication between the kitchen, servers, customers, and front of the house.",
                    "Resolve conflicts between kitchen-server and server-customer.",
                    "Read and observe customer body language to better aid their needs.",
                    "Facilitate teamwork amongst the serving staff to deliver food efficiently.",
                ],
            },
            {
                header: "Server",
                values: [
                    "Effectively address and listen to customers' needs under the pressure of a fast-paced work environment.",
                ],
            },
        ],
    },
];

export default workExperience;
