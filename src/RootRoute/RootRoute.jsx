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
import DynamicTitle from "../Dynamictitle/DynamicTitle";
import ServiceToDo from "../AllRoute/ServiceToDo";


  export const RootRoute = createBrowserRouter([
   {
    path:'/',
    element:<DynamicTitle></DynamicTitle>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<PopularServices></PopularServices>
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
        },
        {
          path:'/serviceToDo',
          element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
        }
        ]
      },
      
    ]
   }
  ]);