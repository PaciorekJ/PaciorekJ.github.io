import { profile768Webp } from "../assets";

export default function HomePageMetadata() {
    return (
        <>
            <link
                rel="preload"
                as="image"
                href={profile768Webp}
                type="image/webp"
                fetchPriority="high"
            />
        </>
    );
}
