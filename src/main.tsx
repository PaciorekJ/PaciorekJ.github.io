import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import PageMetadata from "./components/PageMetadata";
import RouteErrorBoundary from "./components/RouteErrorBoundary";
import { ROUTE_PATHS, type RoutePath } from "./data/meta";
import "./index.css";

import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import FitnessBytesCaseStudyPage from "./pages/FitnessBytesCaseStudyPage";
import GameHwndCaseStudyPage from "./pages/GameHwndCaseStudyPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import RoutineGymJournalCaseStudyPage from "./pages/RoutineGymJournalCaseStudyPage";
import SkillsPage from "./pages/SkillsPage";
import WhiteLabelCaseStudyPage from "./pages/WhiteLabelCaseStudyPage";

const withRoute = (element: React.ReactNode, route: RoutePath) => (
    <>
        <PageMetadata route={route} />
        {element}
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <RouteErrorBoundary />,
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
