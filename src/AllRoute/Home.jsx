import React from 'react';
import Navbar from '../AllComponent/Navbar';
import Footer from '../AllComponent/Footer';
import Bannar from '../AllComponent/Bannar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto'><Navbar></Navbar></div>
            <div>
                <Bannar></Bannar>

                <Outlet></Outlet>

            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;