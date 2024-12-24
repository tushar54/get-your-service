import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../AllRoute/Home";
import Login from "../AllRoute/Login";
import Register from "../AllRoute/Register";
import AddAService from "../AllRoute/AddAService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PopularServices from "../AllRoute/PopularServices";
import AllService from "../AllRoute/AllService";
import ServiceDetails from "../AllRoute/ServiceDetails";
import ManageService from "../AllRoute/ManageService ";
import BookedService from "../AllRoute/BookedService";


  export const RootRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:'/',
          element:<PopularServices></PopularServices>

        }
      ]
    },
    {
      path:'/service/:id',
      element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
    },
    {
      path:'/allServices',
      element:<AllService></AllService>
    },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  },
  {
    path:"/addService",
    element:<PrivateRoute><AddAService></AddAService></PrivateRoute>
  },
  {
    path:'/ManageService',
    element:<PrivateRoute><ManageService></ManageService> </PrivateRoute>
  },
  {
    path:'/bookedservice',
    element:<PrivateRoute><BookedService></BookedService></PrivateRoute>
  }
  ]);