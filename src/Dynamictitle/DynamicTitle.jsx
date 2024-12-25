import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/login": "Login Page",
      "/": "Home",
      "/register": "Registration",
      "/allmovies": "All Movies",
      "/addmovie": "Add Movie",
    };

    // Check for dynamic routes or nested paths
    if (location.pathname.startsWith("/favorite/")) {
      const id = location.pathname.split("/")[2]; // Extract the dynamic ID
      document.title = `favorite - ${id || "Unknown"}`;
    } 
    else if (location.pathname.startsWith("/allmovies/")) {
        const id = location.pathname.split("/")[2]; // Extract the dynamic ID
        document.title = `allmovies - ${id || "Unknown"}`;
      } 
    else if (location.pathname.startsWith("/watchlists/")) {
        const id = location.pathname.split("/")[2]; // Extract the dynamic ID
        document.title = `watchlists - ${id || "Unknown"}`;
      } 
      
    else {
      document.title = routeTitles[location.pathname] || "Default Title";
    }
  }, [location]);

  return <Outlet />;
};

export default DynamicTitle;
