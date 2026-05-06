import { META_MAP, MetaMapKey } from "../data/meta";

type PageMetadataProps = {
    route: MetaMapKey;
};

const BASE_URL = "https://paciorekj.github.io";

export default function PageMetadata({ route }: PageMetadataProps) {
    const meta = META_MAP[route];
    const canonicalUrl = `${BASE_URL}${meta.path}`;

    return (
        <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:url" content={canonicalUrl} />

            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
        </>
    );
}
