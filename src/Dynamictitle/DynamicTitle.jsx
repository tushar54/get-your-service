import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/login": "Login Page",
      "/": "Home",
      "/register": "Registration",
      "/allServices": "allServices",
      "/addService": "addService",
      "/ManageService": "ManageService",
      "/bookedservice": "bookedservice",
      "/serviceToDo": "serviceToDo",
    };

    // Check for dynamic routes or nested paths
    if (location.pathname.startsWith("/service/")) {
      const id = location.pathname.split("/")[2]; // Extract the dynamic ID
      document.title = `service - ${id || "Unknown"}`;
    } 
    else {
      document.title = routeTitles[location.pathname] || "Default Title";
    }
  }, [location]);

  return <Outlet />;
};

export default DynamicTitle;
