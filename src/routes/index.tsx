import { createBrowserRouter } from "react-router-dom";
import { Home,Layout, Search,Detail,Favorite }  from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  
]);

export default router;