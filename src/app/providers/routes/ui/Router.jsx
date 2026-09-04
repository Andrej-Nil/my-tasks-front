import {createBrowserRouter} from "react-router-dom";
import Layout from "@/widgets/layout/index.js";
import HomePage from "@/pages/home/index.js";
import LoginPage from "@/pages/login/index.js";
import RegistrationPage from "@/pages/registration/index.js";
import PublicRoutes from "@/app/providers/routes/ui/PublicRoutes.jsx";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            // {
            //     element: <PublicRoutes />,
            //     children: [
                    { path: '/login', element: <LoginPage /> },
                    { path: '/registration', element: <RegistrationPage /> }
            //     ]
            // }
        ]
    }
]);
