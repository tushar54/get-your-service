import React from 'react';
import Navbar from '../AllComponent/Navbar';
import Footer from '../AllComponent/Footer';
import Bannar from '../AllComponent/Bannar';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {
    const location=useLocation()
    console.log(location)
    return (
        <div>
            <div className='container mx-auto'><Navbar></Navbar></div>
            <div>
                {
                    location.pathname==='/'&&<Bannar></Bannar>
                }

                <Outlet></Outlet>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;