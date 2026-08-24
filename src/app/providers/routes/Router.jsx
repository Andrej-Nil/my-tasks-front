import {createBrowserRouter} from "react-router-dom";
import Layout from "@/widgets/layout/index.js";
import HomePage from "@/pages/home/index.js";
import LoginPage from "@/pages/login/index.js";
import RegistrationPage from "@/pages/registration/index.js";



export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/registration', element: <RegistrationPage /> }
        ]
    }
]);

