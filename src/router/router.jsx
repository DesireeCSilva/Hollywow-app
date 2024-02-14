import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { getPosters } from "../services/posterServices"; 
import CreateForm from '../pages/CreateForm';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        loader: getPosters
    },
    {
        path: "/create",
        element: <CreateForm/>,
    }
]);

export default router;