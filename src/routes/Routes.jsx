import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../layout/ErrorPage";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AvailableCamps from "../pages/availableCamps/AvailableCamps";
import CampDetails from "../pages/availableCamps/CampDetails";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/availableCamps",
            element: <AvailableCamps></AvailableCamps>,
        },
        {
            path: "/campDetails/:id",
            element: <CampDetails></CampDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/campDetails/${params.id}`)
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);
