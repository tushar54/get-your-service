import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className=" p-8 rounded-lg shadow-lg container mx-auto *:text-center w-9/12">
            <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
            <p className="text-lg mb-4">
                Welcome to our service portal! We are dedicated to connecting people with the best solutions for their needs. Our mission is to make life easier by offering streamlined services tailored to your requirements.
            </p>
            <p className="text-lg mb-4">
                Our journey began with the simple idea of creating a platform where users can find reliable and efficient services all in one place. With a passion for quality and customer satisfaction, we strive to provide an exceptional experience.
            </p>
            <p className="text-lg">
                Have questions or need assistance? Feel free to <Link to={"/contact"} className="text-green-400 underline">contact us</Link>. We’re here to help!
            </p>
        </div>
    );
};

export default AboutMe;
