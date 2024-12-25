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
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service-Id</th>
                        <th>Service-Name</th>
                        <th>Service-Price</th>
                        <th>Service-Status</th>
                    </tr>
                </thead>
               {services.map((data,index)=> <tbody key={index}>
                    <tr>
                        <th>{index+1}</th>
                        <td>{data.serviceId}</td>
                        <td> {data.serviceName}</td>
                        <td>{data.price}</td>
                        <td>{data.serviceStatus}</td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    );
};

export default BookedService;