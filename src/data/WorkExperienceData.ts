import SectionProps from "../interface/SectionProps";

const workExperience: SectionProps[] = [{
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
}];

export default workExperience;