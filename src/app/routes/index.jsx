import {createBrowserRouter} from "react-router-dom";
import PrivateRoute from "./guards/PrivateRoute";
import PublicRoute from "./guards/PublicRoute";
import Layout from "../layout/Layout";
import {ProfileEditPage} from "@/pages/profile-edit";
import { HomePage } from "@/pages/home";
import {LoginPage} from "@/pages/login";
import {RegistrationPage} from "@/pages/registration";
import {TasksPage} from "@/pages/tasks";
import {TaskPage} from "@/pages/task";
import {NotFoundPage} from "@/pages/not-found";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            { index: true, element: <HomePage /> },

            {
                element:  <PrivateRoute />,
                children: [
                    { path: 'profile/edit', element: <ProfileEditPage /> },
                    { path: 'tasks', element: <TasksPage /> },
                    { path: 'tasks/:taskId', element: <TaskPage /> },
                ]
            },

            {
                element: <PublicRoute />,
                children: [
                    { path: 'login', element: <LoginPage /> },
                    { path: 'registration', element: <RegistrationPage /> }
                ]
            },

            { path: "*", element: <NotFoundPage /> }
        ]
    }
]);
