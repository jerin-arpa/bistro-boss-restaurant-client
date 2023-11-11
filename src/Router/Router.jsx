import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/contact",
                element: <Home></Home>,
            },
            {
                path: "/dashboard",
                element: <Home></Home>,
            },
            {
                path: "/ourMenu",
                element: <Home></Home>,
            },
            {
                path: "/ourShop",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);

export default router;