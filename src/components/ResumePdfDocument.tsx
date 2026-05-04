import {
    Document,
    Font,
    Link,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";
import {
    portfolioBaseUrl,
    resumePdfContactLinks,
    resumeSections,
} from "../data/site";
import { ResumeEntry, ResumeSectionData } from "../types/portfolio";

const PAGE_PADDING_X = 34;
const PAGE_PADDING_Y = 30;

Font.registerHyphenationCallback((word: string) => [word]);

const styles = StyleSheet.create({
    page: {
        paddingTop: PAGE_PADDING_Y,
        paddingBottom: PAGE_PADDING_Y,
        paddingHorizontal: PAGE_PADDING_X,
        backgroundColor: "#ffffff",
        color: "#0f172a",
        fontFamily: "Helvetica",
        fontSize: 8.5,
        lineHeight: 1.22,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#cbd5e1",
        paddingBottom: 5,
        marginBottom: 5,
    },
    nameBlock: {
        flexShrink: 1,
        maxWidth: "48%",
    },
    name: {
        fontSize: 17,
        fontWeight: 700,
        lineHeight: 1.05,
        marginBottom: 2,
    },
    role: {
        fontSize: 9,
        color: "#334155",
    },
    contactList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        gap: 6,
        maxWidth: "50%",
    },
    contactItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    link: {
        color: "#1d4ed8",
        textDecoration: "none",
    },
    separator: {
        color: "#64748b",
    },
    section: {
        paddingTop: 4,
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: "#e2e8f0",
    },
    sectionTitle: {
        fontSize: 9,
        fontWeight: 700,
        marginBottom: 2,
        textTransform: "uppercase",
        letterSpacing: 0.35,
    },
    paragraph: {
        color: "#334155",
        marginBottom: 1,
    },
    entry: {
        marginTop: 2,
    },
    entryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8,
        marginBottom: 1,
    },
    entryTitleBlock: {
        flexShrink: 1,
        maxWidth: "76%",
    },
    entryTitle: {
        fontSize: 8.7,
        fontWeight: 700,
        color: "#0f172a",
    },
    entryMeta: {
        fontSize: 8,
        color: "#475569",
        textAlign: "right",
        flexShrink: 0,
    },
    entrySubtitle: {
        color: "#334155",
        marginTop: 0.5,
    },
    entryUrl: {
        marginTop: 0.5,
        fontSize: 7.4,
        color: "#1d4ed8",
    },
    bulletList: {
        marginTop: 1.5,
    },
    bulletRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 4,
        marginBottom: 0.5,
    },
    bulletMarker: {
        width: 8,
        fontWeight: 700,
        color: "#334155",
    },
    bulletText: {
        flex: 1,
        color: "#334155",
    },
});

const stripRichText = (value: string) => value.replace(/\*\*/g, "").trim();

const resolveResumeLink = (href: string) =>
    href.startsWith("http") ? href : `${portfolioBaseUrl}${href}`;

const renderParagraph = (text: string, key: string) => (
    <Text key={key} style={styles.paragraph}>
        {stripRichText(text)}
    </Text>
);

const renderEntry = (entry: ResumeEntry, key: string) => {
    const entryHref =
        entry.pdfUrl ??
        (entry.href ? resolveResumeLink(entry.href) : undefined);

    return (
        <View key={key} style={styles.entry} wrap={false}>
            <View style={styles.entryHeader}>
                <View style={styles.entryTitleBlock}>
                    {entryHref ? (
                        <Link src={entryHref} style={styles.link}>
                            <Text style={styles.entryTitle}>
                                {stripRichText(entry.title)}
                            </Text>
                        </Link>
                    ) : (
                        <Text style={styles.entryTitle}>
                            {stripRichText(entry.title)}
                        </Text>
                    )}
                    {entry.subtitle ? (
                        <Text style={styles.entrySubtitle}>
                            {stripRichText(entry.subtitle)}
                        </Text>
                    ) : null}
                    {entryHref ? (
                        <Text style={styles.entryUrl}>{entryHref}</Text>
                    ) : null}
                </View>
                {entry.meta ? (
                    <Text style={styles.entryMeta}>{entry.meta}</Text>
                ) : null}
            </View>

            {entry.bullets ? (
                <View style={styles.bulletList}>
                    {entry.bullets.map((bullet, index) => (
                        <View
                            key={`${key}-bullet-${index}`}
                            style={styles.bulletRow}>
                            <Text style={styles.bulletMarker}>•</Text>
                            <Text style={styles.bulletText}>
                                {stripRichText(bullet)}
                            </Text>
                        </View>
                    ))}
                </View>
            ) : null}
        </View>
    );
};

const renderSection = (
    section: ResumeSectionData,
    key: string,
    isFirst: boolean,
) => (
    <View key={key} style={isFirst ? {} : styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        {section.content?.map((line, index) =>
            renderParagraph(line, `${key}-content-${index}`),
        )}
        {section.entries?.map((entry, index) =>
            renderEntry(entry, `${key}-entry-${index}`),
        )}
    </View>
);

const ResumePdfDocument = () => (
    <Document title="Jason Paciorek Resume" author="Jason Paciorek">
        <Page size="LETTER" style={styles.page}>
            <View style={styles.header} fixed>
                <View style={styles.nameBlock}>
                    <Text style={styles.name}>Jason Paciorek</Text>
                    <Text style={styles.role}>Full-Stack Developer</Text>
                </View>
                <View style={styles.contactList}>
                    {resumePdfContactLinks.map((link, index) => (
                        <View
                            key={`${link.label}-${link.value}`}
                            style={styles.contactItem}>
                            <Link
                                src={link.href ?? link.value}
                                style={styles.link}>
                                <Text>{link.value}</Text>
                            </Link>
                            {index < resumePdfContactLinks.length - 1 ? (
                                <Text style={styles.separator}>|</Text>
                            ) : null}
                        </View>
                    ))}
                </View>
            </View>

            {resumeSections.map((section, index) =>
                renderSection(section, `resume-section-${index}`, index === 0),
            )}
        </Page>
    </Document>
);

export default ResumePdfDocument;
