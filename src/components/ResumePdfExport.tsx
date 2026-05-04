import ResumeDocument from "./ResumeDocument";

const ResumePdfExport = () => (
    <div className="resume-pdf-export__page">
        <ResumeDocument compact exportMode />
    </div>
);

export default ResumePdfExport;
