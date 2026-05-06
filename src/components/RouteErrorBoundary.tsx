// src/components/RouteErrorBoundary.tsx
import { isRouteErrorResponse, useRouteError } from "react-router";

const isChunkLoadError = (error: unknown) =>
    error instanceof TypeError &&
    error.message.includes("Failed to fetch dynamically imported module");

export default function RouteErrorBoundary() {
    const error = useRouteError();

    if (isChunkLoadError(error)) {
        return (
            <main className="shell page-shell">
                <section className="content-card">
                    <p className="eyebrow">Update available</p>
                    <h1>Refresh needed</h1>
                    <p>
                        The site was updated while this session was open.
                        Refresh to load the latest version.
                    </p>
                    <div className="page-shell__actions">
                        <button
                            className="button-link button-link--primary"
                            type="button"
                            onClick={() => window.location.reload()}>
                            Refresh Page
                        </button>
                        <a className="button-link button-link--ghost" href="/">
                            Go Home
                        </a>
                    </div>
                </section>
            </main>
        );
    }

    if (isRouteErrorResponse(error)) {
        return (
            <main className="shell page-shell">
                <section className="content-card">
                    <p className="eyebrow">Error {error.status}</p>
                    <h1>{error.statusText}</h1>
                    <a className="button-link button-link--primary" href="/">
                        Go Home
                    </a>
                </section>
            </main>
        );
    }

    return (
        <main className="shell page-shell">
            <section className="content-card">
                <p className="eyebrow">Application error</p>
                <h1>Something went wrong</h1>
                <p>Refresh the page or return home.</p>
                <div className="page-shell__actions">
                    <button
                        className="button-link button-link--primary"
                        type="button"
                        onClick={() => window.location.reload()}>
                        Refresh Page
                    </button>
                    <a className="button-link button-link--ghost" href="/">
                        Go Home
                    </a>
                </div>
            </section>
        </main>
    );
}
