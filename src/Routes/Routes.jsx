import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/User/Login";
import Registration from "../pages/User/Registration";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: '/registration',
        element: <Registration />
    },
    {
        path: '/login',
        element: <Login />
    },

    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: 'dash',
                element: <Dashboard></Dashboard>
            },

        ],
    },

]);

