import { Download } from "lucide-react";
import { useRef } from "react";
import generatePDF, { Margin, Resolution } from "react-to-pdf";
import ButtonLink from "../components/ButtonLink";
import ResumeDocument from "../components/ResumeDocument";
import ResumePdfExport from "../components/ResumePdfExport";
import SectionHeading from "../components/SectionHeading";

const ResumePage = () => {
    const pdfTargetRef = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = () => {
        if (!pdfTargetRef.current) {
            return;
        }

        generatePDF(pdfTargetRef, {
            filename: "Jason-Paciorek-Resume.pdf",
            method: "save",
            resolution: Resolution.HIGH,
            page: {
                margin: Margin.SMALL,
                format: "letter",
                orientation: "portrait",
            },
            overrides: {
                pdf: {
                    compress: true,
                },
                canvas: {
                    useCORS: true,
                },
            },
        });
    };

    return (
        <section className="shell section resume-page">
            <div className="resume-page__toolbar no-print">
                <SectionHeading
                    eyebrow="Resume"
                    title="Resume"
                    description="A focused one-page view of my full-stack, mobile, API, integration, and deployment experience."
                />
                <div className="resume-page__actions">
                    <ButtonLink variant="primary" onClick={handleDownloadPdf}>
                        <Download size={18} aria-hidden="true" /> Download PDF
                    </ButtonLink>
                </div>
            </div>

            <ResumeDocument />

            <div className="resume-pdf-export" aria-hidden="true">
                <div ref={pdfTargetRef}>
                    <ResumePdfExport />
                </div>
            </div>
        </section>
    );
};

export default ResumePage;
