import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/LayoutPublic";
import HomePage from "../pages/HomePage";
import { getPosters } from "../services/posterServices";
import CreateForm from "../pages/CreateForm";
import UpdateForm from "../pages/UpdateForm";
import CardDetail from "../pages/CardDetail";


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
                path: "/update/:id",
                element: <UpdateForm/>
            },
            {
                path: "/card/:id",
                element: <CardDetail />
            }
        ]
    },
]);

export default router;