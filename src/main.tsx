import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import "./index.css";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import RoutineGymJournalCaseStudyPage from "./pages/RoutineGymJournalCaseStudyPage";
import SkillsPage from "./pages/SkillsPage";
import WhiteLabelCaseStudyPage from "./pages/WhiteLabelCaseStudyPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "resume", element: <ResumePage /> },
            { path: "skills", element: <SkillsPage /> },
            { path: "projects", element: <ProjectsPage /> },
            {
                path: "projects/white-label-membership-platform",
                element: <WhiteLabelCaseStudyPage />,
            },
            {
                path: "projects/routine-gym-journal",
                element: <RoutineGymJournalCaseStudyPage />,
            },
            { path: "experience", element: <ExperiencePage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
