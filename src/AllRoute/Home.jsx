import React, { useEffect, useState } from 'react';
import Navbar from '../AllComponent/Navbar';
import Footer from '../AllComponent/Footer';
import Bannar from '../AllComponent/Bannar';
import { Outlet, useLocation, } from 'react-router-dom';
import WhyWeBest from '../AllComponent/WhyWeBest';

const Home = () => {
    console.log(navigation)
    const location = useLocation()
    const [loading, setLoading] = useState(false);
    console.log(location)
    useEffect(() => {
        setLoading(true); 
        const timeout = setTimeout(() => setLoading(false), 500); 
        return () => clearTimeout(timeout);
      }, [location]);
  if(loading)
  {
    return  <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
    <span className="loading loading-dots loading-lg"></span>
  </div>
  }
    return (
        <div>

            <div className='container mx-auto'><Navbar></Navbar></div>
            <div>
                {
                    location.pathname === '/' && <Bannar></Bannar>
                }
                <Outlet></Outlet>
                {
                    location.pathname === '/' && <WhyWeBest></WhyWeBest>
                }

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;