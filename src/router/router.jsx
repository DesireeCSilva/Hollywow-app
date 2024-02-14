import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { getPosters } from "../services/posterServices"; 
// import Card from "../components/Card";
// import { deletePosters } from "../services/posterServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        loader: getPosters
    }
    // {
    //     path: "/card",
    //     element: <Card/>,
    //     loader: deletePosters
    // }
]);

export default router;