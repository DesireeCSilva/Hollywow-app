import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Nav from "../components/Nav/Nav";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/create",
        element: <Create/>,
    },
    {
        path: "/edit",
        element: <Edit/>,
    },
    {
        path: "/nav",
        element: <Nav/>,
    }
]);

export default router;