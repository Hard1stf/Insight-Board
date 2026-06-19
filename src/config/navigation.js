import { LayoutDashboard, BarChart3, FileText, Settings } from "lucide-react"

export const navigation = [
    {
        label: "DashBoard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        label: "Analytics",
        path: "/analytics",
        icon: BarChart3,
    },
    {
        label: "Reports",
        path: "/reports",
        icon: FileText,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Settings,
    },
];