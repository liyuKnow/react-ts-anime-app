import { createBrowserRouter } from "react-router-dom";

import { Home,Search,Detail,Favorite }  from "../pages/index";

const router = createBrowserRouter([
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
]);

export default router;