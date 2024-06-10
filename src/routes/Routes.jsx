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
import OrganizerProfile from "../pages/dashboard/organizer/OrganizerProfile";
import AddCamp from "../pages/dashboard/organizer/AddCamp";
import ManageCamps from "../pages/dashboard/organizer/ManageCamps";
import ManegeRegisteredCamps from "../pages/dashboard/organizer/ManegeRegisteredCamps";
import Payment from "../pages/dashboard/participant/Payment";
import UpdateCamps from "../pages/dashboard/organizer/UpdateCamps";
import Feedback from "../pages/dashboard/participant/Feedback";

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
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children: [
                    // organizer routes
        {
          path: "organizerProfile",
          element:<OrganizerProfile></OrganizerProfile>
        },
        {
          path: "addACamp",
          element:<AddCamp></AddCamp>
        },
        {
          path: "manageCamps",
          element:<ManageCamps></ManageCamps>,
          
        },
        {
          path: "manageCamps/update/:id",
          element:<UpdateCamps></UpdateCamps>,
          loader: ({params}) => fetch(`http://localhost:5000/campDetails/${params.id}`)
        },
        {
          path: "manageRegisterCamps",
          element:<ManegeRegisteredCamps></ManegeRegisteredCamps>
        },

                    // participants routes
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
          element: <RegisteredCamps></RegisteredCamps>,
        },
        {
          path: 'registerCamps/feedback',
          element: <Feedback></Feedback>,
          
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
      ]
    }
  ]);
