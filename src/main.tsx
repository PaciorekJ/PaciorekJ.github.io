import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: withSuspense(<HomePage />) },
            { path: "resume", element: withSuspense(<ResumePage />) },
            { path: "skills", element: withSuspense(<SkillsPage />) },
            { path: "projects", element: withSuspense(<ProjectsPage />) },
            {
                path: "projects/white-label-membership-platform",
                element: withSuspense(<WhiteLabelCaseStudyPage />),
            },
            {
                path: "projects/routine-gym-journal",
                element: withSuspense(<RoutineGymJournalCaseStudyPage />),
            },
            {
                path: "projects/fitnessbytes",
                element: withSuspense(<FitnessBytesCaseStudyPage />),
            },
            {
                path: "projects/gamehwnd",
                element: withSuspense(<GameHwndCaseStudyPage />),
            },
            { path: "experience", element: withSuspense(<ExperiencePage />) },
            { path: "contact", element: withSuspense(<ContactPage />) },
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
