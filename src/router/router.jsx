import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/LayoutPublic";
import HomePage from "../pages/HomePage";
import { getPosters } from "../services/posterServices"; 
import CreateForm from "../pages/CreateForm";
import UpdateForm from "../pages/UpdateForm";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
                loader: getPosters
            },
            {
                path: "/create",
                element: <CreateForm/>
            },
            {
                path: "/update",
                element: <UpdateForm/>
            },
        ]
    },
]);

export default router;