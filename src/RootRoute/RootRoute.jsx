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
  }
  ]);