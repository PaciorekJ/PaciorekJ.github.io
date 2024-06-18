import Article from "./components/Article";
import ContactLink from "./components/ContactField";
import Header from "./components/Header";
import Section from "./components/Section";
import SeperatedList from "./components/SeperatedList";

import contacts from "./data/ContactData";
import educationData from "./data/EducationData";
import projectData from "./data/ProjectData";
import courses from "./data/RelevantCourses";
import skills from "./data/SkillData";
import volunteerData from "./data/VolunteerData";
import workExperience from "./data/WorkExperienceData";

const Resume = () => {
	return (
		<div>
			<button
				onClick={() => window.print()}
				className="btn btn-download optional hidden-mobile">
				Download PDF
			</button>
			<Header></Header>
			<div id="content" className="grid">
				<div className="grid-item accent-right">
					<Article header="CONTACT">
						{contacts.map((c) => (
							<ContactLink key={c.src} {...c}>
								{c.displayText}
							</ContactLink>
						))}
					</Article>
					<Article header="SKILLS">
						<SeperatedList data={skills} />
					</Article>
					<Article header="EDUCATION">
						<Section data={educationData} />
					</Article>
					<Article header="RELEVANT COURSES">
						<SeperatedList data={courses} />
					</Article>
					<Article header="VOLUNTEER WORK">
						<Section data={volunteerData} />
					</Article>
				</div>
				<div className="grid-item">
					<Article header="PROJECTS">
						<Section data={projectData} />
					</Article>
					<Article header="WORK EXPERIENCE">
						<Section data={workExperience} />
					</Article>
				</div>
			</div>
		</div>
	);
};

export default Resume;
