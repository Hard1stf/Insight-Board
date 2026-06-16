import { createBrowserRouter } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />
    },
    {
        path: "/analytics",
        element: <AnalyticsPage />
    },
    {
        path: "/reports",
        element: <ReportsPage />
    },
    {
        path: "/settings",
        element: <SettingsPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);