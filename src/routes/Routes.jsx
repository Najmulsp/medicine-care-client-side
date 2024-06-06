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
import PrivetRoute from "../authentication/PrivetRoute";
import Dashboard from "../layout/Dashboard";
import Analytics from "../pages/dashboard/participant/Analytics";
import ParticipantProfile from "../pages/dashboard/participant/ParticipantProfile";
import RegisteredCamps from "../pages/dashboard/participant/RegisteredCamps";
import PaymentHistory from "../pages/dashboard/participant/PaymentHistory";

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
            element: <PrivetRoute><CampDetails></CampDetails></PrivetRoute>,
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
            // dashboard
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'analytics',
          element: <Analytics></Analytics>
        },
        {
          path: 'participantProfile',
          element: <ParticipantProfile></ParticipantProfile>
        },
        {
          path: 'registerCamps',
          element: <RegisteredCamps></RegisteredCamps>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
      ]
    }
  ]);
