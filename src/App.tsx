import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Component/Layout";
import { Home } from "./Pages/Home";
import { Carts } from "./Pages/Carts";
import { Details } from "./Pages/Details";
import { NotFound } from "./Pages/NotFound/index";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
