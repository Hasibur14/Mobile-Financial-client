import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Registration from "../pages/User/Registration";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {

            },
        ],
    },

    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [

            // user Routes
            {
                path: 'registration',
                element: <Registration />
            },
        ]
        
  }
]);

