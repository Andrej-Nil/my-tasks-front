import {createBrowserRouter} from "react-router-dom";
import PublicRoute from "@/app/routes/guards/PublicRoute.jsx";
import Layout from "@/app/layout/Layout.jsx";
import HomePage from "@/pages/home/index.js";
import LoginPage from "@/pages/login/index.js";
import RegistrationPage from "@/pages/registration/index.js";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            {
                element: <PublicRoute />,
                children: [
            { path: '/login', element: <LoginPage /> },
            { path: '/registration', element: <RegistrationPage /> }
                ]
            }
        ]
    }
]);
