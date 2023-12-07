import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Root, {loader as rootLoader} from "./routes/root";
import { action as rootAction } from "./routes/root";
import { Login } from "./components/Login/Login";
import LayoutDefault from "./components/Layout/LayoutDefault";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "/contacts/:contactId",
                element: <Contact />,
            },
        ]
    },
    {
        path: "/home",
        element: <LayoutDefault />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
    },

]);