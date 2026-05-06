import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import PageMetadata from "./components/PageMetadata";
import { ROUTE_PATHS, type RoutePath } from "./data/meta";
import "./index.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const WhiteLabelCaseStudyPage = lazy(
    () => import("./pages/WhiteLabelCaseStudyPage"),
);
const RoutineGymJournalCaseStudyPage = lazy(
    () => import("./pages/RoutineGymJournalCaseStudyPage"),
);
const FitnessBytesCaseStudyPage = lazy(
    () => import("./pages/FitnessBytesCaseStudyPage"),
);
const GameHwndCaseStudyPage = lazy(
    () => import("./pages/GameHwndCaseStudyPage"),
);

const withSuspense = (element: React.ReactNode) => (
    <Suspense fallback={null}>{element}</Suspense>
);

const withRoute = (element: React.ReactNode, route: RoutePath) => (
    <>
        <PageMetadata route={route} />
        {withSuspense(element)}
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: withRoute(<HomePage />, ROUTE_PATHS.HOME),
            },
            {
                path: "resume",
                element: withRoute(<ResumePage />, ROUTE_PATHS.RESUME),
            },
            {
                path: "skills",
                element: withRoute(<SkillsPage />, ROUTE_PATHS.SKILLS),
            },
            {
                path: "projects",
                element: withRoute(<ProjectsPage />, ROUTE_PATHS.PROJECTS),
            },
            {
                path: "projects/white-label-membership-platform",
                element: withRoute(
                    <WhiteLabelCaseStudyPage />,
                    ROUTE_PATHS.WHITE_LABEL_MEMBERSHIP_PLATFORM,
                ),
            },
            {
                path: "projects/routine-gym-journal",
                element: withRoute(
                    <RoutineGymJournalCaseStudyPage />,
                    ROUTE_PATHS.ROUTINE_GYM_JOURNAL,
                ),
            },
            {
                path: "projects/fitnessbytes",
                element: withRoute(
                    <FitnessBytesCaseStudyPage />,
                    ROUTE_PATHS.FITNESSBYTES,
                ),
            },
            {
                path: "projects/gamehwnd",
                element: withRoute(
                    <GameHwndCaseStudyPage />,
                    ROUTE_PATHS.GAMEHWND,
                ),
            },
            {
                path: "experience",
                element: withRoute(<ExperiencePage />, ROUTE_PATHS.EXPERIENCE),
            },
            {
                path: "contact",
                element: withRoute(<ContactPage />, ROUTE_PATHS.CONTACT),
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
