import React from 'react';

const Contact = () => {
    return (
        <div className=" p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-lg mb-4 text-center">
                Have questions or need assistance? We'd love to hear from you!
            </p>
            <div className=" ">
                {/* Contact Info */}
                <div className='text-center'>
                    <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                    <p>Email: <a href="mailto:tusharahmed7083@gmail.com" className="text-blue-500 underline">tusharahmed7083@gmail.com</a></p>
                    <p>Phone: <a  className="text-blue-500 underline">+8801303078081</a></p>
                    <p>Address: Dhaka,Bangladesh</p>
                </div>
            
            </div>
        </div>
    );
};

export default Contact;
