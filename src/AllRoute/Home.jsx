import React from 'react';
import Navbar from '../AllComponent/Navbar';
import Footer from '../AllComponent/Footer';
import Bannar from '../AllComponent/Bannar';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto'><Navbar></Navbar></div>
            <div>
                <Bannar></Bannar>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;