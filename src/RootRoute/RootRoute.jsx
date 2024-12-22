import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../AllRoute/Home";
import Login from "../AllRoute/Login";
import Register from "../AllRoute/Register";
import AddAService from "../AllRoute/AddAService";


  export const RootRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
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
    element:<AddAService></AddAService>
  }
  ]);