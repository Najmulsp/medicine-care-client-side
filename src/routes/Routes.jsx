import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../layout/ErrorPage";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        }
      ]
    },
  ]);
