import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Edit from "../pages/Edit";


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
    }
]);

export default router;