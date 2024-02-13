import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { getPosters } from "../services/posterServices"; 


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        loader: getPosters
    }
  ]);

  export default router;