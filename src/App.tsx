import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Component/Layout";
import { Home } from "./Pages/Home";
import { Carts } from "./Pages/Carts";

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
    ],
  },
]);

export { router };
