import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import { Login } from "./components/Login/Login";
import LayoutDefault from "./components/Layout/LayoutDefault";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <LayoutDefault />,
        errorElement: <ErrorPage />,
    },

]);