import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../AllRoute/Home";


  export const RootRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
  ]);