import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../AllContext/Authcontext';

const BookedService = () => {
    const { currentUser } = useContext(Context)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/booked/${currentUser.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [currentUser.email]);
console.log(services)

    return (
        <div>
            hi i am from booked service
        </div>
    );
};

export default BookedService;