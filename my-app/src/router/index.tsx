import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Publish from "../pages/Publish";
import AuthRouter from "@/components/AuthRouter";

import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRouter><Layout /></AuthRouter>,
        children: [
            {
                index: true, // 表示这是默认子路由
                element: <Navigate to="/home" replace />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'article',
                element: <Article />,
            },
            {
                path: 'publish',
                element: <Publish />,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
        // Component: Login,
    }
]);

export default router;