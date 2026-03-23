import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

export const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
