import { pdf } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import PageShell from "../components/PageShell";
import ResumeDocument from "../components/ResumeDocument";
import ResumePdfDocument from "../components/ResumePdfDocument";

const ResumePage = () => {
    const handleDownloadPdf = async () => {
        const blob = await pdf(<ResumePdfDocument />).toBlob();
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = objectUrl;
        link.download = "Jason-Paciorek-Resume.pdf";
        link.click();

        URL.revokeObjectURL(objectUrl);
    };

    return (
        <PageShell
            eyebrow="Resume"
            title="Resume"
            description="Focused one-page software engineering resume."
            actions={
                <div className="resume-page__actions no-print">
                    <ButtonLink variant="primary" onClick={handleDownloadPdf}>
                        <Download size={18} aria-hidden="true" /> Download PDF
                    </ButtonLink>
                </div>
            }>
            <ResumeDocument />
        </PageShell>
    );
};

export default ResumePage;
